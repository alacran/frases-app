const express = require('express');
const app = express();
const frases = require('./frases.json');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🌟 Bienvenido a la API de Frases Motivacionales 🌟');
});

app.get('/frase', (req, res) => {
  const randomIndex = Math.floor(Math.random() * frases.length);
  const frase = frases[randomIndex];
  res.json({ frase });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});

