import express from 'express';
import Blog from '../models/Blog.js';
import { protect } from '../middleware/auth.js';
import multer from 'multer';
import slugify from 'slugify';

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// Get all blogs (public)
router.get('/', async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
});

// Create new blog (admin)
router.post('/', protect, upload.single('featuredImage'), async (req, res) => {
  const { title, content, category, tags } = req.body;
  const blog = new Blog({
    title,
    content,
    category,
    tags,
    featuredImage: req.file ? '/uploads/' + req.file.filename : '',
    slug: slugify(title, { lower: true })
  });
  await blog.save();
  res.json(blog);
});

// Update blog
router.put('/:id', protect, upload.single('featuredImage'), async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ message: 'Blog not found' });

  blog.title = req.body.title || blog.title;
  blog.content = req.body.content || blog.content;
  blog.category = req.body.category || blog.category;
  blog.tags = req.body.tags || blog.tags;
  if (req.file) blog.featuredImage = '/uploads/' + req.file.filename;
  blog.slug = slugify(blog.title, { lower: true });

  await blog.save();
  res.json(blog);
});

// Delete blog
router.delete('/:id', protect, async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: 'Blog deleted' });
});

export default router;
