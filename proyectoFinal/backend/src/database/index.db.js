const { Sequelize } = require('sequelize');
const config = require('./config').development;

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password, 
    {
        host: config.host,
        dialect: config.dialect,
        logging: false, //lo que hace este logging false es que no se impriman consultas en consola
    }
);

async function connectDB() {
    try {
        await sequelize.authenticate();
        console.log('Base de datos conectada correctamente');        
    }
    catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        
    }
}

connectDB();

module.exports = { sequelize }