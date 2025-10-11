// client/src/pages/BlogDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axios';
import DOMPurify from 'dompurify';

export default function BlogDetail() {
  const { slug } = useParams(); // instead of id
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    api.get(`/blogs/${slug}`).then(r => setBlog(r.data)).catch(() => { });
  }, [slug]);

  if (!blog) return <div>Loading...</div>;
  return (
    <div style={{ maxWidth: 900, margin: '2rem auto' }}>
      <h1>{blog.title}</h1>
      <div>Published: {new Date(blog.createdAt).toLocaleDateString()}</div>
      {blog.featuredImage && <img src={`${process.env.REACT_APP_API_URL}${blog.featuredImage}`} alt="" style={{ width: '100%', maxHeight: 400, objectFit: 'cover' }} />}
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content) }} />
    </div>
  );
}
