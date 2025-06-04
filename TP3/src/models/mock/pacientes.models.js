const Persona = require("./../mock/entities/paciente.entity.js");
const Config = require("./../../config/config.js");
const jwt = require("jsonwebtoken");
//Borrar Despues
console.log("SECRETE_WORD:", Config.secreteWord);

class PacientesModel {
  constructor() {
    this.data = [];
    this.data.push(
      new Persona(
        "123456787",
        "Sergio",
        "Antozzi",
        "email@gmail.com",
        "12345",
        1
      )
    );
    this.id = 2;
  }

  findByEmail(email, password) {
    return new Promise((resolve, reject) => {
      try {
        const paciente = this.data.find(
          (p) => p.email === email && p.password === password
        );
        if (paciente === null) {
          throw new Error("el paciente no existe");
        }
        resolve(paciente);
      } catch (error) {
        reject(error);
      }
    });
  }

  validate(email, password) {
    return new Promise(async (resolve, reject) => {
      try {
        const userFound = await this.findByEmail(email, password);

        if (!userFound || userFound.password == null) {
          throw new Error("wrong email or password");
        }

        //payload, secreto, tiempo de expiracion
        const payload = {
          userId: userFound._id,
          userEmail: userFound.email,
        };
        console.log("palabra secreta, pacientes model:", Config.secreteWord);

        const token = jwt.sign(payload, Config.secreteWord, {
          expiresIn: Config.expiresIn,
        });
        resolve(token);
      } catch (error) {
        reject(error);
      }
    });
  }

  // crea un dato nuevo (alta de cliente)
  create(paciente) {
    //TODO: verificar que no sea nulo si es nulo tierar excepcion

    //return persona;
    return new Promise((resolve, reject) => {
      try {
        paciente.id = this.id;
        this.id++;
        const pacienteEncontrado = this.data.find(p => p.email === paciente.email)
        if (!pacienteEncontrado) {
          this.data.push(paciente);
        } else {
          throw new Error("el paciente ya existe")
        }


        resolve(paciente);
      } catch (error) {
        reject(error);
      }

    });
  }
  // actualiza los datos del cliente con id = id
  update(id, paciente) {
    return new Promise((resolve, reject) => {
      try {

        const pacienteEncontrado = this.data.find((p) => p.id == id);
        if (pacienteEncontrado === null) {
          throw new Error("No se encuntra el paciente");
        }
        pacienteEncontrado.dni = paciente.dni;
        pacienteEncontrado.email = paciente.email;
        pacienteEncontrado.nombre = paciente.nombre;
        pacienteEncontrado.apellido = paciente.apellido;
        resolve(pacienteEncontrado);
      } catch (error) {
        reject(error);
      }
    })

  }
  // elimina el cliente con id = id
delete(id) {
  return new Promise((resolve, reject) => {
    try {
      const identificador = Number(id);
      const index = this.data.findIndex(paciente => paciente.id === identificador);

      if (index === -1) {
        throw new Error('Paciente no encontrado');
      }

      this.data.splice(index, 1);
      resolve({ mensaje: 'Paciente eliminado correctamente' });
    } catch (error) {
      reject(error);
    }
  });
}

  // devuelve la lista completa en un arreglo de strings
  list() {
    return new Promise((resolve, reject) => {
      resolve(this.data);
    });
  }

  getPacienteById(id) {
    return new Promise((resolve, reject) => {
      try {
        const identificador = Number(id);
        const pacienteEncontrado = this.data.find(paciente => paciente.id === identificador);

        if (!pacienteEncontrado) {
          throw new Error("No se encontró el paciente con el id proporcionado");
        }

        resolve(pacienteEncontrado);
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = new PacientesModel();
