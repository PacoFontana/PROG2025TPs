const express = require("express");
const rutaTurnos = express.Router();
const TurnosController = require("./../controllers/API/turnos.controller.js");
const validarTurnos = require("./../middlewares/validarTurnos.middleware.js");

rutaTurnos.get("/:idPaciente", TurnosController.getTurnosPorPaciente);
rutaTurnos.get("/", TurnosController.getTurnos);
rutaTurnos.delete("/:idTurno", TurnosController.cancelarTurno);
rutaTurnos.post("/",validarTurnos, TurnosController.crearTurno);
rutaTurnos.put("/:id",validarTurnos, TurnosController.actualizarTurno);

module.exports = rutaTurnos;