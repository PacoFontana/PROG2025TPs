const express = require("express");
const app = express();
const port = 3000;

const rutaPacientes = require('./routes/pacientes.route.js'); 
const rutaTurnos = require('./routes/turnos.route.js'); // Importar la ruta de turnos

app.use(express.json());

app.use('/api/v1/pacientes', rutaPacientes);
app.use('/api/v1/turnos', rutaTurnos);

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("API Turnos Médicos funcionando ✅");
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
