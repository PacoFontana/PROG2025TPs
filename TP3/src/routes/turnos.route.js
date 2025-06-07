/*const express = require("express");
const rutaTurnos = express.Router();
const TurnosController = require("./../controllers/API/turnos.controller.js");
const validarTurnos = require("./../middlewares/validarTurnos.middleware.js");
const Turno = require ('../models/mock/turnos.models.js');
const { obtenerListadoTurnos } = require("../controllers/API/turnos.controller.js");

rutaTurnos.get("/:idPaciente", TurnosController.getTurnosPorPaciente);
rutaTurnos.get("/", TurnosController.getTurnos);
rutaTurnos.delete("/:idTurno", TurnosController.cancelarTurno);
rutaTurnos.post("/",validarTurnos, TurnosController.crearTurno);
rutaTurnos.put("/:id",validarTurnos, TurnosController.actualizarTurno);

rutaTurnos.get('/verTurnos', async(req, res) => {
    try {
        const turnos = await obtenerListadoTurnos();
        res.render('turnos/index', { turnos });
    } catch (error) {
        res.status(500).send('Error al obtener turnos');
    }
});

module.exports = rutaTurnos;*/