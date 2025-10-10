import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios';
import { TextField, Button, Box, Alert } from '@mui/material';

export default function CreateBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('category', category);
      if(image) formData.append('image', image);

      await api.post('/api/blogs', formData, {
        headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` }
      });
      navigate('/admin/dashboard');
    } catch(err) {
      setError(err.response?.data?.message || 'Blog creation failed');
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: '50px auto' }}>
      <h2>Create Blog</h2>
      {error && <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Title" value={title} onChange={e => setTitle(e.target.value)} sx={{ mb: 2 }} required />
        <TextField fullWidth label="Content" value={content} onChange={e => setContent(e.target.value)} sx={{ mb: 2 }} multiline rows={6} required />
        <TextField fullWidth label="Category" value={category} onChange={e => setCategory(e.target.value)} sx={{ mb: 2 }} />
        <input type="file" onChange={e => setImage(e.target.files[0])} />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>Create Blog</Button>
      </form>
    </Box>
  );
}

