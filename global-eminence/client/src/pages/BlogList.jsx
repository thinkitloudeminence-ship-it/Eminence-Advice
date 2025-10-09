// client/src/pages/BlogList.jsx
import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import { Link } from 'react-router-dom';

export default function BlogList(){
  const [blogs, setBlogs] = useState([]);
  useEffect(()=>{ api.get('/api/blogs').then(r=>setBlogs(r.data)); },[]);
  return (
    <div style={{ maxWidth: 1100, margin: '2rem auto' }}>
      <h2>Blogs</h2>
      {blogs.map(b => (
        <div key={b._id} style={{ border:'1px solid #eee', padding: 16, marginBottom: 12 }}>
          {b.featuredImage && <img src={`${process.env.REACT_APP_API_URL}${b.featuredImage}`} alt="" style={{ width:200 }} />}
          <h3><Link to={`/blogs/${b.slug}`}>{b.title}</Link></h3>
          <p>{(b.content || '').replace(/<[^>]+>/g,'').slice(0,150)}...</p>
        </div>
      ))}
    </div>
  );
}
