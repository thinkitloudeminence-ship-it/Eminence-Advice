const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Make sure this is imported
const { protect } = require('../middleware/authMiddleware');
const { createContact, getAllContacts } = require('../controllers/contactController');

// ✅ Public route: create a new contact
router.post('/', createContact);

// ✅ Protected route: get all contact submissions (admin only)
router.get('/', protect, getAllContacts);

module.exports = router;
