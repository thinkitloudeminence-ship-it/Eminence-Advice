// import express from 'express';
// import Contact from '../models/Contact.js';
// import { protect } from '../middleware/auth.js';

// const router = express.Router();

// // Submit contact form
// router.post('/', async (req, res) => {
//   const contact = new Contact(req.body);
//   await contact.save();
//   res.json(contact);
// });

// // Get all contact submissions (admin)
// router.get('/', protect, async (req, res) => {
//   const contacts = await Contact.find().sort({ createdAt: -1 });
//   res.json(contacts);
// });

// export default router;


// server/routes/contacts.js
import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// Submit contact form - should be POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        message: 'Name, email, and message are required'
      });
    }

    const contact = new Contact({
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : '',
      message: message.trim()
    });

    await contact.save();

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      contact
    });

  } catch (err) {
    console.error('Contact save error:', err);
    res.status(500).json({
      message: 'Server error while saving contact'
    });
  }
});

// Get all contact submissions (admin)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;