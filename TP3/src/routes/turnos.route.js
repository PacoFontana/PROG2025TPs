const express = require("express");
const router = express.Router();
const TurnosController = require("./../../controllers/turnos.controller.js");

router.get("/turnos/:idPaciente", TurnosController.getTurnosPorPaciente);
router.delete("/turnos/:idTurno", TurnosController.cancelarTurno);
router.post("/turnos", TurnosController.crearTurno);
router.put("/turnos/:id", TurnosController.actualizarTurno);

module.exports = rutaTurnos;