require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const eventRoutes = require('./routes/eventsRoutes');

const app = express();
const PORT = process.env.PORT || 3016;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/v1/pet-events', eventRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada en pet-event-service' });
});

app.listen(PORT, () => {
  console.log(`🐾 pet-event-service corriendo en el puerto ${PORT}`);
});
