// const Blog = require("../models/Blog");

// // ✅ Get all blogs
// exports.getBlogs = async (req, res) => {
//   try {
//     const blogs = await Blog.find().sort({ createdAt: -1 });
//     res.json(blogs);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // ✅ Get single blog by slug
// exports.getBlogBySlug = async (req, res) => {
//   try {
//     const blog = await Blog.findOne({ slug: req.params.slug });
//     if (!blog) return res.status(404).json({ message: "Blog not found" });
//     res.json(blog);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // ✅ Create blog
// exports.createBlog = async (req, res) => {
//   try {
//     const { title, slug, content } = req.body;
//     const image = req.file ? `/uploads/${req.file.filename}` : null;

//     const blog = await Blog.create({ title, slug, content, image });
//     res.status(201).json(blog);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // ✅ Update blog
// exports.updateBlog = async (req, res) => {
//   try {
//     const { title, slug, content } = req.body;
//     const image = req.file ? `/uploads/${req.file.filename}` : undefined;

//     const updated = await Blog.findByIdAndUpdate(
//       req.params.id,
//       { title, slug, content, ...(image && { image }) },
//       { new: true }
//     );

//     if (!updated) return res.status(404).json({ message: "Blog not found" });
//     res.json(updated);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // ✅ Delete blog
// exports.deleteBlog = async (req, res) => {
//   try {
//     await Blog.findByIdAndDelete(req.params.id);
//     res.json({ message: "Blog deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };



// server/controllers/blogController.js
const Blog = require("../models/Blog");
const path = require("path");
const fs = require("fs");

// ✅ Get all blogs (public)
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true }).sort({ createdAt: -1 });
    
    // Image URLs properly format karna
    const blogsWithCorrectUrls = blogs.map(blog => {
      const blogObj = blog.toObject();
      if (blogObj.featuredImage && !blogObj.featuredImage.startsWith('http')) {
        blogObj.featuredImage = `${process.env.CLIENT_URL || 'http://localhost:5000'}${blogObj.featuredImage}`;
      }
      return blogObj;
    });
    
    res.json(blogsWithCorrectUrls);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get single blog by slug (public)
exports.getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    
    // Image URL fix
    const blogObj = blog.toObject();
    if (blogObj.featuredImage && !blogObj.featuredImage.startsWith('http')) {
      blogObj.featuredImage = `${process.env.CLIENT_URL || 'http://localhost:5000'}${blogObj.featuredImage}`;
    }
    
    res.json(blogObj);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Create blog (protected)
exports.createBlog = async (req, res) => {
  try {
    const { title, slug, content, excerpt, category, tags, metaDescription, isPublished } = req.body;
    
    // Image path handle karna
    let featuredImage = null;
    if (req.file) {
      featuredImage = `/uploads/${req.file.filename}`;
    }

    const blogData = {
      title,
      slug,
      content,
      excerpt,
      category,
      tags: typeof tags === 'string' ? JSON.parse(tags) : tags,
      metaDescription,
      isPublished: isPublished === 'true' || isPublished === true,
      featuredImage,
      author: req.admin._id
    };

    const blog = await Blog.create(blogData);
    res.status(201).json(blog);
  } catch (err) {
    // Duplicate slug error handle karna
    if (err.code === 11000) {
      return res.status(400).json({ message: "Blog with this slug already exists" });
    }
    res.status(500).json({ message: err.message });
  }
};

// ✅ Update blog (protected)
exports.updateBlog = async (req, res) => {
  try {
    const { title, slug, content, excerpt, category, tags, metaDescription, isPublished } = req.body;
    
    const updateData = {
      title,
      slug,
      content,
      excerpt,
      category,
      tags: typeof tags === 'string' ? JSON.parse(tags) : tags,
      metaDescription,
      isPublished: isPublished === 'true' || isPublished === true
    };

    // Agar new image upload hui hai to update karo
    if (req.file) {
      updateData.featuredImage = `/uploads/${req.file.filename}`;
      
      // Purani image delete karna (optional)
      const oldBlog = await Blog.findById(req.params.id);
      if (oldBlog && oldBlog.featuredImage) {
        const oldImagePath = path.join(__dirname, '..', oldBlog.featuredImage);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedBlog) return res.status(404).json({ message: "Blog not found" });
    res.json(updatedBlog);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: "Blog with this slug already exists" });
    }
    res.status(500).json({ message: err.message });
  }
};

// ✅ Delete blog (protected)
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    // Blog image delete karna
    if (blog.featuredImage) {
      const imagePath = path.join(__dirname, '..', blog.featuredImage);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};