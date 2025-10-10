import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios';
import {
  Box, Typography, Button, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper, Alert, CircularProgress,
  Dialog, DialogTitle, DialogContent, DialogActions, IconButton
} from '@mui/material';
import { Edit, Delete, Refresh } from '@mui/icons-material';

export default function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [deleteDialog, setDeleteDialog] = useState({ open: false, blogId: null, blogTitle: '' });
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    setLoading(true); setError('');
    try { await Promise.all([fetchBlogs(), fetchContacts()]); }
    catch { setError('Failed to fetch data'); }
    finally { setLoading(false); }
  };

  const fetchBlogs = async () => {
    try { const { data } = await api.get('/api/blogs'); setBlogs(data || []); }
    catch (err) { console.error(err); throw err; }
  };

  const fetchContacts = async () => {
    try { const { data } = await api.get('/api/contact'); setContacts(data.data || []); }
    catch (err) { console.error(err); throw err; }
  };

  const handleDeleteBlog = async (blogId) => {
    try {
      await api.delete(`/api/blogs/${blogId}`, { headers: { Authorization: `Bearer ${token}` } });
      setDeleteDialog({ open: false, blogId: null, blogTitle: '' });
      fetchBlogs();
    } catch (err) { setError('Failed to delete blog'); }
  };

  const openDeleteDialog = (blogId, blogTitle) => setDeleteDialog({ open: true, blogId, blogTitle });
  const closeDeleteDialog = () => setDeleteDialog({ open: false, blogId: null, blogTitle: '' });

  if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', height: '50vh' }}><CircularProgress /></Box>;

  return (
    <Box sx={{ maxWidth: 1200, margin: '50px auto', p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h4" fontWeight="bold">Admin Dashboard</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button startIcon={<Refresh />} onClick={fetchData} variant="outlined">Refresh</Button>
          <Button variant="contained" onClick={() => navigate('/admin/blog/create')} sx={{ backgroundColor: '#FF6600' }}>+ Create New Blog</Button>
        </Box>
      </Box>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      {/* Blogs Section */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Blogs</Typography>
        <TableContainer><Table>
          <TableHead>
            <TableRow><th>Title</th><th>Slug</th><th>Category</th><th>Status</th><th>Actions</th></TableRow>
          </TableHead>
          <TableBody>
            {blogs.map(blog => (
              <TableRow key={blog._id}>
                <TableCell>{blog.title}</TableCell>
                <TableCell>{blog.slug}</TableCell>
                <TableCell>{blog.category || '-'}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'inline-block', px: 1, py: 0.5, borderRadius: 1, backgroundColor: blog.isPublished ? '#4caf50' : '#ff9800', color: 'white', fontSize: '0.75rem' }}>
                    {blog.isPublished ? 'Published' : 'Draft'}
                  </Box>
                </TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => navigate(`/admin/blog/edit/${blog._id}`)}><Edit /></IconButton>
                  <IconButton color="error" onClick={() => openDeleteDialog(blog._id, blog.title)}><Delete /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table></TableContainer>
        {blogs.length === 0 && <Typography textAlign="center" sx={{ py: 3 }}>No blogs found</Typography>}
      </Paper>

      {/* Contacts Section */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>Contact Submissions</Typography>
        <TableContainer><Table>
          <TableHead>
            <TableRow><th>Name</th><th>Email</th><th>Phone</th><th>Message</th><th>Created At</th></TableRow>
          </TableHead>
          <TableBody>
            {contacts.map(contact => (
              <TableRow key={contact._id}>
                <TableCell>{contact.name}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone || '-'}</TableCell>
                <TableCell>{contact.message}</TableCell>
                <TableCell>{new Date(contact.createdAt).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table></TableContainer>
        {contacts.length === 0 && <Typography textAlign="center" sx={{ py: 3 }}>No contact submissions</Typography>}
      </Paper>

      {/* Delete Dialog */}
      <Dialog open={deleteDialog.open} onClose={closeDeleteDialog}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>Are you sure you want to delete "{deleteDialog.blogTitle}"?</DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteDialog}>Cancel</Button>
          <Button onClick={() => handleDeleteBlog(deleteDialog.blogId)} color="error" variant="contained">Delete</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
