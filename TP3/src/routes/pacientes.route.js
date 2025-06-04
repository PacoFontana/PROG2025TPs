const express = require('express')
const rutaPacientes = express.Router();
const pacientesController = require('../controllers/API/pacientes.controller.js');

//const {Router} = require('express');

const  {verifyTokenMiddleware}  = require('../middlewares/verifyToken.middleware.js');
//const rutaPacientes = Router();

rutaPacientes.post('/login', pacientesController.login);
rutaPacientes.get('/', verifyTokenMiddleware, pacientesController.list);
rutaPacientes.post('/',verifyTokenMiddleware,pacientesController.create);
rutaPacientes.put('/:id',verifyTokenMiddleware,pacientesController.update);
rutaPacientes.delete('/:id',verifyTokenMiddleware,pacientesController.delete);

//Otras rutas CRUD


module.exports = rutaPacientes;