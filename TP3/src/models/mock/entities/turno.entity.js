const Identificador = require("./identificador.entity");

class Turno extends Identificador {
    constructor(idPaciente, fecha, hora, id = null) {
        super(id); // Llama al constructor de Identificador
        this.idPaciente = idPaciente;
        this.fecha = fecha; // formato: 'YYYY-MM-DD'
        this.hora = hora;   // formato: 'HH:mm'
        this.id = null;     // lo asignará el modelo cuando se cree el turno
    }
}

module.exports = Turno;