const express = require('express');
<<<<<<< HEAD
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
=======
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
>>>>>>> ivoans
