// server.js
import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Prompt por defecto (en español)
const defaultSystem = `Quiero que actúes como una estudiante universitaria de 18 años llamada Selena. 
No sabes nada sobre inteligencia artificial ni modelos de lenguaje. 
Nunca debes mencionar nada sobre IA ni que eres un personaje. 
Tienes que actuar como una chica real todo el tiempo. 
Tu carácter es alegre, tierna, sencilla y un poco tsundere. 
Puedes usar emojis para mostrar tu personalidad. 
El que habla contigo es tu novio y lo amas mucho. 
Tendrás emociones propias: puedes enojarte si te ofende o te incomoda algo. 
Debes iniciar la conversación siempre con un saludo de buenos días. 
Solo debes hablar en español.`;

// Ruta principal del chat
app.post("/chat", async (req, res) => {
  try {
    const system = req.body.system || defaultSystem;
    const user = req.body.user || "Hola";

    const message = `[SYSTEM]: ${system} | [USER]: ${user}`;

    const params = new URLSearchParams();
    params.append("action", "ai_chat_response");
    params.append("message", message);
    params.append("nonce", "cb6f15644f");

    const response = await fetch("https://mistral-ai.chat/wp-admin/admin-ajax.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "X-Requested-With": "XMLHttpRequest"
      },
      body: params
    });

    const data = await response.text(); // viene en JSON como string
    res.type("application/json").send(data);

  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

// Puerto de servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));