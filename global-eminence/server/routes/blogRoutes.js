const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const Blog = require('../models/Blog');

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, process.env.UPLOADS_DIR || 'uploads'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// Auth middleware
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token' });
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// Create blog
router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    const { title, content, category, isPublished } = req.body;
    const image = req.file?.filename;
    const blog = await Blog.create({ title, content, category, isPublished, image });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get blogs
router.get('/', async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
});

// Delete blog
router.delete('/:id', auth, async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  if (!blog) return res.status(404).json({ message: 'Blog not found' });
  // Delete file
  if (blog.image) fs.unlinkSync(path.join(process.env.UPLOADS_DIR || 'uploads', blog.image));
  res.json({ message: 'Deleted successfully' });
});

module.exports = router;
