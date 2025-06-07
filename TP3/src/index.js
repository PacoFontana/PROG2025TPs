const express = require('express');
const app = express();
const path = require('path');

// Config EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares y parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
const turnosApiRoutes = require('./routes/api/turnos.api');
const turnosWebRoutes = require('./routes/web/turnos.web');
const pacientesApiRoutes = require('./routes/api/pacientes.api');
const pacientesWebRoutes = require('./routes/web/pacientes.web');

app.use('/api/turnos', turnosApiRoutes);
app.use('/turnos', turnosWebRoutes);
app.use('/api/pacientes', pacientesApiRoutes);
app.use('/pacientes', pacientesWebRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

// Levantar servidor
app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});