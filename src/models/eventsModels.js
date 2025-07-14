const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // ID único del evento
  type: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
