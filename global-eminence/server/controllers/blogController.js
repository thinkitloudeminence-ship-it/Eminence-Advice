const Blog = require("../models/Blog");

// ✅ Get all blogs
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get single blog by slug
exports.getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Create blog
exports.createBlog = async (req, res) => {
  try {
    const { title, slug, content } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const blog = await Blog.create({ title, slug, content, image });
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Update blog
exports.updateBlog = async (req, res) => {
  try {
    const { title, slug, content } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : undefined;

    const updated = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, slug, content, ...(image && { image }) },
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Blog not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Delete blog
exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
