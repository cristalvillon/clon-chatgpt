const API_URL = "https://openrouter.ai/api/v1/chat/completions";
const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

const useOpenRouter = async (messages) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "mistralai/mistral-7b-instruct:free", // Puedes cambiar por otro modelo compatible
      messages
    })
  });

  if (!response.ok) {
    throw new Error("Error al obtener respuesta de OpenRouter");
  }

  const data = await response.json();
  return data.choices[0].message.content;
};

export default useOpenRouter;
