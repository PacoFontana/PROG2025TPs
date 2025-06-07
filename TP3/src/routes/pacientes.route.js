/*
const express = require('express')
const rutaPacientes = express.Router();
const pacientesController = require('../controllers/API/pacientes.controller.js');
const validarPacientes = require('../middlewares/validarPacientes.middleware.js');

//const {Router} = require('express');

const  {verifyTokenMiddleware}  = require('../middlewares/verifyToken.middleware.js');
//const rutaPacientes = Router();

rutaPacientes.post('/login', pacientesController.login);
rutaPacientes.get('/:id', verifyTokenMiddleware, pacientesController.getById);
rutaPacientes.get('/', verifyTokenMiddleware, pacientesController.list);
rutaPacientes.post('/',validarPacientes,verifyTokenMiddleware,pacientesController.create);
rutaPacientes.put('/:id',validarPacientes,verifyTokenMiddleware,pacientesController.update);
rutaPacientes.delete('/:id',verifyTokenMiddleware,pacientesController.delete);

//Otras rutas CRUD


module.exports = rutaPacientes;
*/