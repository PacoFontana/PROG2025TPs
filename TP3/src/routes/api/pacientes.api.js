const express = require('express');
const rutaPacientes = express.Router();
const { controller: pacientesController } = require('../../controllers/API/pacientes.controller.js');
const validarPacientes = require('../../middlewares/validarPacientes.middleware.js');
const { verifyTokenMiddleware } = require('../../middlewares/verifyToken.middleware.js');

// Rutas de la API REST
rutaPacientes.post('/login', pacientesController.login);
rutaPacientes.get('/:id', verifyTokenMiddleware, pacientesController.getById);
rutaPacientes.get('/', verifyTokenMiddleware, pacientesController.list);
rutaPacientes.post('/', validarPacientes, verifyTokenMiddleware, pacientesController.create);
rutaPacientes.put('/:id', validarPacientes, verifyTokenMiddleware, pacientesController.update);
rutaPacientes.delete('/:id', verifyTokenMiddleware, pacientesController.delete);

module.exports = rutaPacientes;