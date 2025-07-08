# Proyecto Final

## 📌 Descripción del proyecto

Este proyecto es una aplicación web que incluye un frontend desarrollado con React y un backend construido con Express. Su objetivo principal es ofrecer una solución web completa que se conecta a una base de datos PostgreSQL mediante Sequelize para gestionar información de manera dinámica y eficiente. En este caso orientado a un sistema de inventario basico, cuyas funcionalidades deben ser: 

###  Sistema de Inventario Básico
Descripción:
  - Aplicación básica para pequeños negocios que necesiten controlar su inventario.

Funcionalidades Principales
  - Gestión de productos
  - Control de stock básico
  - Categorización de productos
  - Registro de movimientos de inventario
  - Búsqueda simple de productos

## 🚀 Tecnologías utilizadas

- Node.js, Express, Sequelize, PostgreSQL, dotenv, cors y JOI para el backend.
- React, vite y axios ára eñ frontend.

## ⚠ Aspectos faltantes para la entrega final

Para la entrega final tenemos en camino "dockerizar" el proyecto, ya que priorizamos trabajar localmente hasta tenerlo funcionando al 100%. Por otro lado debemos pulir siertos aspectos relacionados al backend mediante el testing y por supuesto lo que nos entregue el feedback.

## 📂 Estructura del proyecto

```
proyectoFinal/
  backend/
    .env
    .gitignore
    package.json
    node_modules/
    src/
      controllers/
      models/
      routes/
      views/
      index.js
  frontend/
    .env
    .gitignore
    package.json
    src/
      api/
      assets/
      components/
      css/
      App.jsx
      main.jsx
  README.md
```

## 🧧 Archivo ".env para probarlo"
```
  DB_USER=inventario_user
  DB_PASSWORD=inventario123
  DB_NAME=inventario_db
  DB_HOST=127.0.0.1
```

## ✨ Autor

Proyecto realizado por el grupo 32.
