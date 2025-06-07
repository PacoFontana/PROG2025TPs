const express = require("express");
const router = express.Router();
const { obtenerListadoTurnos } = require("../../controllers/API/turnos.controller.js");
const turnosModel = require('../../models/mock/turnos.models.js');
const Turno = require('../../models/mock/entities/turno.entity.js');
const pacientesModel = require('../../models/mock/pacientes.models.js');

router.get('/ver', async (req, res) => {
    try {
        const turnos = await obtenerListadoTurnos();
        res.render('turnos/index', { turnos });
    } catch (error) {
        res.status(500).send('Error al obtener turnos');
    }
});

router.post('/cancelar/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await turnosModel.deleteById(id);
        res.redirect('/turnos/ver');
    } catch (error) {
        res.status(500).send('Error al cancelar el turno');
    }
});

router.get('/nuevo', async (req, res) => {
    try {
        const pacientes = await pacientesModel.list();
        res.render('turnos/nuevoTurno', { pacientes });
    } catch (error){
        res.status(500).send('Error al crear el turno');
    }
});

router.post('/nuevo', async (req, res) => {
    try {
        const { idPaciente, fecha, hora } = req.body;
        const nuevoTurno = new Turno(idPaciente, fecha, hora);
        await turnosModel.create(nuevoTurno);
        res.redirect('/turnos/ver'); // redirige a la lista de turnos al crear exitosamente
    } catch (error) {
        res.status(400).send('Error al crear turno: ' + error.message);
    }
});

module.exports = router;
