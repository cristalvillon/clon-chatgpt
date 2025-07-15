import Chat from "./components/Chat";
import History from "./components/History";
import { ChatProvider } from "./context/ChatContext";

function App() {
  return (
    <ChatProvider>
      <div style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
        <Chat />
        <History />
      </div>
    </ChatProvider>
  );
}

export default App;

