const Blog = require('../models/Blog');
const slugify = require('slugify');

exports.createBlog = async (req, res) => {
  try {
    const { title, content, category, tags, featuredImage, status } = req.body;
    const slug = slugify(title, { lower: true, strict: true });
    const blog = await Blog.create({ title, slug, content, category, tags, featuredImage, status });
    res.status(201).json(blog);
  } catch(err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch(err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if(!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch(err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(blog);
  } catch(err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Blog deleted' });
  } catch(err) {
    res.status(500).json({ message: 'Server error' });
  }
};
