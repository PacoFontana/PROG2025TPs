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

```
src/
├── views/
│   ├── pacientes/
│   ├── turnos/
│   ├── partials/
│   └── index.ejs
├── public/
│   ├── stylesheets/
│   └── images/
```


---


#  Documentación del Frontend Web

##  Funcionalidades del sistema web

El sistema web simula el funcionamiento interno de una clínica, permitiendo al personal administrativo interactuar con turnos y pacientes de forma sencilla mediante una interfaz web. Las funcionalidades principales son:

###  Alta de pacientes
- Desde la sección de pacientes, el personal puede registrar un nuevo paciente mediante un formulario.
- Los datos son enviados a través de un formulario HTML (renderizado con EJS) y procesados por el backend mock.

###  Alta de turnos
- Se puede registrar un nuevo turno seleccionando un paciente existente, una fecha y una hora.
- La vista correspondiente se encuentra en `views/turnos/nuevoTurno.ejs`.

###  Baja de pacientes
- Se puede eliminar un paciente directamente desde la vista de listado de pacientes.
- La acción envía una petición HTTP `DELETE` al servidor y elimina al paciente del mock.

###  Baja de turnos
- Se puede cancelar un turno existente mediante un botón de eliminar desde el listado de turnos.
- Esto elimina el turno de la lista mock del backend.

##  Organización de vistas

- `views/pacientes/`: Contiene las vistas para visualizar, crear y eliminar pacientes.
- `views/turnos/`: Contiene las vistas para visualizar y crear turnos.
- `views/partials/`: Contiene fragmentos reutilizables como cabeceras o menús de navegación.
- `views/index.ejs`: Página principal o de bienvenida al sistema.

## 🛠️ Tecnologías utilizadas
- **EJS** como motor de vistas para renderizar HTML dinámico.
- **Express Router** para manejar rutas específicas del frontend (`src/routes/web`).
- **Mock de datos** en memoria para pacientes y turnos (`src/models/mock/`).


## Funcionalidades principales

### Pacientes

| Método | Ruta                      | Descripción                 |<br>

| POST   | `/api/pacientes`       | Crear paciente              |<br>
| GET    | `/api/pacientes`       | Muestra todos los pacientes |<br>
| GET    | `/api/pacientes/:id`   | Obtener paciente por ID     |<br>
| PUT    | `/api/pacientes/:id`   | Actualizar paciente         |<br>
| DELETE | `/api/pacientes/:id`   | Eliminar paciente           |<br>
| POST   | `/api/pacientes/login` | Login, retorna el token     |<br>

---

### Turnos

| Método | Ruta                          | Descripción                    |<br>

| POST   | `/api/turnos`              | Crear turno                    |<br>
| GET    | `/api/turnos/:idPaciente`  | Obtener turnos de un paciente  |<br>
| PUT    | `/api/turnos/:id`          | Actualizar un turno            |<br>
| DELETE | `/api/turnos/:idTurno`     | Eliminar un turno              |<br>

---

## Autenticación

- Para crear, modificar o eliminar turnos, se requiere un **token JWT**.
- Se obtiene haciendo `POST /api/pacientes/login` con email y contraseña.

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

*CONFIGURAR EL .ENV CON LOS DATOS DEL .ENV.TEMPLATE*
```bash
npm install
npm run start

