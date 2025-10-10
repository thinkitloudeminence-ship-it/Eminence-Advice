const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin'); // simple admin model

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return res.json({ token, name: 'Admin' });
  }
  return res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = router;
