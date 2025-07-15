import React, { createContext, useState } from "react";
import { useOpenRouter } from "../hooks/useOpenRouter"; // Ajusta la ruta si es necesario

export const ChatContext = createContext();

export function ChatProvider({ children }) {
  const { sendMessage, loading, error } = useOpenRouter();
  const [messages, setMessages] = useState([]);

  // Función para enviar mensaje y actualizar el estado
  const handleSendMessage = async (userMessage) => {
    // Agregar mensaje del usuario al estado
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);

    // Llamar a la API con sendMessage y esperar respuesta
    const response = await sendMessage(userMessage);

    if (response && response.choices && response.choices.length > 0) {
      const botMessage = response.choices[0].message;
      setMessages((prev) => [...prev, botMessage]);
    }
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        loading,
        error,
        sendMessage: handleSendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
