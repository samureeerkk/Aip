const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("API de consultas online 🚀");
});

// Usar porta do ambiente ou 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});