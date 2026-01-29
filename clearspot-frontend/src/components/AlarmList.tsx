import { useEffect, useState } from "react";
import { useWebSocket } from "../hooks/useWebSocket";
import type { Alarm } from "../api/types/alarm";

const AlarmList = () => {
  const { lastMessage, isConnected } = useWebSocket("wss://echo.websocket.org");
  const [alarms, setAlarms] = useState<Alarm[]>([]);

  useEffect(() => {
    if (lastMessage?.event === "alarm.created") {
      setAlarms((prev) => [lastMessage.data, ...prev]);
    }
  }, [lastMessage]);

  return (
    <div>
      <h3>Alarms {isConnected ? "🟢" : "🔴"}</h3>
      {alarms.map((alarm) => (
        <div key={alarm.id} style={{ border: "1px solid red", margin: 4 }}>
          {alarm.message} ({alarm.severity})
        </div>
      ))}
    </div>
  );
};

export default AlarmList;
