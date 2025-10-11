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



// server/index.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import adminRoutes from './routes/admin.js';
import blogRoutes from './routes/blog.js';
import contactRoutes from './routes/contacts.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

app.use(cors({
  origin: ['http://localhost:3000', 'https://eminence-advice.onrender.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/contact', contactRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📝 Blog API: http://localhost:${PORT}/api/blogs`);
  console.log(`👤 Admin API: http://localhost:${PORT}/api/admin`);
});