// server/checkBlogs.js
import mongoose from 'mongoose';
import Blog from './models/Blog.js';
import dotenv from 'dotenv';

dotenv.config();

const checkBlogs = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    const blogs = await Blog.find().sort({ createdAt: -1 });
    
    console.log(`\n📊 TOTAL BLOGS IN DATABASE: ${blogs.length}\n`);
    
    blogs.forEach((blog, index) => {
      console.log(`--- Blog ${index + 1} ---`);
      console.log(`Title: ${blog.title}`);
      console.log(`Slug: ${blog.slug}`);
      console.log(`Status: ${blog.status}`);
      console.log(`isPublished: ${blog.isPublished}`);
      console.log(`Featured Image: ${blog.featuredImage}`);
      console.log(`Created: ${blog.createdAt}`);
      console.log('-------------------\n');
    });

    // Count published blogs
    const publishedCount = blogs.filter(blog => 
      blog.status === 'published' || blog.isPublished === true
    ).length;
    
    console.log(`🎯 PUBLISHED BLOGS: ${publishedCount}`);
    console.log(`📝 DRAFT BLOGS: ${blogs.length - publishedCount}`);

  } catch (err) {
    console.error('❌ Error:', err);
  } finally {
    mongoose.connection.close();
  }
};

checkBlogs();