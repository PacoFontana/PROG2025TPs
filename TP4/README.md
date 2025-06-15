# TP4 – Programación III

Este proyecto consiste en una aplicación web construida con **React** en el frontend y **Express (Node.js)** en el backend. La app muestra un listado de personas obtenidas desde una API.

---

## 🚀 ¿Cómo inicializar el proyecto?

### 1. Clonar el repositorio

```bash
git clone https://github.com/PacoFontana/PROG2025TPs.git
cd PROG2025TPs
cd TP4
```

### 2. Iniciar el backend

```bash
cd Backend
npm install
npm start
```

> Asegurarse de que el servidor escuche en `http://localhost:3000`.

### 3. Iniciar el frontend

En otra terminal:

```bash
cd frontend
npm install
npm run dev
```

> Luego acceder a: [http://localhost:5173](http://localhost:5173)

---

## Tecnologías utilizadas

### 🔹 Backend

- **Node.js**
- **Express.js**
- **CORS**
- Estructura **MVC**

### 🔹 Frontend

- **React**
- **Vite**
- **Fetch API** para realizar solicitudes HTTP

---

## Estructura del proyecto

```
TP4/
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── app.js
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── TraerPersonas.jsx
    │   │   ├── ListaTarjetas.jsx
    │   │   └── TarjetaPersona.jsx
    │   └── App.jsx
```

---

## Datos adicionales:

- **Cátedra:** Programación III
- **Año:** 2025
