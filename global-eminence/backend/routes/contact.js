const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST route to handle form submissions
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    const newContact = new Contact({
      name,
      email,
      message
    });
    
    await newContact.save();
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// GET route to fetch all messages (optional, for admin purposes)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;