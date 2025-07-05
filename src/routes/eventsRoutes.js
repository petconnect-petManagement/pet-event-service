const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

// Crear evento
router.post('/', async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: 'No se pudo crear el evento', details: err.message });
  }
});

// Obtener eventos por pet_id
router.get('/:pet_id', async (req, res) => {
  try {
    const events = await Event.find({ pet_id: req.params.pet_id });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener eventos' });
  }
});

// Actualizar evento
router.put('/:event_id', async (req, res) => {
  try {
    const updated = await Event.findByIdAndUpdate(req.params.event_id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Evento no encontrado' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'No se pudo actualizar el evento' });
  }
});

// Eliminar evento
router.delete('/:event_id', async (req, res) => {
  try {
    const deleted = await Event.findByIdAndDelete(req.params.event_id);
    if (!deleted) return res.status(404).json({ error: 'Evento no encontrado' });
    res.json({ message: 'Evento eliminado' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar evento' });
  }
});

module.exports = router;
