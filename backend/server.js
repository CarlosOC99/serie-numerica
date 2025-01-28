// backend/server.js
const express = require('express');
const cors = require('cors');
const { calculateSerie } = require('./calc/series');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/calculate', (req, res) => {
  const { n } = req.body;

  if (!n || n < 1) {
    return res.status(400).json({ error: 'El valor de n debe ser mayor o igual a 1' });
  }

  try {
    const result = calculateSerie(n);
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
