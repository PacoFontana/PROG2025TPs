const express = require("express");
const app = express();
const port = 3000;

const rutaPacientes = require('./routes/pacientes.route.js'); 

app.use(express.json());

app.use('/api/v1', rutaPacientes);

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("API Turnos Médicos funcionando ✅");
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
