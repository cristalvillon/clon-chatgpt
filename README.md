# Clon Básico de ChatGPT con OpenRouter

Este proyecto es un clon básico de chatGPT desarrollado con react, que originalmente estaba pensado para usar la API de Ollama y el modelo DevSeek R1. pero debido a limitaciones de hardware en mi equipo, tuve que reemplazar Ollama por la API de OpenRouter para lograr la funcionalidad principal

## Descripción

- Utiliza React con Context y useReducer para manejar el estado global del chat
- Implementa un Custom Hook (`useOpenRouter`) para consumir la API de OpenRouter
- Cuenta con componentes principales `Chat` para enviar mensajes y `History` para mostrar el historial
- El enfoque está en la funcionalidad más que en la apariencia visual

## Dificultades y notas

- Ollama no fue posible de usar en mi máquina debido a limitaciones técnicas (hardware ysoftware)
- Se reemplazó por OpenRouter, lo que requirió ajustar la forma de consumir la API
- Algunos problemas al integrar y configurar la API Key en el entorno local
- El proyecto funciona correctamente en su mayoría, pero quedan partes por ajustar 

---

Gracias por revisar el proyecto, estoy abierta a mejorar y corregir cualquier aspecto que sea necesario y mejorar su funcionalidad 

