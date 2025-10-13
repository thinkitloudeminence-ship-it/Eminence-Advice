// server/routes/auth.js - FIXED ES MODULES
import express from 'express';
import { loginAdmin } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', loginAdmin);

export default router; // ✅ This is the default export