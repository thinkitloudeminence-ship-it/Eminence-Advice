// import React, { useState, useEffect } from 'react';
// import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, MenuItem } from '@mui/material';
// import ReactQuill from 'react-quill-new';
// import 'react-quill-new/dist/quill.snow.css';
// import API from '../../api/axios';

// export default function CreateBlog({ open, handleClose, onBlogCreated, editBlog }) {
//   const [title, setTitle] = useState('');
//   const [category, setCategory] = useState('');
//   const [tags, setTags] = useState('');
//   const [content, setContent] = useState('');
//   const [featuredImage, setFeaturedImage] = useState('');
//   const [status, setStatus] = useState('draft');

//   useEffect(() => {
//     if (editBlog) {
//       setTitle(editBlog.title || '');
//       setCategory(editBlog.category || '');
//       setTags(editBlog.tags || '');
//       setContent(editBlog.content || '');
//       setFeaturedImage(editBlog.featuredImage || '');
//       setStatus(editBlog.status || 'draft');
//     } else {
//       setTitle(''); setCategory(''); setTags(''); setContent(''); setFeaturedImage(''); setStatus('draft');
//     }
//   }, [editBlog]);

//   const handleSubmit = async () => {
//     try {
//       if (editBlog) {
//         await API.put(`/blogs/${editBlog._id}`, { title, category, tags, content, featuredImage, status });
//       } else {
//         await API.post('/blogs', { title, category, tags, content, featuredImage, status });
//       }
//       onBlogCreated();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
//       <DialogTitle>{editBlog ? 'Edit Blog' : 'Create Blog'}</DialogTitle>
//       <DialogContent>
//         <TextField label="Title" fullWidth sx={{ mb: 2 }} value={title} onChange={e => setTitle(e.target.value)} />
//         <TextField label="Category" fullWidth sx={{ mb: 2 }} value={category} onChange={e => setCategory(e.target.value)} />
//         <TextField label="Tags (comma-separated)" fullWidth sx={{ mb: 2 }} value={tags} onChange={e => setTags(e.target.value)} />
//         <TextField label="Featured Image URL" fullWidth sx={{ mb: 2 }} value={featuredImage} onChange={e => setFeaturedImage(e.target.value)} />
//         <TextField select label="Status" fullWidth sx={{ mb: 2 }} value={status} onChange={e => setStatus(e.target.value)}>
//           <MenuItem value="draft">Draft</MenuItem>
//           <MenuItem value="published">Published</MenuItem>
//         </TextField>
//         <ReactQuill theme="snow" value={content} onChange={setContent} />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose}>Cancel</Button>
//         <Button variant="contained" onClick={handleSubmit}>{editBlog ? 'Update' : 'Save'}</Button>
//       </DialogActions>
//     </Dialog>
//   );
// }



// client/src/pages/admin/CreateBlog.jsx
import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, MenuItem } from '@mui/material';
import API from '../../api/axios';

export default function CreateBlog({ open, handleClose, onBlogCreated, editBlog }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('study-abroad');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [status, setStatus] = useState('draft');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editBlog) {
      setTitle(editBlog.title || '');
      setCategory(editBlog.category || 'study-abroad');
      setTags(editBlog.tags ? editBlog.tags.join(', ') : '');
      setContent(editBlog.content || '');
      setFeaturedImage(editBlog.featuredImage || '');
      setStatus(editBlog.status || 'draft');
    } else {
      setTitle('');
      setCategory('study-abroad');
      setTags('');
      setContent('');
      setFeaturedImage('');
      setStatus('draft');
    }
  }, [editBlog, open]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const blogData = {
        title,
        category,
        tags: tags.split(',').map(t => t.trim()).filter(t => t),
        content,
        featuredImage,
        status,
        isPublished: status === 'published'
      };

      if (editBlog) {
        await API.put(`/blogs/${editBlog._id}`, blogData);
      } else {
        await API.post('/blogs', blogData);
      }
      onBlogCreated();
      handleClose();
    } catch (err) {
      console.error('Error saving blog:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>{editBlog ? 'Edit Blog' : 'Create Blog'}</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          fullWidth
          sx={{ mb: 2 }}
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          label="Category"
          fullWidth
          select
          sx={{ mb: 2 }}
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <MenuItem value="study-abroad">Study Abroad</MenuItem>
          <MenuItem value="visa-guide">Visa Guide</MenuItem>
          <MenuItem value="scholarships">Scholarships</MenuItem>
          <MenuItem value="career-advice">Career Advice</MenuItem>
          <MenuItem value="university-guide">University Guide</MenuItem>
          <MenuItem value="student-life">Student Life</MenuItem>
        </TextField>
        <TextField
          label="Tags (comma-separated)"
          fullWidth
          sx={{ mb: 2 }}
          value={tags}
          onChange={e => setTags(e.target.value)}
          placeholder="study, abroad, visa"
        />
        <TextField
          label="Featured Image URL"
          fullWidth
          sx={{ mb: 2 }}
          value={featuredImage}
          onChange={e => setFeaturedImage(e.target.value)}
        />
        <TextField
          select
          label="Status"
          fullWidth
          sx={{ mb: 2 }}
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          <MenuItem value="draft">Draft</MenuItem>
          <MenuItem value="published">Published</MenuItem>
        </TextField>
        <TextField
          label="Content"
          multiline
          rows={8}
          fullWidth
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Write your blog content here..."
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} disabled={loading}>Cancel</Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Saving...' : (editBlog ? 'Update' : 'Save')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}