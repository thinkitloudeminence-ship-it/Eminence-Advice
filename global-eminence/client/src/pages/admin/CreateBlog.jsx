import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, MenuItem } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import API from '../../api/axios';

export default function CreateBlog({ open, handleClose, onBlogCreated, editBlog }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [status, setStatus] = useState('draft');

  useEffect(() => {
    if (editBlog) {
      setTitle(editBlog.title || '');
      setCategory(editBlog.category || '');
      setTags(editBlog.tags || '');
      setContent(editBlog.content || '');
      setFeaturedImage(editBlog.featuredImage || '');
      setStatus(editBlog.status || 'draft');
    } else {
      setTitle(''); setCategory(''); setTags(''); setContent(''); setFeaturedImage(''); setStatus('draft');
    }
  }, [editBlog]);

  const handleSubmit = async () => {
    try {
      if (editBlog) {
        await API.put(`/blogs/${editBlog._id}`, { title, category, tags, content, featuredImage, status });
      } else {
        await API.post('/blogs', { title, category, tags, content, featuredImage, status });
      }
      onBlogCreated();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>{editBlog ? 'Edit Blog' : 'Create Blog'}</DialogTitle>
      <DialogContent>
        <TextField label="Title" fullWidth sx={{ mb: 2 }} value={title} onChange={e => setTitle(e.target.value)} />
        <TextField label="Category" fullWidth sx={{ mb: 2 }} value={category} onChange={e => setCategory(e.target.value)} />
        <TextField label="Tags (comma-separated)" fullWidth sx={{ mb: 2 }} value={tags} onChange={e => setTags(e.target.value)} />
        <TextField label="Featured Image URL" fullWidth sx={{ mb: 2 }} value={featuredImage} onChange={e => setFeaturedImage(e.target.value)} />
        <TextField select label="Status" fullWidth sx={{ mb: 2 }} value={status} onChange={e => setStatus(e.target.value)}>
          <MenuItem value="draft">Draft</MenuItem>
          <MenuItem value="published">Published</MenuItem>
        </TextField>
        <ReactQuill theme="snow" value={content} onChange={setContent} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>{editBlog ? 'Update' : 'Save'}</Button>
      </DialogActions>
    </Dialog>
  );
}
