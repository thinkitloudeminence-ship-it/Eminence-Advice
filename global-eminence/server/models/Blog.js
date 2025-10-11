import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  slug: { 
    type: String, 
    unique: true,
    required: true
  },
  content: { 
    type: String, 
    required: true 
  },
  category: { 
    type: String,
    default: 'study-abroad'
  },
  tags: [{ 
    type: String 
  }], // ✅ Changed to array
  featuredImage: { 
    type: String 
  },
  isPublished: { // ✅ Use isPublished instead of status
    type: Boolean,
    default: false
  },
  status: { // ✅ Keep both for compatibility
    type: String,
    enum: ['draft', 'published'],
    default: 'draft'
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Update updatedAt before saving
blogSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model('Blog', blogSchema);