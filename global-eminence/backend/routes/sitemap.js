// server/routes/sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import express from 'express';
import Blog from '../models/Blog.js';

const router = express.Router();

router.get('/sitemap.xml', async (req, res) => {
  try {
    const blogs = await Blog.find({});
    const links = [
      { url: '/', changefreq: 'weekly', priority: 1.0 },
      { url: '/about', changefreq: 'monthly', priority: 0.8 },
      { url: '/services', changefreq: 'monthly', priority: 0.8 },
      { url: '/contact', changefreq: 'monthly', priority: 0.8 },
      ...blogs.map(blog => ({ url: `/blogs/${blog.slug}`, changefreq: 'weekly', priority: 0.7 }))
    ];

    const stream = new SitemapStream({ hostname: 'https://www.eminenceadvice.com' });
    res.writeHead(200, { 'Content-Type': 'application/xml' });
    const xml = await streamToPromise(Readable.from(links).pipe(stream));
    res.end(xml.toString());
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
});

export default router;
