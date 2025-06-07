const express = require("express");
const router = express.Router();
const { controller: TurnosController } = require("../../controllers/API/turnos.controller.js");
const validarTurnos = require("../../middlewares/validarTurnos.middleware.js");

router.get("/", TurnosController.getTurnos);
router.get("/:idPaciente", TurnosController.getTurnosPorPaciente);
router.post("/", validarTurnos, TurnosController.crearTurno);
router.put("/:id", validarTurnos, TurnosController.actualizarTurno);
router.delete("/:idTurno", TurnosController.cancelarTurno);

module.exports = router;
