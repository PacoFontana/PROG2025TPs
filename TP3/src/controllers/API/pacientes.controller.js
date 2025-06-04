const pacientesModel = require("./../../models/mock/pacientes.models.js");
const Paciente = require("./../../models/mock/entities/paciente.entity.js");

class PacientesController {
  async login(req, res) {
    //recolecto credenciales
    try {
      const { email, password } = req.body;

      const token = await pacientesModel.validate(email, password);
      res.status(200).json(token);

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
    const { dni, nombre, apellido, email } = req.body;

    const nuevoPaciente = new Paciente(dni, nombre, apellido, email);

    const info = await pacientesModel.create(nuevoPaciente);
    res.status(200).json(info);
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

  update(req, res) {
    const id = req.params.id;
    const { dni, nombre, apellido, email } = req.body;
    const nuevoPaciente = new Paciente(dni, nombre, apellido, email);
    pacientesModel.update(id, nuevoPaciente);
    res.status(200).json({ message: "actualizado" });
  }
}

module.exports = new PacientesController();
