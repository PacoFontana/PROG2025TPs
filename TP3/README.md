# API REST - Gestión de Pacientes y Turnos 

Este proyecto es una API REST en Node.js y Express para gestionar pacientes y turnos de una clinica.  
Realizado para el TP3.

---

## Tecnologías utilizadas

- Node.js
- Express
- JWT
- Joi
- Dotenv

---

## 🗂️ Estructura de carpetas

-src/ <br>
├── controllers/ <br>
├── models/ <br>
│ └── mock/ <br>
├── routes/ <br>
├── middlewares/ <br>
├── validators/ <br>
└── index.js <br>


---

## Funcionalidades principales

### Pacientes

| Método | Ruta                      | Descripción                 |<br>

| POST   | `/api/v1/pacientes`       | Crear paciente              |<br>
| GET    | `/api/v1/pacientes`       | Muestra todos los pacientes |<br>
| GET    | `/api/v1/pacientes/:id`   | Obtener paciente por ID     |<br>
| PUT    | `/api/v1/pacientes/:id`   | Actualizar paciente         |<br>
| DELETE | `/api/v1/pacientes/:id`   | Eliminar paciente           |<br>
| POST   | `/api/v1/pacientes/login` | Login, retorna el token     |<br>

---

### Turnos

| Método | Ruta                          | Descripción                    |<br>

| POST   | `/api/v1/turnos`              | Crear turno                    |<br>
| GET    | `/api/v1/turnos/:idPaciente`  | Obtener turnos de un paciente  |<br>
| PUT    | `/api/v1/turnos/:id`          | Actualizar un turno            |<br>
| DELETE | `/api/v1/turnos/:idTurno`     | Eliminar un turno              |<br>

---

## Autenticación

- Para crear, modificar o eliminar turnos, se requiere un **token JWT**.
- Se obtiene haciendo `POST /api/v1/pacientes/login` con email y contraseña.

---

##  Validaciones con Joi

- **Pacientes**: nombre, apellido, email, DNI y contraseña.
- **Turnos**: fecha (ISO), hora (HH:mm), idPaciente.

---

##  Cómo probar

Usá Postman para probar los endpoints.  
Primero generar el token en el header para los endpoints protegidos:

---

##  Middleware

- `verifyTokenMiddleware`: protege rutas privadas
- `validarPaciente`, `validarTurno`: validan datos con Joi

---

## Instalación y uso

```bash
npm install
npm run start

