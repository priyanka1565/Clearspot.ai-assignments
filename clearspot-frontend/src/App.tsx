import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SiteList from "./components/SiteList";
import AlarmList from "./components/AlarmList";
import ErrorBoundary from "./components/ErrorBoundary";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <SiteList />
        <AlarmList />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
