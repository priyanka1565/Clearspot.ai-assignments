import { useEffect, useRef, useState } from "react";

export const useWebSocket = (url: string) => {
  const ws = useRef<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [lastMessage, setLastMessage] = useState<any>(null);

  useEffect(() => {
    ws.current = new WebSocket(url);

    ws.current.onopen = () => setIsConnected(true);
    ws.current.onclose = () => setIsConnected(false);
    ws.current.onerror = () => setIsConnected(false);

    ws.current.onmessage = (event) => {
      try {
        setLastMessage(JSON.parse(event.data));
      } catch {
        console.error("Invalid WebSocket message");
      }
    };

    return () => ws.current?.close();
  }, [url]);

  const sendMessage = (message: any) => {
    ws.current?.send(JSON.stringify(message));
  };

  return { isConnected, lastMessage, sendMessage };
};
