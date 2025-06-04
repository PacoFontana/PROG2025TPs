const express = require("express");
const router = express.Router();
const TurnosController = require("./../../controllers/turnos.controller.js");

//Obtener: GET /api/v1/turnos/:idPaciente
router.get("/:idPaciente", TurnosController.findByPaciente);

//Eliminar(cancelar un turno): DELETE /api/v1/turnos/:idTurno
router.delete("/:idTurno", TurnosController.delete);

//Crear: POST /api/v1/turnos
router.post("/", TurnosController.create);

module.exports = router;