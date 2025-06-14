const personas = [
  { id: 1, nombre: 'Ana', apellido: 'Gómez', edad: 28, email: 'ana@mail.com' },
  { id: 2, nombre: 'Luis', apellido: 'Pérez', edad: 35, email: 'luis@mail.com' },
  { id: 3, nombre: 'Carla', apellido: 'Fernández', edad: 22, email: 'carla@mail.com' },
  { id: 4, nombre: 'Tomás', apellido: 'Martínez', edad: 40, email: 'tomas@mail.com' },
  { id: 5, nombre: 'Sofía', apellido: 'Ramírez', edad: 30, email: 'sofia@mail.com' },
];

function obtenerPersonas() {
  return personas;
}

module.exports = { obtenerPersonas };