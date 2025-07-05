const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  pet_id: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
