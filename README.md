# 🐾 pet-event-service

Microservicio para gestionar eventos importantes en la vida de mascotas dentro del ecosistema PetConnect.

## ⚙️ Tecnologías

- Node.js + Express
- MongoDB
- Docker

## 📦 Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/api/v1/pet-events/` | Crear nuevo evento |
| GET | `/api/v1/pet-events/:pet_id` | Obtener eventos por mascota |
| PUT | `/api/v1/pet-events/:event_id` | Actualizar evento |
| DELETE | `/api/v1/pet-events/:event_id` | Eliminar evento |

## 🚀 Cómo correr

```bash
docker build -t pet-event-service .
docker run -p 3016:3016 --env-file .env pet-event-service
