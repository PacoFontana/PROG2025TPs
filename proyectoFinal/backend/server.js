const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { sequelize } = require('./database/index.db');
const Producto = require('./models/producto.model');
const productoRoutes = require('./routes/producto.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', productoRoutes);

sequelize.sync({force: false})
    .then(() => {
        console.log('Base de datos sincronizada correctamente');
    })
    .catch((error) => {
        console.error('Error al sincronizar la base de datos:', error);
    });

app.get('/', (req, res) => {res.send('API de Productos');});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});