const pacientesModel = require("./../../models/mock/pacientes.models.js");
const Paciente = require("./../../models/mock/entities/paciente.entity.js");
const turnosModel = require('./../../models/mock/turnos.models.js');


class PacientesController {
  async login(req, res) {
    //recolecto credenciales
    try {
      const { email, password } = req.body;

      const token = await pacientesModel.validate(email, password);
      res.status(200).json({ token });

    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  async list(req, res) {
    try {
      const pacientes = await pacientesModel.list();

      if (pacientes.length === 0) {
        return res.status(404).json({ message: "No hay pacientes registrados" });
      }
      res.status(200).json(pacientes);
    }
    catch (error) {
      res.status(500).json({ message: "Error al obtener la lista de pacientes" });
    }
  }

  async getById(req, res) {
    const id = req.params.id;

    try {
      const paciente = await pacientesModel.getPacienteById(id);
      res.status(200).json(paciente);
    }
    catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const { dni, nombre, apellido, email, password } = req.body;
      const nuevoPaciente = new Paciente(dni, nombre, apellido, email, password);

      const info = await pacientesModel.create(nuevoPaciente);
      res.status(201).json(info);
    }
    catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    const id = req.params.id

    try {
      const resultado = await pacientesModel.delete(id)
      res.status(200).json(resultado)
    }
    catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const { dni, nombre, apellido, email } = req.body;
      
      const pacienteExistente = await pacientesModel.getPacienteById(id);
      if (!pacienteExistente) {
        return res.status(404).json({ message: "Paciente no encontrado" });
      }

      const nuevoPaciente = new Paciente(dni, nombre, apellido, email);
      await pacientesModel.update(id, nuevoPaciente);
      res.status(200).json({ message: "Paciente actualizado correctamente" });
    }
    catch (error) {
      res.status(400).json({ error: error.message });
    }

  }
}

async function obtenerListadoPacientes() {
  try {
    const pacientes = await pacientesModel.list();
    const turnos = await turnosModel.list();

    return pacientes.map(paciente => {
      const turnosDelPaciente = turnos
        .filter(turno => String(turno.idPaciente) === String(paciente.id))
        .map(turno => ({
          id: turno.id,
          fecha: turno.fecha,
          hora: turno.hora
        }));

      return {
        id: paciente.id,
        dni: paciente.dni,
        nombre: paciente.nombre,
        apellido: paciente.apellido,
        email: paciente.email,
        turnos: turnosDelPaciente
      };
    });
  } catch (error) {
    console.error('[obtenerListadoPacientes] Error:', error);
    throw error;
  }
}

module.exports = {
  controller: new PacientesController(),
  obtenerListadoPacientes,
};