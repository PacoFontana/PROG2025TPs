# frontend/Dockerfile
FROM node:20-alpine

WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar código fuente
COPY . .

# Exponer puerto
EXPOSE 3000

# Comando por defecto
CMD ["npm", "run", "dev"]