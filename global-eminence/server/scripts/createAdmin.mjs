// server/createAdmin.js
require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('./models/Admin');
const connectDB = require('./config/db');

connectDB();

const createAdmin = async () => {
    const adminExists = await Admin.findOne({ email: 'admin@eminence.com' });
    if (adminExists) return console.log('Admin already exists');

    const admin = await Admin.create({
        name: 'Super Admin',
        email: 'admin@eminence.com',
        password: 'Eminence123',
    });
    console.log('Admin created:', admin);
    process.exit();
};

createAdmin();
