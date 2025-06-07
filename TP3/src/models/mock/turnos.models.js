const Turno = require("./entities/turno.entity.js");
const pacientesModel = require("./pacientes.models.js");

class TurnosModel {
    constructor() {
        this.data = [];
        this.id = 1;
    }

    existeTurno(idPaciente, fecha, hora) {
        return this.data.some(turno =>
            turno.idPaciente === idPaciente &&
            turno.fecha === fecha &&
            turno.hora === hora
        );
    }

    list() {
        return new Promise((resolve, reject) => {
            try {
                resolve(this.data);
            } catch (error) {
                reject(error);
            }
        });
    }

    // Crear un nuevo turno
    create(turno) {
        return new Promise((resolve, reject) => {
            try {
                if (this.existeTurno(turno.idPaciente, turno.fecha, turno.hora)) {
                    throw new Error("Ya existe un turno para este paciente en esta fecha y hora");
                }
                if (!pacientesModel.existePacienteID(turno.idPaciente)){
                    throw new Error("El paciente no existe");
                }    
                turno.id = this.id++;
                this.data.push(turno);
                resolve(turno);
            } catch (error) {
                reject(error);
            }
        });
    }


    //Buscar todos los turnos de un paciente
    findByPacienteById(idPaciente) {
        return new Promise((resolve, reject) => {
            try {
                const id = Number(idPaciente);
                const turnos = this.data.filter(t => t.idPaciente == id);
                resolve(turnos);
            } catch (error) {
                reject(error);
            }
        });
    }


    findByTurnoId(id) {
        return new Promise((resolve, reject) => {
            const turno = this.data.find(t => t.id === Number(id));
            turno ? resolve(turno) : reject(new Error('Turno no encontrado'));
        });
    }

    update(id, datos) {
        return new Promise((resolve, reject) => {
            try {
                if (!datos.fecha || !datos.hora || !datos.idPaciente) {
                    throw new Error("Faltan datos del turno");
                }
                if (this.existeTurno(datos.idPaciente, datos.fecha, datos.hora)) {
                    throw new Error("Ya existe un turno para este paciente en esta fecha y hora");
                }

                const turno = this.data.find(t => t.id === Number(id));
                if (!turno) return reject(new Error('Turno no encontrado'));
                Object.assign(turno, datos);
                resolve(turno);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    //Eliminar turno por ID
    deleteById(idTurno) {
        return new Promise((resolve, reject) => {
            try {
                const id = Number(idTurno);
                const index = this.data.findIndex(t => t.id === id);
                if (index === -1) {
                    throw new Error("Turno no encontrado");
                }
                const eliminado = this.data.splice(index, 1)[0];
                resolve(eliminado);
            } catch (error) {
                reject(error);
            }
        });
    }
}

module.exports = new TurnosModel();