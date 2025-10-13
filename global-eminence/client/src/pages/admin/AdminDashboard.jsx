// // AdminDashboard.jsx
// import React, { useEffect, useState } from 'react';
// import { Box, Container, Typography, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// export default function AdminDashboard() {
//   const [contacts, setContacts] = useState([]);
//   const [blogs, setBlogs] = useState([]);
//   const navigate = useNavigate();

//   const token = localStorage.getItem('adminToken');

//   const fetchContacts = async () => {
//     const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/contact`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     setContacts(data);
//   };

//   const fetchBlogs = async () => {
//     const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/blogs`);
//     setBlogs(data);
//   };

//   useEffect(() => {
//     if (!token) return navigate('/admin/login');
//     fetchContacts();
//     fetchBlogs();
//   }, [token]);

//   const handleLogout = () => {
//     localStorage.removeItem('adminToken');
//     navigate('/admin/login');
//   };

//   return (
//     <Container maxWidth="lg" sx={{ mt: 4 }}>
//       <Box display="flex" justifyContent="space-between" mb={4}>
//         <Typography variant="h4">Admin Dashboard</Typography>
//         <Button variant="contained" color="secondary" onClick={handleLogout}>Logout</Button>
//       </Box>

//       <Typography variant="h5" mb={2}>Contact Submissions</Typography>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Name</TableCell><TableCell>Email</TableCell><TableCell>Phone</TableCell><TableCell>Message</TableCell><TableCell>Date</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {contacts.map(c => (
//             <TableRow key={c._id}>
//               <TableCell>{c.name}</TableCell>
//               <TableCell>{c.email}</TableCell>
//               <TableCell>{c.phone}</TableCell>
//               <TableCell>{c.message}</TableCell>
//               <TableCell>{new Date(c.createdAt).toLocaleString()}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>

//       <Typography variant="h5" mt={4} mb={2}>Blogs</Typography>
//       <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={() => navigate('/admin/blogs/new')}>Create Blog</Button>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Title</TableCell><TableCell>Category</TableCell><TableCell>Tags</TableCell><TableCell>Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {blogs.map(b => (
//             <TableRow key={b._id}>
//               <TableCell>{b.title}</TableCell>
//               <TableCell>{b.category}</TableCell>
//               <TableCell>{b.tags}</TableCell>
//               <TableCell>
//                 <Button onClick={() => navigate(`/admin/blogs/${b._id}/edit`)}>Edit</Button>
//                 <Button color="error">Delete</Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Container>
//   );
// }


// AdminDashboard.jsx - UPDATED & MERGED
import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Alert,
  CircularProgress
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const token = localStorage.getItem('adminToken');

  const fetchContacts = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/contact`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setContacts(data);
    } catch (err) {
      console.error('Error fetching contacts:', err);
      setError('Failed to load contacts');
    }
  };

  const fetchBlogs = async () => {
    try {
      // Use admin route to get ALL blogs (including drafts)
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/blogs`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBlogs(data);
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setError('Failed to load blogs');
    }
  };

  const handleDeleteBlog = async (blogId) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await axios.delete(`${process.env.REACT_APP_API_URL}/blogs/${blogId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        // Refresh blogs list after deletion
        fetchBlogs();
      } catch (err) {
        console.error('Error deleting blog:', err);
        setError('Failed to delete blog');
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    const loadData = async () => {
      setLoading(true);
      try {
        await Promise.all([fetchContacts(), fetchBlogs()]);
      } catch (err) {
        console.error('Error loading dashboard data:', err);
        setError('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <CircularProgress />
        <Typography sx={{ ml: 2 }}>Loading Dashboard...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4">Admin Dashboard</Typography>
        <Button variant="contained" color="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError('')}>
          {error}
        </Alert>
      )}

      {/* Contact Submissions Section */}
      <Typography variant="h5" mb={2}>Contact Submissions</Typography>
      <Table sx={{ mb: 4 }}>
        <TableHead>
          <TableRow>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell><strong>Email</strong></TableCell>
            <TableCell><strong>Phone</strong></TableCell>
            <TableCell><strong>Message</strong></TableCell>
            <TableCell><strong>Date</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.length > 0 ? contacts.map(contact => (
            <TableRow key={contact._id}>
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone || 'N/A'}</TableCell>
              <TableCell sx={{ maxWidth: 200 }}>
                {contact.message.length > 100
                  ? `${contact.message.substring(0, 100)}...`
                  : contact.message
                }
              </TableCell>
              <TableCell>
                {new Date(contact.createdAt).toLocaleDateString()}
              </TableCell>
            </TableRow>
          )) : (
            <TableRow>
              <TableCell colSpan={5} align="center">
                No contact submissions yet
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Blogs Section */}
      <Typography variant="h5" mt={4} mb={2}>Blog Management</Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 2 }}
        onClick={() => navigate('/admin/blogs/new')}
      >
        Create New Blog
      </Button>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Title</strong></TableCell>
            <TableCell><strong>Category</strong></TableCell>
            <TableCell><strong>Tags</strong></TableCell>
            <TableCell><strong>Status</strong></TableCell>
            <TableCell><strong>Actions</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {blogs.length > 0 ? blogs.map(blog => (
            <TableRow key={blog._id}>
              <TableCell>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    maxWidth: 200,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {blog.title}
                </Typography>
              </TableCell>
              <TableCell>
                {blog.category || 'Uncategorized'}
              </TableCell>
              <TableCell>
                {Array.isArray(blog.tags)
                  ? blog.tags.slice(0, 3).join(', ')
                  : blog.tags || 'No tags'
                }
                {Array.isArray(blog.tags) && blog.tags.length > 3 && '...'}
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: 'inline-block',
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    backgroundColor: blog.status === 'published' ? 'success.light' : 'warning.light',
                    color: blog.status === 'published' ? 'success.dark' : 'warning.dark',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                  }}
                >
                  {blog.status || 'draft'}
                </Box>
              </TableCell>
              <TableCell>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => navigate(`/admin/blogs/${blog._id}/edit`)}
                  sx={{ mr: 1, mb: 1 }}
                >
                  Edit
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  onClick={() => handleDeleteBlog(blog._id)}
                  sx={{ mb: 1 }}
                >
                  Delete
                </Button>
                {blog.slug && (
                  <Button
                    size="small"
                    variant="outlined"
                    color="info"
                    onClick={() => window.open(`/blogs/${blog.slug}`, '_blank')}
                    sx={{ ml: 1, mb: 1 }}
                  >
                    View
                  </Button>
                )}
              </TableCell>
            </TableRow>
          )) : (
            <TableRow>
              <TableCell colSpan={5} align="center">
                No blogs created yet
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Dashboard Stats */}
      <Box sx={{ mt: 4, p: 3, backgroundColor: 'grey.50', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Dashboard Statistics
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
          <Box>
            <Typography variant="body2" color="textSecondary">Total Contacts</Typography>
            <Typography variant="h6" color="primary">{contacts.length}</Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="textSecondary">Total Blogs</Typography>
            <Typography variant="h6" color="primary">{blogs.length}</Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="textSecondary">Published Blogs</Typography>
            <Typography variant="h6" color="success.main">
              {blogs.filter(blog => blog.status === 'published' || blog.isPublished).length}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="textSecondary">Draft Blogs</Typography>
            <Typography variant="h6" color="warning.main">
              {blogs.filter(blog => blog.status === 'draft' || !blog.isPublished).length}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}