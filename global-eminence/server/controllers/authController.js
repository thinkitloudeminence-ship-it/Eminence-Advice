// const Admin = require('../models/Admin');
// const jwt = require('jsonwebtoken');

// exports.loginAdmin = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const admin = await Admin.findOne({ email });
//     if(!admin || !(await admin.matchPassword(password))) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
//     res.json({ token });
//   } catch(err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };



// server/controllers/authController.js
import jwt from 'jsonwebtoken';

// Simple admin credentials
const ADMIN_CREDENTIALS = {
  email: process.env.ADMIN_EMAIL || 'admin@eminence.com',
  password: process.env.ADMIN_PASSWORD || 'admin123'
};

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ 
        message: 'Email and password are required' 
      });
    }

    // Check credentials
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      const token = jwt.sign(
        { email: ADMIN_CREDENTIALS.email, role: 'admin' },
        process.env.JWT_SECRET || 'fallback_secret',
        { expiresIn: '24h' }
      );

      return res.json({
        success: true,
        message: 'Login successful',
        token,
        user: {
          email: ADMIN_CREDENTIALS.email,
          role: 'admin'
        }
      });
    } else {
      return res.status(401).json({
        message: 'Invalid email or password'
      });
    }
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ 
      message: 'Server error during login' 
    });
  }
};