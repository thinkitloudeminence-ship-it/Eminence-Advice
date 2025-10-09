// import React, { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from '../../api/axios';

// export default function AdminDashboard() {
//     const [blogs, setBlogs] = useState([]);
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const fetchBlogs = async () => {
//         try {
//             const { data } = await axios.get('/api/blogs');
//             setBlogs(data);
//         } catch (err) {
//             console.error(err);
//             setError('Failed to fetch blogs');
//         }
//     }

//     useEffect(() => {
//         fetchBlogs();
//     }, []);

//     const handleDelete = async (id) => {
//         if (!window.confirm('Are you sure you want to delete this blog?')) return;
//         try {
//             const token = localStorage.getItem('adminToken');
//             await axios.delete(`/api/blogs/${id}`, {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setBlogs(blogs.filter(blog => blog._id !== id));
//         } catch (err) {
//             console.error(err);
//             setError('Failed to delete blog');
//         }
//     }

//     return (
//         <div style={{ maxWidth: 1000, margin: '50px auto' }}>
//             <h2>Admin Dashboard</h2>
//             <Link to="/admin/blogs/new"><button>Create New Blog</button></Link>
//             {error && <p style={{ color: 'red' }}>{error}</p>}

//             <table border="1" cellPadding="10" cellSpacing="0" width="100%" style={{ marginTop: 20 }}>
//                 <thead>
//                     <tr>
//                         <th>Title</th>
//                         <th>Slug</th>
//                         <th>Author</th>
//                         <th>Created At</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {blogs.map(blog => (
//                         <tr key={blog._id}>
//                             <td>{blog.title}</td>
//                             <td>{blog.slug}</td>
//                             <td>{blog.author?.name}</td>
//                             <td>{new Date(blog.createdAt).toLocaleString()}</td>
//                             <td>
//                                 <Link to={`/admin/blogs/${blog._id}/edit`}><button>Edit</button></Link>
//                                 <button onClick={() => handleDelete(blog._id)} style={{ marginLeft: 10 }}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }


// import React, { useEffect, useState } from 'react';
// import axios from '../../api/axios';

// export default function AdminDashboard() {
//   const [contacts, setContacts] = useState([]);
//   const [blogs, setBlogs] = useState([]);
//   const [error, setError] = useState('');

//   const token = localStorage.getItem('adminToken');

//   useEffect(() => {
//     fetchBlogs();
//     fetchContacts();
//   }, []);

//   const fetchBlogs = async () => {
//     try {
//       const { data } = await axios.get('/api/blogs', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setBlogs(data);
//     } catch (err) {
//       console.error(err);
//       setError('Failed to fetch blogs');
//     }
//   };

//   const fetchContacts = async () => {
//     try {
//       const { data } = await axios.get('/api/contact', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setContacts(data);
//     } catch (err) {
//       console.error(err);
//       setError('Failed to fetch contacts');
//     }
//   };

//   return (
//     <div style={{ maxWidth: 1200, margin: '50px auto' }}>
//       <h2>Admin Dashboard</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <h3>Blogs</h3>
//       <table border="1" cellPadding="10" width="100%">
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Slug</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {blogs.map(blog => (
//             <tr key={blog._id}>
//               <td>{blog.title}</td>
//               <td>{blog.slug}</td>
//               <td>
//                 <button>Edit</button>
//                 <button>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h3 style={{ marginTop: 40 }}>Contact Submissions</h3>
//       <table border="1" cellPadding="10" width="100%">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Message</th>
//             <th>Created At</th>
//           </tr>
//         </thead>
//         <tbody>
//           {contacts.map(c => (
//             <tr key={c._id}>
//               <td>{c.name}</td>
//               <td>{c.email}</td>
//               <td>{c.phone || '-'}</td>
//               <td>{c.message}</td>
//               <td>{new Date(c.createdAt).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import axios from '../../api/axios';
// import { Modal, Box, TextField, Button } from '@mui/material';

// export default function AdminDashboard() {
//   const [contacts, setContacts] = useState([]);
//   const [blogs, setBlogs] = useState([]);
//   const [error, setError] = useState('');
//   const [openModal, setOpenModal] = useState(false);
//   const [newBlog, setNewBlog] = useState({ title: '', slug: '' });

//   const token = localStorage.getItem('adminToken');

//   useEffect(() => {
//     fetchBlogs();
//     fetchContacts();
//   }, []);

//   const fetchBlogs = async () => {
//     try {
//       const { data } = await axios.get('/api/blogs', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setBlogs(data);
//     } catch (err) {
//       console.error(err);
//       setError('Failed to fetch blogs');
//     }
//   };

//   const fetchContacts = async () => {
//     try {
//       const { data } = await axios.get('/api/contact', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setContacts(data);
//     } catch (err) {
//       console.error(err);
//       setError('Failed to fetch contacts');
//     }
//   };

//   const handleOpenModal = () => setOpenModal(true);
//   const handleCloseModal = () => setOpenModal(false);

//   const handleCreateBlog = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/api/blogs', newBlog, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setNewBlog({ title: '', slug: '' });
//       handleCloseModal();
//       fetchBlogs(); // refresh blog list
//     } catch (err) {
//       console.error(err);
//       setError('Failed to create blog');
//     }
//   };

//   return (
//     <div style={{ maxWidth: 1200, margin: '50px auto' }}>
//       <h2>Admin Dashboard</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <h3>
//         Blogs 
//         <Button
//           variant="contained"
//           style={{ marginLeft: 20 }}
//           onClick={handleOpenModal}
//         >
//           Create Blog
//         </Button>
//       </h3>

//       <table border="1" cellPadding="10" width="100%">
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Slug</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {blogs.map(blog => (
//             <tr key={blog._id}>
//               <td>{blog.title}</td>
//               <td>{blog.slug}</td>
//               <td>
//                 <button>Edit</button>
//                 <button>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h3 style={{ marginTop: 40 }}>Contact Submissions</h3>
//       <table border="1" cellPadding="10" width="100%">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Message</th>
//             <th>Created At</th>
//           </tr>
//         </thead>
//         <tbody>
//           {contacts.map(c => (
//             <tr key={c._id}>
//               <td>{c.name}</td>
//               <td>{c.email}</td>
//               <td>{c.phone || '-'}</td>
//               <td>{c.message}</td>
//               <td>{new Date(c.createdAt).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Modal for creating blog */}
//       <Modal open={openModal} onClose={handleCloseModal}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: 400,
//             bgcolor: 'background.paper',
//             p: 4,
//             borderRadius: 2
//           }}
//         >
//           <h3>Create Blog</h3>
//           <form onSubmit={handleCreateBlog}>
//             <TextField
//               label="Title"
//               fullWidth
//               margin="normal"
//               value={newBlog.title}
//               onChange={e => setNewBlog({ ...newBlog, title: e.target.value })}
//               required
//             />
//             <TextField
//               label="Slug"
//               fullWidth
//               margin="normal"
//               value={newBlog.slug}
//               onChange={e => setNewBlog({ ...newBlog, slug: e.target.value })}
//               required
//             />
//             <Button type="submit" variant="contained" sx={{ mt: 2 }}>
//               Create
//             </Button>
//           </form>
//         </Box>
//       </Modal>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axios'; // ✅ make sure this path is correct

export default function AdminDashboard() {
    const [contacts, setContacts] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const token = localStorage.getItem('adminToken');

    useEffect(() => {
        fetchBlogs();
        fetchContacts();
    }, []);

    const fetchBlogs = async () => {
        try {
            const { data } = await axios.get('/api/blogs', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setBlogs(data || []); // ✅ correct: save blogs into blogs state
        } catch (err) {
            console.error(err);
            setError('Failed to fetch blogs');
        }
    };
    const fetchContacts = async () => {
        try {
            const { data } = await axios.get('/api/contact', {
                headers: { Authorization: `Bearer ${token}` }
            });
           setContacts(data.contacts || []);
        } catch (err) {
            console.error(err);
            setError('Failed to fetch contacts');
        }
    };

    return (
        <div style={{ maxWidth: 1200, margin: '50px auto' }}>
            <h2>Admin Dashboard</h2>
            <button
                style={{
                    marginBottom: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#FF6600',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 5
                }}
                onClick={() => navigate('/admin/blog/create')}
            >
                + Create New Blog
            </button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <h3>Blogs</h3>
            <table border="1" cellPadding="10" width="100%">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Slug</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map(blog => (
                        <tr key={blog._id}>
                            <td>{blog.title}</td>
                            <td>{blog.slug}</td>
                            <td>
                                <button onClick={() => navigate(`/admin/blog/edit/${blog._id}`)}>Edit</button>
                                <button
                                    onClick={async () => {
                                        if (window.confirm("Are you sure you want to delete this blog?")) {
                                            try {
                                                await axios.delete(`/api/blogs/${blog._id}`, {
                                                    headers: { Authorization: `Bearer ${token}` },
                                                });
                                                fetchBlogs(); // reload updated blogs list
                                            } catch (err) {
                                                console.error(err);
                                                setError("Failed to delete blog");
                                            }
                                        }
                                    }}
                                >
                                    Delete
                                </button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>

            <h3 style={{ marginTop: 40 }}>Contact Submissions</h3>
            <table border="1" cellPadding="10" width="100%">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Message</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(c => (
                        <tr key={c._id}>
                            <td>{c.name}</td>
                            <td>{c.email}</td>
                            <td>{c.phone || '-'}</td>
                            <td>{c.message}</td>
                            <td>{new Date(c.createdAt).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
