require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const eventRoutes = require('./routes/events');

const app = express();
const PORT = process.env.PORT || 3016;

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a base de datos
connectDB();

// Rutas
app.use('/api/v1/pet-events', eventRoutes);

// Fallback
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada en pet-event-service' });
});

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`🐾 pet-event-service corriendo en el puerto ${PORT}`);
});
