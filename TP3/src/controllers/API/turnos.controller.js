const TurnosModel = require("./../../models/mock/turnos.models.js");
const Turno = require("./../../models/mock/entities/turno.entity.js");

class TurnosController {
    //Obtener: GET /api/v1/turnos/:idPaciente
    async findByPaciente(req, res){
        try {
            const idPaciente = req.params.idPaciente;
            const turnos = await TurnosModel.findByPaciente(idPaciente);
            res.status(200).json(turnos);
        } catch (error){
            res.status(404).json({ message: error.message });
        }
    }

    //Eliminar: DELETE /api/v1/turnos/:idTurno
    async delete(req, res) {
        try {
            const idTurno = req.params.idTurno;
            const turnoEliminado = await TurnosModel.deleteById(idTurno);
            res.status(200).json({ message: "Turno cancelado", turno: turnoEliminado});
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    //Crear un turno: POST /api/v1/turnos
    async create(req, res) {
        try {
            const { idPaciente, fecha, hora } = req.body;

            const nuevoTurno = new Turno(idPaciente, fecha, hora);
            const creado = await TurnosModel.create(nuevoTurno);

            res.status(201).json(creado);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new TurnosController();