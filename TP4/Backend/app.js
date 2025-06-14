const express = require('express');
const cors = require('cors');
const personaRouter = require('./routes/persona.route.js');
const app = express();

app.use(cors())
app.use(express.json());
app.use('/personas', personaRouter);


app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
}
);