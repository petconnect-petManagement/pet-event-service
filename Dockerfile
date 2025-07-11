# Etapa 1: Builder con dependencias mínimas
FROM node:20-alpine AS builder

WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala solo dependencias necesarias para producción
RUN npm install --only=production

# Copia el resto del código
COPY . .

# Etapa 2: Imagen final más liviana
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 3016

CMD ["node", "src/app.js"]
