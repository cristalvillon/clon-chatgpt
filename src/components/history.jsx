import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

function History() {
  const { messages } = useContext(ChatContext);

  return (
    <div style={{ width: "300px" }}>
      <h2>Historial</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {messages
          .filter((msg) => msg.role === "user")
          .map((msg, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              <span>🗨️ {msg.content}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default History;

