// AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const token = localStorage.getItem('adminToken');

  const fetchContacts = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/contact`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setContacts(data);
  };

  const fetchBlogs = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/blogs`);
    setBlogs(data);
  };

  useEffect(() => {
    if (!token) return navigate('/admin/login');
    fetchContacts();
    fetchBlogs();
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box display="flex" justifyContent="space-between" mb={4}>
        <Typography variant="h4">Admin Dashboard</Typography>
        <Button variant="contained" color="secondary" onClick={handleLogout}>Logout</Button>
      </Box>

      <Typography variant="h5" mb={2}>Contact Submissions</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell><TableCell>Email</TableCell><TableCell>Phone</TableCell><TableCell>Message</TableCell><TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map(c => (
            <TableRow key={c._id}>
              <TableCell>{c.name}</TableCell>
              <TableCell>{c.email}</TableCell>
              <TableCell>{c.phone}</TableCell>
              <TableCell>{c.message}</TableCell>
              <TableCell>{new Date(c.createdAt).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Typography variant="h5" mt={4} mb={2}>Blogs</Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={() => navigate('/admin/blogs/new')}>Create Blog</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell><TableCell>Category</TableCell><TableCell>Tags</TableCell><TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {blogs.map(b => (
            <TableRow key={b._id}>
              <TableCell>{b.title}</TableCell>
              <TableCell>{b.category}</TableCell>
              <TableCell>{b.tags}</TableCell>
              <TableCell>
                <Button onClick={() => navigate(`/admin/blogs/${b._id}/edit`)}>Edit</Button>
                <Button color="error">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
