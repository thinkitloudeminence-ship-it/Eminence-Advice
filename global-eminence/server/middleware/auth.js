// const jwt = require('jsonwebtoken');
// const Admin = require('../models/Admin');

// const protect = async (req, res, next) => {
//     let token;

//     if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//         try {
//             token = req.headers.authorization.split(' ')[1];
//             const decoded = jwt.verify(token, process.env.JWT_SECRET);
            
//             req.admin = await Admin.findById(decoded.id).select('-password');
            
//             if (!req.admin) {
//                 return res.status(401).json({ message: 'Admin not found' });
//             }
            
//             next();
//         } catch (error) {
//             console.error('Token verification error:', error);
//             return res.status(401).json({ message: 'Not authorized, token failed' });
//         }
//     }

//     if (!token) {
//         return res.status(401).json({ message: 'Not authorized, no token' });
//     }
// };

// module.exports = { protect };


// server/middleware/auth.js
import jwt from 'jsonwebtoken';

// Simple token verification middleware (no database check)
export const protect = async (req, res, next) => {
  try {
    let token;

    // Check for token in headers
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ 
        message: 'Not authorized, no token provided' 
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');
    
    // Add user info to request
    req.user = {
      email: decoded.email,
      role: decoded.role
    };

    next();
  } catch (error) {
    console.error('Token verification error:', error);
    return res.status(401).json({ 
      message: 'Not authorized, token failed' 
    });
  }
};