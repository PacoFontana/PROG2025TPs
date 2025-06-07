const turnosModel = require("./../../models/mock/turnos.models.js");
const Turno = require("./../../models/mock/entities/turno.entity.js");
const pacientesModel = require("./../../models/mock/pacientes.models.js");

class TurnosController {
  // GET /api/v1/turnos
  async getTurnos(req, res) {
    try {
      const turnos = await turnosModel.list();
      if (turnos.length === 0) {
        return res.status(404).json({ mensaje: 'No hay turnos registrados' });
      }
      res.status(200).json(turnos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  // GET /api/v1/turnos/:idPaciente
  async getTurnosPorPaciente(req, res) {
    const { idPaciente } = req.params;
    try {
      const turnos = await turnosModel.findByPacienteById(idPaciente);
      if (turnos.length === 0) {
        return res.status(404).json({ mensaje: 'Este paciente no tiene turnos registrados' });
      }
      res.status(200).json(turnos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // POST /api/v1/turnos
  async crearTurno(req, res) {
    try {
      const { idPaciente, fecha, hora } = req.body;
      const nuevoTurno = new Turno(idPaciente, fecha, hora);
      const turnoCreado = await turnosModel.create(nuevoTurno);
      res.status(201).json({ mensaje: 'Turno creado correctamente', turno: turnoCreado });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // DELETE /api/v1/turnos/:idTurno
  async cancelarTurno(req, res) {
    const { idTurno } = req.params;
    try {
      const turnoEliminado = await turnosModel.deleteById(idTurno);
      res.status(200).json({ mensaje: 'Turno cancelado correctamente', turno: turnoEliminado });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  // PUT /api/v1/turnos/:id
  async actualizarTurno(req, res) {
    const { id } = req.params;
    const { fecha, hora, idPaciente } = req.body;
    try {
      const datosActualizados = { fecha, hora, idPaciente };
      const turnoActualizado = await turnosModel.update(id, datosActualizados);
      res.status(200).json({ mensaje: 'Turno actualizado correctamente', turno: turnoActualizado });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } 
}

async function obtenerListadoTurnos() {
    try {
      const turnos = await turnosModel.list();
      const pacientes = await pacientesModel.list();

      const resultado = turnos.map(turno => {
        const paciente = pacientes.find(p => p.id === Number(turno.idPaciente));

        const turnoConPaciente = {
          id: turno.id,
          fecha: turno.fecha,
          hora: turno.hora
        };

        if (paciente) {
          turnoConPaciente.paciente = {
            id: paciente.id,
            nombre: paciente.nombre
          };
        } else {
          turnoConPaciente.paciente = null;
        }

        return turnoConPaciente;
      });

      return resultado;
    } catch (error) {
      console.error('Error al obtener turnos:', error);
      throw error;
    }
}

module.exports = {
  controller: new TurnosController(),
  obtenerListadoTurnos,
};