require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('./models/Admin');

// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ MongoDB Connected Successfully');
    } catch (err) {
        console.error('❌ Database connection error:', err.message);
        process.exit(1);
    }
};

const createAdmin = async () => {
    console.log('🚀 Starting admin creation...');
    
    await connectDB();

    const adminData = {
        email: 'admin@eminence.com',
        password: 'Eminence123'
    };

    try {
        // Check if admin already exists
        const adminExists = await Admin.findOne({ email: adminData.email });
        if (adminExists) {
            console.log('ℹ️  Admin already exists:', adminData.email);
            console.log('📧 Email:', adminExists.email);
            console.log('🆔 ID:', adminExists._id);
            process.exit(0);
        }

        // Create new admin
        console.log('⏳ Creating new admin user...');
        const admin = new Admin(adminData);
        await admin.save();
        
        console.log('✅ Admin created successfully!');
        console.log('================================');
        console.log('📧 Email:', adminData.email);
        console.log('🔑 Password:', adminData.password);
        console.log('🆔 ID:', admin._id);
        console.log('================================');
        console.log('💡 You can now login to admin dashboard');
        
    } catch (err) {
        console.error('❌ Error creating admin:', err.message);
        console.log('🔧 Please check:');
        console.log('   1. MongoDB connection');
        console.log('   2. Admin model definition');
        console.log('   3. Environment variables');
    } finally {
        mongoose.connection.close();
        console.log('🔒 Database connection closed');
        process.exit(0);
    }
};

// Run the script
createAdmin();