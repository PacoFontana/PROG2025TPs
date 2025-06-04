const express = require("express");
const rutaTurnos = express.Router();
const TurnosController = require("./../controllers/API/turnos.controller.js");

rutaTurnos.get("/:idPaciente", TurnosController.getTurnosPorPaciente);
rutaTurnos.delete("/:idTurno", TurnosController.cancelarTurno);
rutaTurnos.post("/", TurnosController.crearTurno);
rutaTurnos.put("/:id", TurnosController.actualizarTurno);

module.exports = rutaTurnos;