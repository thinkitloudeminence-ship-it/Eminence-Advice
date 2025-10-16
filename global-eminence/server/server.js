// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import adminRoutes from '../server/routes/admin.js';
// import blogRoutes from '../server/routes/blog.js';
// import contactRoutes from '../server/routes/contacts.js';
// import path from 'path';

// dotenv.config();
// const app = express();
// app.use(cors({
//   origin: ['http://localhost:3000', 'https://eminence-advice.onrender.com'],
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true,
// }));
// app.use(express.json());
// app.use('/uploads', express.static(path.join(path.resolve(), 'uploads')));

// // Routes
// app.use('/api/admin', adminRoutes);
// app.use('/api/blogs', blogRoutes);
// app.use('/api/contact', contactRoutes); // ✅ This is correct

// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// // server/index.js
// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import adminRoutes from './routes/admin.js';
// import blogRoutes from './routes/blog.js';
// import contactRoutes from './routes/contacts.js';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// dotenv.config();
// const app = express();

// app.use(cors({
//   origin: ['http://localhost:3000', 'https://eminence-advice.onrender.com'],
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true,
// }));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Serve uploaded files
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Routes
// app.use('/api/admin', adminRoutes);
// app.use('/api/blogs', blogRoutes);
// app.use('/api/contact', contactRoutes);

// // Health check endpoint
// app.get('/api/health', (req, res) => {
//   res.json({ status: 'OK', message: 'Server is running' });
// });

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('✅ MongoDB connected successfully'))
//   .catch(err => {
//     console.error('❌ MongoDB connection error:', err);
//     process.exit(1);
//   });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
//   console.log(`📝 Blog API: http://localhost:${PORT}/api/blogs`);
//   console.log(`👤 Admin API: http://localhost:${PORT}/api/admin`);
// });


// // server/index.js - UPDATED CORS
// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import adminRoutes from './routes/admin.js';
// import blogRoutes from './routes/blog.js';
// import contactRoutes from './routes/contacts.js';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// dotenv.config();
// const app = express();

// // ✅ IMPROVED CORS CONFIGURATION
// const allowedOrigins = [
//   'http://localhost:3000',
//   'https://www.eminenceadvice.com',
//   'https://eminenceadvice.com',
//   'https://eminence-advice.vercel.app'
// ];

// app.use(cors({
//   origin: function (origin, callback) {
//     // Allow requests with no origin (like mobile apps or curl requests)
//     if (!origin) return callback(null, true);

//     if (allowedOrigins.indexOf(origin) === -1) {
//       const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   },
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
// }));

// // Handle preflight requests
// app.options('*', cors());

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Serve uploaded files
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Routes
// app.use('/api/admin', adminRoutes);
// app.use('/api/blogs', blogRoutes);
// app.use('/api/contact', contactRoutes);

// // Health check endpoint
// app.get('/api/health', (req, res) => {
//   res.json({ 
//     status: 'OK', 
//     message: 'Server is running',
//     environment: process.env.NODE_ENV,
//     timestamp: new Date().toISOString()
//   });
// });

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('✅ MongoDB connected successfully'))
//   .catch(err => {
//     console.error('❌ MongoDB connection error:', err);
//     process.exit(1);
//   });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
//   console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
//   console.log(`📝 Blog API: http://localhost:${PORT}/api/blogs`);
//   console.log(`👤 Admin API: http://localhost:${PORT}/api/admin`);
//   console.log(`✅ CORS enabled for: ${allowedOrigins.join(', ')}`);
// });

// server/server.js - EXPRESS 5 COMPATIBLE VERSION
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import adminRoutes from './routes/admin.js';
import blogRoutes from './routes/blog.js';
import contactRoutes from './routes/contact.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

// ✅ CORS Configuration
const allowedOrigins = [
  'http://localhost:3000',
  'https://www.eminenceadvice.com',
  'https://eminenceadvice.com',
  'https://eminence-advice.vercel.app'
];

// ✅ FIXED: Simple CORS setup for Express 5
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// ✅ REMOVED: The problematic app.options('*') line
// Express 5 automatically handles OPTIONS requests when CORS is enabled

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/contact', contactRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Server is running',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Global Eminence API Server',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  });
});

// ✅ FIXED: Better MongoDB connection with error handling
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/global-eminence', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📝 Blog API: http://localhost:${PORT}/api/blogs`);
  console.log(`👤 Admin API: http://localhost:${PORT}/api/admin`);
  console.log(`📞 Contact API: http://localhost:${PORT}/api/contact`);
  console.log(`🏥 Health check: http://localhost:${PORT}/api/health`);
  console.log(`✅ CORS enabled for: ${allowedOrigins.join(', ')}`);
});

// ✅ Error handling for unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log('❌ Unhandled Promise Rejection:', err.message);
  console.log(err);
  // Close server & exit process
  process.exit(1);
});