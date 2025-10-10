const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String
}, { timestamps: true });

module.exports = mongoose.model('Contact', ContactSchema);
