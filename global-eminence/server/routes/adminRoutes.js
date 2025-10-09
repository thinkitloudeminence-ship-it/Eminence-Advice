const express = require('express');
const router = express.Router();
const { loginAdmin, getAdminProfile } = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');

// Admin login (public)
router.post('/login', loginAdmin);

// Get admin profile (protected)
router.get('/profile', protect, getAdminProfile);

module.exports = router;
