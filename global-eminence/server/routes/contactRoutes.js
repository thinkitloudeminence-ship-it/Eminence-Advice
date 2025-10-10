const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Add contact
router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;
  const contact = await Contact.create({ name, email, phone, message });
  res.json(contact);
});

// Get all contacts
router.get('/', async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.json({ data: contacts });
});

module.exports = router;

