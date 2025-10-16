// import express from 'express';
// import Blog from '../models/Blog.js';
// import { protect } from '../middleware/auth.js';
// import multer from 'multer';
// import slugify from 'slugify';

// const router = express.Router();
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, 'uploads/'),
//   filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
// });
// const upload = multer({ storage });

// // Get all blogs (public)
// router.get('/', async (req, res) => {
//   const blogs = await Blog.find().sort({ createdAt: -1 });
//   res.json(blogs);
// });

// // Create new blog (admin)
// router.post('/', protect, upload.single('featuredImage'), async (req, res) => {
//   const { title, content, category, tags, status } = req.body;
//   const blog = new Blog({
//     title,
//     content,
//     category,
//     tags,
//     status,
//     featuredImage: req.file ? '/uploads/' + req.file.filename : '',
//     slug: slugify(title, { lower: true })
//   });
//   await blog.save();
//   res.json(blog);
// });


// // Update blog
// router.put('/:id', protect, upload.single('featuredImage'), async (req, res) => {
//   const blog = await Blog.findById(req.params.id);
//   if (!blog) return res.status(404).json({ message: 'Blog not found' });

//   blog.title = req.body.title || blog.title;
//   blog.content = req.body.content || blog.content;
//   blog.category = req.body.category || blog.category;
//   blog.tags = req.body.tags || blog.tags;
//   blog.status = req.body.status || blog.status;
//   if (req.file) blog.featuredImage = '/uploads/' + req.file.filename;
//   blog.slug = slugify(blog.title, { lower: true });

//   await blog.save();
//   res.json(blog);
// });

// // Delete blog
// router.delete('/:id', protect, async (req, res) => {
//   await Blog.findByIdAndDelete(req.params.id);
//   res.json({ message: 'Blog deleted' });
// });

// export default router;



// import express from 'express';
// import Blog from '../models/Blog.js';
// import { protect } from '../middleware/auth.js';
// import multer from 'multer';
// import slugify from 'slugify';
// import path from 'path';
// import fs from 'fs';

// const router = express.Router();

// // Ensure uploads directory exists
// const uploadsDir = path.join(process.cwd(), 'uploads');
// if (!fs.existsSync(uploadsDir)) {
//   fs.mkdirSync(uploadsDir, { recursive: true });
// }

// // Configure multer for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadsDir);
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, 'blog-' + uniqueSuffix + path.extname(file.originalname));
//   }
// });

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype.startsWith('image/')) {
//       cb(null, true);
//     } else {
//       cb(new Error('Only image files are allowed!'), false);
//     }
//   }
// });

// // Get all blogs (public) - including drafts for admin
// router.get('/', async (req, res) => {
//   try {
//     // If admin is authenticated, show all blogs including drafts
//     const showAll = req.headers.authorization ? true : false;

//     let blogs;
//     if (showAll) {
//       blogs = await Blog.find().sort({ createdAt: -1 });
//     } else {
//       blogs = await Blog.find({ status: 'published' }).sort({ createdAt: -1 });
//     }

//     res.json(blogs);
//   } catch (err) {
//     console.error('Get blogs error:', err);
//     res.status(500).json({ message: 'Server error fetching blogs' });
//   }
// });

// // Get single blog by slug (public)
// router.get('/:slug', async (req, res) => {
//   try {
//     const blog = await Blog.findOne({ slug: req.params.slug });
//     if (!blog) {
//       return res.status(404).json({ message: 'Blog not found' });
//     }

//     // Only return published blogs to public, admins can see drafts
//     if (blog.status !== 'published' && !req.headers.authorization) {
//       return res.status(404).json({ message: 'Blog not found' });
//     }

//     res.json(blog);
//   } catch (err) {
//     console.error('Get blog error:', err);
//     res.status(500).json({ message: 'Server error fetching blog' });
//   }
// });

// // Get single blog by ID (for editing)
// router.get('/id/:id', async (req, res) => {
//   try {
//     const blog = await Blog.findById(req.params.id);
//     if (!blog) {
//       return res.status(404).json({ message: 'Blog not found' });
//     }
//     res.json(blog);
//   } catch (err) {
//     console.error('Get blog by ID error:', err);
//     res.status(500).json({ message: 'Server error fetching blog' });
//   }
// });

// // Create new blog (admin)
// router.post('/', protect, upload.single('featuredImage'), async (req, res) => {
//   try {
//     const { title, content, category, tags, isPublished } = req.body;

//     if (!title || !content) {
//       return res.status(400).json({ message: 'Title and content are required' });
//     }

//     // Generate slug
//     let slug = slugify(title, { 
//       lower: true, 
//       strict: true,
//       remove: /[*+~.()'"!:@]/g 
//     });

//     // Ensure slug is unique
//     let existingBlog = await Blog.findOne({ slug });
//     let counter = 1;
//     const originalSlug = slug;

//     while (existingBlog) {
//       slug = `${originalSlug}-${counter}`;
//       existingBlog = await Blog.findOne({ slug });
//       counter++;
//     }

//     // Parse tags if they're sent as JSON string
//     let parsedTags = [];
//     if (tags) {
//       try {
//         parsedTags = typeof tags === 'string' ? JSON.parse(tags) : tags;
//       } catch (e) {
//         parsedTags = Array.isArray(tags) ? tags : [tags];
//       }
//     }

//     const blog = new Blog({
//       title: title.trim(),
//       slug,
//       content,
//       category: category || 'study-abroad',
//       tags: parsedTags,
//       status: isPublished === 'true' || isPublished === true ? 'published' : 'draft',
//       featuredImage: req.file ? `/uploads/${req.file.filename}` : ''
//     });

//     await blog.save();
//     res.status(201).json(blog);

//   } catch (err) {
//     console.error('Create blog error:', err);
//     res.status(500).json({ message: 'Server error creating blog' });
//   }
// });

// // Update blog
// router.put('/:id', protect, upload.single('featuredImage'), async (req, res) => {
//   try {
//     const { title, content, category, tags, isPublished } = req.body;

//     let blog = await Blog.findById(req.params.id);
//     if (!blog) {
//       return res.status(404).json({ message: 'Blog not found' });
//     }

//     // Update fields
//     if (title && title !== blog.title) {
//       blog.title = title.trim();
//       // Regenerate slug if title changed
//       let newSlug = slugify(blog.title, { 
//         lower: true, 
//         strict: true,
//         remove: /[*+~.()'"!:@]/g 
//       });

//       // Ensure new slug is unique
//       let existingBlog = await Blog.findOne({ slug: newSlug, _id: { $ne: blog._id } });
//       let counter = 1;
//       const originalSlug = newSlug;

//       while (existingBlog) {
//         newSlug = `${originalSlug}-${counter}`;
//         existingBlog = await Blog.findOne({ slug: newSlug, _id: { $ne: blog._id } });
//         counter++;
//       }

//       blog.slug = newSlug;
//     }

//     if (content) blog.content = content;
//     if (category) blog.category = category;

//     // Parse tags
//     if (tags) {
//       try {
//         blog.tags = typeof tags === 'string' ? JSON.parse(tags) : tags;
//       } catch (e) {
//         blog.tags = Array.isArray(tags) ? tags : [tags];
//       }
//     }

//     if (isPublished !== undefined) {
//       blog.status = (isPublished === 'true' || isPublished === true) ? 'published' : 'draft';
//     }

//     // Update featured image if new file uploaded
//     if (req.file) {
//       blog.featuredImage = `/uploads/${req.file.filename}`;
//     }

//     await blog.save();
//     res.json(blog);

//   } catch (err) {
//     console.error('Update blog error:', err);
//     res.status(500).json({ message: 'Server error updating blog' });
//   }
// });

// // Delete blog
// router.delete('/:id', protect, async (req, res) => {
//   try {
//     const blog = await Blog.findByIdAndDelete(req.params.id);
//     if (!blog) {
//       return res.status(404).json({ message: 'Blog not found' });
//     }
//     res.json({ message: 'Blog deleted successfully' });
//   } catch (err) {
//     console.error('Delete blog error:', err);
//     res.status(500).json({ message: 'Server error deleting blog' });
//   }
// });

// export default router;








import express from 'express';
import Blog from '../models/Blog.js';
import { protect } from '../middleware/auth.js';
import multer from 'multer';
import slugify from 'slugify';
import path from 'path';
import fs from 'fs';

const router = express.Router();

// Ensure uploads directory exists
const uploadsDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'blog-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  }
});

// Get all blogs (public) - Only published blogs
router.get('/', async (req, res) => {
  try {
    console.log('📖 Fetching all blogs from database...');

    // Get ONLY published blogs for public route
    const blogs = await Blog.find({
      $or: [
        { status: 'published' },
        { isPublished: true }
      ]
    }).sort({ createdAt: -1 });

    console.log(`✅ Found ${blogs.length} published blogs`);

    res.json(blogs);
  } catch (err) {
    console.error('❌ Get blogs error:', err);
    res.status(500).json({ message: 'Server error while fetching blogs' });
  }
});

// Get all blogs for admin (including drafts)
router.get('/admin/all', protect, async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    console.error('Admin get blogs error:', err);
    res.status(500).json({ message: 'Server error while fetching blogs' });
  }
});

// Get blog by ID
router.get('/:id', async (req, res) => {
  try {
    let blog;

    // Check if it's a valid MongoDB ID
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      blog = await Blog.findById(req.params.id);
    }

    // If not found by ID, try finding by slug
    if (!blog) {
      blog = await Blog.findOne({ slug: req.params.id });
    }

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
 
    res.json(blog);
  } catch (err) {
    console.error('Get blog error:', err);
    res.status(500).json({ message: 'Server error while fetching blog' });
  }
});

// Create new blog (admin)
router.post('/', protect, upload.single('featuredImage'), async (req, res) => {
  try {
    const { title, content, category, tags, status } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    let tagsArray = [];
    try {
      tagsArray = tags ? JSON.parse(tags) : [];
    } catch (e) {
      tagsArray = tags ? [tags] : [];
    }

    const slug = slugify(title, {
      lower: true,
      strict: true,
      remove: /[*+~.()'"!:@]/g
    });

    // Check if slug already exists
    const existingBlog = await Blog.findOne({ slug });
    if (existingBlog) {
      return res.status(400).json({ message: 'A blog with this title already exists' });
    }

    const blogData = {
      title: title.trim(),
      slug,
      content,
      category: category || 'study-abroad',
      tags: tagsArray,
      status: status || 'draft',
      isPublished: status === 'published'
    };

    if (req.file) {
      blogData.featuredImage = '/uploads/' + req.file.filename;
    }

    const blog = new Blog(blogData);
    await blog.save();

    res.status(201).json({
      message: 'Blog created successfully',
      blog
    });

  } catch (err) {
    console.error('Create blog error:', err);

    if (err.code === 11000) {
      return res.status(400).json({ message: 'A blog with this slug already exists' });
    }

    res.status(500).json({
      message: 'Server error while creating blog',
      error: err.message
    });
  }
});

// Update blog
router.put('/:id', protect, upload.single('featuredImage'), async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    const { title, content, category, tags, status } = req.body;

    // Update fields
    if (title) {
      blog.title = title.trim();
      blog.slug = slugify(title, {
        lower: true,
        strict: true,
        remove: /[*+~.()'"!:@]/g
      });
    }

    if (content) blog.content = content;
    if (category) blog.category = category;
    if (status) {
      blog.status = status;
      blog.isPublished = status === 'published';
    }

    if (tags) {
      try {
        blog.tags = JSON.parse(tags);
      } catch (e) {
        blog.tags = [tags];
      }
    }

    if (req.file) {
      blog.featuredImage = '/uploads/' + req.file.filename;
    }

    await blog.save();

    res.json({
      message: 'Blog updated successfully',
      blog
    });

  } catch (err) {
    console.error('Update blog error:', err);

    if (err.code === 11000) {
      return res.status(400).json({ message: 'A blog with this slug already exists' });
    }

    res.status(500).json({
      message: 'Server error while updating blog',
      error: err.message
    });
  }
});

// Delete blog
router.delete('/:id', protect, async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    console.error('Delete blog error:', err);
    res.status(500).json({ message: 'Server error while deleting blog' });
  }
});

export default router;