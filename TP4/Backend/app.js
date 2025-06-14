const express = require('express');
const app = express();
const personaRoutes = require('./routes/personas.routes');
const PORT = 3000;

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use('/', personaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});