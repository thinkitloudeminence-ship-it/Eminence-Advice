// const express = require('express');
// const router = express.Router();
// const Admin = require('../models/Admin');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

// // Admin login
// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;
    
//     try {
//         // Input validation
//         if (!email || !password) {
//             return res.status(400).json({ message: 'Email and password are required' });
//         }

//         const admin = await Admin.findOne({ email });
//         if (!admin) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }

//         // Check password
//         const isMatch = await bcrypt.compare(password, admin.password);
//         if (!isMatch) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }

//         // Generate token
//         const token = jwt.sign(
//             { id: admin._id, email: admin.email }, 
//             process.env.JWT_SECRET, 
//             { expiresIn: '7d' }
//         );

//         res.json({ 
//             token,
//             admin: { id: admin._id, email: admin.email }
//         });
        
//     } catch (err) {
//         console.error('Login error:', err);
//         res.status(500).json({ message: 'Server error during login' });
//     }
// });

// // Verify token endpoint
// router.get('/verify', async (req, res) => {
//     const token = req.header('Authorization')?.replace('Bearer ', '');
    
//     if (!token) {
//         return res.status(401).json({ message: 'No token provided' });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const admin = await Admin.findById(decoded.id).select('-password');
        
//         if (!admin) {
//             return res.status(401).json({ message: 'Admin not found' });
//         }

//         res.json({ valid: true, admin });
//     } catch (err) {
//         res.status(401).json({ message: 'Invalid token' });
//     }
// });

// export default router;

// server/routes/admin.js - ES MODULES VERSION
import express from 'express';
import Admin from '../models/Admin.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const router = express.Router();

// Admin login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    try {
        // Input validation
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate token
        const token = jwt.sign(
            { id: admin._id, email: admin.email }, 
            process.env.JWT_SECRET, 
            { expiresIn: '7d' }
        );

        res.json({ 
            token,
            admin: { id: admin._id, email: admin.email }
        });
        
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: 'Server error during login' });
    }
});

// Verify token endpoint
router.get('/verify', async (req, res) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const admin = await Admin.findById(decoded.id).select('-password');
        
        if (!admin) {
            return res.status(401).json({ message: 'Admin not found' });
        }

        res.json({ valid: true, admin });
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
});

export default router;