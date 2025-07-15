import { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";

function Chat() {
  const { messages, sendMessage } = useContext(ChatContext);
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    await sendMessage(input);
    setInput("");
  };

  return (
    <div style={{ flex: 1 }}>
      <h2>Chat</h2>
      <div style={{ border: "1px solid #ccc", padding: "1rem", height: "300px", overflowY: "auto" }}>
        {messages.map((msg, i) => (
          <div key={i}>
            <strong>{msg.role}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: "100%", padding: "0.5rem" }}
          placeholder="Escribe tu mensaje..."
        />
      </form>
    </div>
  );
}

export default Chat;
