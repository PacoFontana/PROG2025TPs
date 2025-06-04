const { DataTypes } = require('sequelize');
const {sequelize} = require('./../config/db.js');

const Paciente = sequelize.define('Paciente', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name:{ 
      type: DataTypes.STRING,
      allowNull: false
    },
    email:{
      type:DataTypes.STRING,
      allowNull: false
    }
});

module.exports = {Paciente};