class Turno {
    constructor(idPaciente, fecha, hora) {
        this.idPaciente = idPaciente;
        this.fecha = fecha; // formato: 'YYYY-MM-DD'
        this.hora = hora;   // formato: 'HH:mm'
        this.id = null;     // lo asignará el modelo cuando se cree el turno
    }
}

module.exports = Turno;
