const Turno = require("./entities/turno.entity.js");

class TurnosModel {
    constructor() {
        this.data = [];
        this.id = 1;
    }


    // Crear un nuevo turno
    create(turno){
        return new Promise((resolve, reject) => {
            try {
                if (!turno.fecha || !turno.hora || !turno.idPaciente){
                    throw new Error("Faltan datos del turno");
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
    findPacienteById(idPaciente){
        return new Promise((resolve, reject) => {
            try {
                const id = Number(idPaciente);
                const turnos = this.data.filter(t => t.idPaciente === id);
                resolve(turnos);
            } catch (error) {
                reject(error);
            }
        });
    }
    
    //Eliminar turno por ID
    deleteById(idTurno){
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