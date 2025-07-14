const express = require('express');
const Event = require('../models/eventsModels');
const verifyToken = require('../middleware/auth');
const router = express.Router();

// Crear evento
router.post('/', verifyToken, async (req, res) => {
  try {
    const exists = await Event.findById(req.body._id);
    if (exists) return res.status(400).json({ error: 'Evento ya existe con ese _id' });

    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: 'No se pudo crear el evento', details: err.message });
  }
});

// Obtener evento por _id
router.get('/:_id', async (req, res) => {
  try {
    const event = await Event.findById(req.params._id);
    if (!event) return res.status(404).json({ error: 'Evento no encontrado' });
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener evento' });
  }
});

// Actualizar evento por _id
router.put('/:_id', verifyToken, async (req, res) => {
  try {
    const updated = await Event.findByIdAndUpdate(req.params._id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Evento no encontrado' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'No se pudo actualizar el evento' });
  }
});

// Eliminar evento por _id
router.delete('/:_id', verifyToken, async (req, res) => {
  try {
    const deleted = await Event.findByIdAndDelete(req.params._id);
    if (!deleted) return res.status(404).json({ error: 'Evento no encontrado' });
    res.json({ message: 'Evento eliminado' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar evento' });
  }
});

module.exports = router;
