const express = require('express');
const router = express.Router();
const { obtenerListadoPacientes } = require('../../controllers/API/pacientes.controller');
const pacientesModel = require('../../models/mock/pacientes.models.js');
const Paciente = require('../../models/mock/entities/paciente.entity.js');

// GET /pacientes/ver
router.get('/ver', async (req, res) => {
    try {
        const pacientes = await obtenerListadoPacientes();
        res.render('pacientes/index', { pacientes });
    } catch (error) {
        res.status(500).send('Error al obtener pacientes');
    }
});

// Mostrar formulario para crear paciente
router.get('/nuevo', (req, res) => {
    res.render('pacientes/nuevoPaciente'); // Renderiza el formulario EJS
});

// Guardar paciente desde el formulario
router.post('/nuevo', async (req, res) => {
    try {
        const { dni, nombre, apellido, email , password} = req.body;
        const nuevoPaciente = new Paciente(dni, nombre, apellido, email, password);
        await pacientesModel.create(nuevoPaciente);
        res.redirect('/pacientes/ver');
    } catch (error) {
        res.status(400).send('Error al crear paciente: ' + error.message);
    }
});

//Eliminamos por id
router.post('/eliminar/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pacientesModel.delete(id);
        res.redirect('/pacientes/ver');
    } catch (error) {
        res.status(500).send('Error al eliminar el paciente');
    }
});

module.exports = router;
