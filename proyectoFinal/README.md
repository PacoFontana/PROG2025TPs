# 🚀 Sistema Web Full-Stack con Docker

## 📋 Componentes Principales

### 🎯 Arquitectura General
```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Nginx     │    │   React     │    │   Express   │
│  (Proxy)    │◄──►│ (Frontend)  │◄──►│  (Backend)  │
│   :80       │    │   :3000     │    │   :3001     │
└─────────────┘    └─────────────┘    └─────────────┘
                                              │
                   ┌─────────────┐    ┌─────────────┐
                   │    Redis    │    │ PostgreSQL  │
                   │  (Cache)    │    │    (DB)     │
                   │   :6379     │    │   :5432     │
                   └─────────────┘    └─────────────┘
```

### 🚀 Servicios del Sistema - Tecnologias utilizadas

- Node.js, Express, Sequelize, PostgreSQL, dotenv, cors y JOI para el backend.
- React, vite y axios ára eñ frontend.


| Servicio | Tecnología | Puerto | Función |
|----------|------------|--------|---------|
| **Frontend** | React 20 | 3000 | Interfaz de usuario |
| **Backend** | Express + Sequelize | 3001 | API REST |
| **Database** | PostgreSQL 15 | 5432 | Base de datos principal |
| **Cache** | Redis 7 | 6379 | Cache y sesiones |
| **Proxy** | Nginx | 80 | Reverse proxy |
| **pgAdmin** | pgAdmin 4 | 5050 | Administración de BD |

---

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

---  

### Archivo ".env"

Contenido del archivo `.env` para desarrollo (opcional, por si surge algún problema):
```env
# ===========================================
# BASE DE DATOS POSTGRESQL
# ===========================================
POSTGRES_DB=app_database
POSTGRES_USER=app_user
POSTGRES_PASSWORD=app_password

# ===========================================
# BACKEND (EXPRESS)
# ===========================================
NODE_ENV=development
PORT=3001

# Configuración de base de datos para Sequelize
DB_HOST=database
DB_PORT=5432
DB_NAME=app_database
DB_USER=inventario_user
DB_PASSWORD=inventario123

# JWT para autenticación
JWT_SECRET=mi_jwt_secret_super_seguro_para_desarrollo_2024

# CORS - Permitir requests desde el frontend
CORS_ORIGIN=http://localhost:3000

# ===========================================
# FRONTEND (REACT)
# ===========================================
REACT_APP_API_URL=http://localhost:3001/api
REACT_APP_ENV=development

# Hot reload optimizado para Docker
CHOKIDAR_USEPOLLING=true
WATCHPACK_POLLING=true
FAST_REFRESH=true

# WebSocket para hot reload
WDS_SOCKET_HOST=localhost
WDS_SOCKET_PORT=3000
WDS_SOCKET_PATH=/ws

# ESLint en desarrollo
ESLINT_NO_DEV_ERRORS=true
GENERATE_SOURCEMAP=true

# ===========================================
# REDIS
# ===========================================
REDIS_HOST=redis
REDIS_PORT=6379
REDIS_URL=redis://redis:6379

# ===========================================
# PGADMIN 4
# ===========================================
PGADMIN_DEFAULT_EMAIL=admin@example.com
PGADMIN_DEFAULT_PASSWORD=admin123
PGADMIN_CONFIG_SERVER_MODE=False
PGADMIN_CONFIG_MASTER_PASSWORD_REQUIRED=False

# ===========================================
# CONFIGURACIÓN DE DESARROLLO
# ===========================================
DEBUG=true
LOG_LEVEL=debug
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=10MB

# Email para desarrollo (Mailtrap)
EMAIL_HOST=smtp.mailtrap.io
EMAIL_PORT=2525
EMAIL_USER=tu_usuario_mailtrap
EMAIL_PASS=tu_password_mailtrap
EMAIL_FROM=noreply@tuapp.com

# ===========================================
# SEGURIDAD (DESARROLLO)
# ===========================================
RATE_LIMIT_REQUESTS=100
RATE_LIMIT_WINDOW_MS=900000
SESSION_SECRET=mi_session_secret_para_desarrollo
COOKIE_SECURE=false
COOKIE_HTTP_ONLY=true
COOKIE_SAME_SITE=lax
```

### URLs de Acceso
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:3001/api
- **Nginx Proxy:** http://localhost
- **pgAdmin 4:** http://localhost:5050
- **Base de datos:** localhost:5432

---

## 📚 Estructura de Archivos Importantes

```
proyecto-final/
├── docker-compose.yml          
├── .env                       
├── .gitignore  
├── docker.sh
├── README.md                  
│
├── frontend/
│   ├── Dockerfile.dev          
│   ├── package.json            
│   └── src/                    
│
├── backend/
│   ├── Dockerfile.dev          
│   ├── package.json           
│   ├── server.js               
│   ├── models/                 
│   └── routes/                 
│
├── database/
│   └── init.sql  
│
├── pgadmin/
│   └── Dockerfile
│   └── pgpass              
│
└── nginx/
    └── nginx.conf              
```


## ✨ Autor

Proyecto realizado por el grupo 32.
