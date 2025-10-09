// import React, { useState } from "react";
// import {
//   Container,
//   Paper,
//   TextField,
//   Button,
//   Box,
//   Typography,
//   Alert,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Switch,
//   FormControlLabel,
//   CardMedia,
//   IconButton,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import axios from "../api/axios";
// import { EditorContent, useEditor } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import Image from "@tiptap/extension-image";
// import TextAlign from "@tiptap/extension-text-align";
// import Underline from "@tiptap/extension-underline";
// import Highlight from "@tiptap/extension-highlight";
// import Placeholder from "@tiptap/extension-placeholder";
// import { IconArrowBack, IconPhoto } from "@tabler/icons-react";

// export default function CreateBlog() {
//   const [formData, setFormData] = useState({
//     title: "",
//     slug: "",
//     category: "",
//     excerpt: "",
//     featuredImage: null,
//     metaDescription: "",
//     tags: "",
//     isPublished: true,
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [imagePreview, setImagePreview] = useState("");

//   const navigate = useNavigate();
//   const token = localStorage.getItem("adminToken");

//   // TipTap Editor
//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       Image.configure({ HTMLAttributes: { class: "blog-image" } }),
//       TextAlign.configure({ types: ["heading", "paragraph"] }),
//       Underline,
//       Highlight.configure({ multicolor: true }),
//       Placeholder.configure({ placeholder: "Start writing your blog..." }),
//     ],
//     content: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, files, checked } = e.target;
//     if (name === "featuredImage") {
//       const file = files[0];
//       setFormData({ ...formData, featuredImage: file });
//       if (file) setImagePreview(URL.createObjectURL(file));
//     } else if (name === "isPublished") {
//       setFormData({ ...formData, [name]: checked });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const generateSlug = (title) =>
//     title
//       .toLowerCase()
//       .replace(/[^a-z0-9 -]/g, "")
//       .replace(/\s+/g, "-")
//       .replace(/-+/g, "-")
//       .trim();

//   const handleTitleChange = (e) => {
//     const title = e.target.value;
//     setFormData({ ...formData, title, slug: generateSlug(title) });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     if (!editor.getHTML() || editor.getHTML() === "<p></p>") {
//       setError("Blog content is required");
//       setLoading(false);
//       return;
//     }

//     try {
//       const data = new FormData();
//       data.append("title", formData.title);
//       data.append("slug", formData.slug);
//       data.append("category", formData.category);
//       data.append("excerpt", formData.excerpt);
//       data.append("content", editor.getHTML());
//       data.append("metaDescription", formData.metaDescription);
//       data.append("tags", formData.tags);
//       data.append("isPublished", formData.isPublished);

//       if (formData.featuredImage) data.append("featuredImage", formData.featuredImage);

//       await axios.post("/api/blogs", data, {
//         headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${token}` },
//       });

//       alert("✅ Blog published successfully!");
//       navigate("/admin/dashboard");
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to create blog.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container maxWidth="lg" sx={{ py: 4 }}>
//       <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
//         <IconButton onClick={() => navigate("/admin/dashboard")} sx={{ mr: 2 }}>
//           <IconArrowBack />
//         </IconButton>
//         <Typography variant="h4" fontWeight="bold">
//           ✍️ Create New Blog Post
//         </Typography>
//       </Box>

//       {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

//       <form onSubmit={handleSubmit}>
//         <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
//           {/* Main content */}
//           <Box sx={{ flex: 2, minWidth: 300 }}>
//             <Paper sx={{ p: 3, mb: 3 }}>
//               <TextField
//                 fullWidth
//                 label="Blog Title"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleTitleChange}
//                 required
//                 sx={{ mb: 3 }}
//               />
//               <TextField
//                 fullWidth
//                 label="Slug"
//                 name="slug"
//                 value={formData.slug}
//                 onChange={handleChange}
//                 required
//                 sx={{ mb: 3 }}
//                 helperText="This will be used in the blog URL"
//               />

//               <Typography variant="h6" gutterBottom>
//                 Content
//               </Typography>
//               <Paper variant="outlined" sx={{ p: 2, minHeight: 300, mb: 3 }}>
//                 <EditorContent editor={editor} />
//               </Paper>
//             </Paper>
//           </Box>

//           {/* Sidebar */}
//           <Box sx={{ flex: 1, minWidth: 250 }}>
//             {/* Publish */}
//             <Paper sx={{ p: 3, mb: 3 }}>
//               <Typography variant="h6" gutterBottom>Publish</Typography>
//               <FormControlLabel
//                 control={
//                   <Switch
//                     checked={formData.isPublished}
//                     onChange={handleChange}
//                     name="isPublished"
//                     color="success"
//                   />
//                 }
//                 label={formData.isPublished ? "Published" : "Draft"}
//                 sx={{ mb: 2 }}
//               />
//               <Box sx={{ display: "flex", gap: 1 }}>
//                 <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: "#FF6600", "&:hover": { backgroundColor: "#e55d00" } }}>
//                   {formData.isPublished ? "Publish" : "Save Draft"}
//                 </Button>
//                 <Button variant="outlined" onClick={() => navigate("/admin/dashboard")}>Cancel</Button>
//               </Box>
//             </Paper>

//             {/* Featured Image */}
//             <Paper sx={{ p: 3, mb: 3 }}>
//               <Typography variant="h6" gutterBottom>Featured Image</Typography>
//               {imagePreview && (
//                 <CardMedia component="img" height="200" image={imagePreview} alt="Preview" sx={{ mb: 2 }} />
//               )}
//               <Button variant="outlined" component="label" fullWidth startIcon={<IconPhoto />}>
//                 Upload Featured Image
//                 <input type="file" name="featuredImage" accept="image/*" onChange={handleChange} hidden />
//               </Button>
//             </Paper>

//             {/* Categories & Tags */}
//             <Paper sx={{ p: 3 }}>
//               <Typography variant="h6" gutterBottom>Categories & Tags</Typography>
//               <FormControl fullWidth sx={{ mb: 2 }}>
//                 <InputLabel>Category</InputLabel>
//                 <Select name="category" value={formData.category} label="Category" onChange={handleChange}>
//                   <MenuItem value="study-abroad">Study Abroad</MenuItem>
//                   <MenuItem value="visa-guide">Visa Guide</MenuItem>
//                   <MenuItem value="scholarships">Scholarships</MenuItem>
//                   <MenuItem value="career-advice">Career Advice</MenuItem>
//                   <MenuItem value="university-guide">University Guide</MenuItem>
//                   <MenuItem value="student-life">Student Life</MenuItem>
//                 </Select>
//               </FormControl>

//               <TextField
//                 fullWidth
//                 label="Tags"
//                 name="tags"
//                 value={formData.tags}
//                 onChange={handleChange}
//                 placeholder="comma, separated, tags"
//                 helperText="Separate tags with commas"
//               />
//             </Paper>
//           </Box>
//         </Box>
//       </form>
//     </Container>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import api from "../api/axios";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await api.get("/api/blogs");
        setBlogs(res.data || []);
      } catch (err) {
        setError("Failed to load blogs.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Typography color="error" align="center" sx={{ mt: 10 }}>
        {error}
      </Typography>
    );

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Helmet>
        <title>Our Blogs | Enrise SkillTech</title>
        <meta
          name="description"
          content="Explore expert blogs on study abroad, visa guides, scholarships, and student life."
        />
      </Helmet>

      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        sx={{
          mb: 6,
          background: "linear-gradient(45deg, #FF6600, #FF8C00)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Latest Blogs
      </Typography>

      <Grid container spacing={4}>
        {blogs.length === 0 ? (
          <Typography align="center" sx={{ width: "100%", mt: 4 }}>
            No blogs available yet.
          </Typography>
        ) : (
          blogs.map((blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog._id}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                }}
              >
                {blog.featuredImage && (
                  <CardMedia
                    component="img"
                    height="200"
                    image={
                      blog.featuredImage.startsWith("http")
                        ? blog.featuredImage
                        : `http://localhost:5000${blog.featuredImage}`
                    }
                    alt={blog.title}
                  />
                )}

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate(`/blogs/${blog.slug}`)}
                  >
                    {blog.title}
                  </Typography>

                  {blog.category && (
                    <Chip
                      label={blog.category}
                      size="small"
                      sx={{ mb: 1, backgroundColor: "#FFF0E0", color: "#FF6600" }}
                    />
                  )}

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {blog.excerpt?.length > 120
                      ? `${blog.excerpt.slice(0, 120)}...`
                      : blog.excerpt}
                  </Typography>

                  {/* Safely render small part of HTML */}
                  <Box
                    sx={{
                      fontSize: "0.9rem",
                      color: "text.secondary",
                      lineHeight: 1.5,
                      mb: 2,
                      overflow: "hidden",
                      maxHeight: 120,
                    }}
                    dangerouslySetInnerHTML={{
                      __html:
                        blog.content?.length > 200
                          ? blog.content.slice(0, 200) + "..."
                          : blog.content,
                    }}
                  />

                  {blog.tags && (
                    <Box sx={{ mb: 2 }}>
                      {blog.tags.split(",").map((tag, i) => (
                        <Chip
                          key={i}
                          label={tag.trim()}
                          size="small"
                          sx={{
                            mr: 1,
                            mb: 1,
                            backgroundColor: "#F5F5F5",
                            color: "#555",
                          }}
                        />
                      ))}
                    </Box>
                  )}

                  <Button
                    variant="contained"
                    onClick={() => navigate(`/blogs/${blog.slug}`)}
                    sx={{
                      backgroundColor: "#FF6600",
                      "&:hover": { backgroundColor: "#e65c00" },
                    }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}



// // import React from 'react';
// import { Box, Container, Typography, Card, CardContent, Grid, Button } from '@mui/material';
// import { Helmet } from 'react-helmet';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// export default function Blogs() {
//   // Placeholder blog data
//   const blogPosts = [
//     {
//       title: 'How to Choose the Right University Abroad',
//       summary: 'Tips and strategies to select the best-fit university for your goals.',
//     },
//     {
//       title: 'Scholarships and Financial Aid Opportunities',
//       summary: 'Discover how to fund your international education with ease.',
//     },
//     {
//       title: 'Visa Application Process Simplified',
//       summary: 'Step-by-step guide to secure your student visa successfully.',
//     },
//   ];

//   return (
//     <>
//       <Helmet>
//         <title>Eminence Advice Blogs</title>
//         <meta
//           name="description"
//           content="Read expert advice on studying abroad, scholarships, visa guidance, and more."
//         />
//       </Helmet>

//       <Box sx={{ py: 10, backgroundColor: '#fff7f0' }}>
//         <Container maxWidth="lg">
//           <Box textAlign="center" mb={6}>
//             <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: '#FF6600' }}>
//               Our Blogs
//             </Typography>
//             <Typography variant="subtitle1" color="textSecondary">
//               Stay updated with the latest tips, guidance, and news for studying abroad
//             </Typography>
//           </Box>

//           <Grid container spacing={5}>
//             {blogPosts.map((post, index) => (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <Card
//                   elevation={6}
//                   sx={{
//                     borderRadius: 3,
//                     height: '100%',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     transition: 'transform 0.3s, box-shadow 0.3s',
//                     '&:hover': {
//                       transform: 'translateY(-10px)',
//                       boxShadow: '0 12px 25px rgba(255, 102, 0, 0.25)',
//                     },
//                   }}
//                 >
//                   <CardContent sx={{ flexGrow: 1 }}>
//                     <Typography
//                       variant="h6"
//                       fontWeight="bold"
//                       gutterBottom
//                       sx={{ color: '#FF6600' }}
//                     >
//                       {post.title}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       {post.summary}
//                     </Typography>
//                   </CardContent>
//                   <Box sx={{ p: 3, textAlign: 'center' }}>
//                     <Button
//                       variant="contained"
//                       endIcon={<ArrowForwardIcon />}
//                       sx={{
//                         backgroundColor: '#FF6600',
//                         color: '#fff',
//                         borderRadius: 3,
//                         px: 4,
//                         py: 1.5,
//                         fontWeight: 'bold',
//                         textTransform: 'none',
//                         transition: '0.3s',
//                         '&:hover': { backgroundColor: '#e55d00', boxShadow: '0 6px 15px rgba(255, 102, 0, 0.3)' },
//                       }}
//                     >
//                       Read More
//                     </Button>
//                   </Box>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>
//     </>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Card,
//   CardContent,
//   Grid,
//   Button,
//   CircularProgress,
//   Alert
// } from '@mui/material';
// import { Helmet } from 'react-helmet';
// import { Link } from 'react-router-dom';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import api from '../api/axios';

// export default function Blogs() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         setLoading(true);
//         const response = await api.get('/api/blogs');
//         setBlogs(response.data);
//         setError('');
//       } catch (err) {
//         setError('Failed to load blogs. Please try again later.');
//         console.error('Error fetching blogs:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   // Format blog content for summary display
//   const formatContent = (content) => {
//     return (content || '').replace(/<[^>]+>/g, '').slice(0, 150) + '...';
//   };

//   if (loading) {
//     return (
//       <Box sx={{
//         py: 10,
//         backgroundColor: '#fff7f0',
//         minHeight: '50vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center'
//       }}>
//         <CircularProgress sx={{ color: '#FF6600' }} />
//       </Box>
//     );
//   }

//   return (
//     <>
//       <Helmet>
//         <title>Eminence Advice Blogs</title>
//         <meta
//           name="description"
//           content="Read expert advice on studying abroad, scholarships, visa guidance, and more."
//         />
//       </Helmet>

//       <Box sx={{ py: 10, backgroundColor: '#fff7f0', minHeight: '100vh' }}>
//         <Container maxWidth="lg">
//           <Box textAlign="center" mb={6}>
//             <Typography
//               variant="h4"
//               fontWeight="bold"
//               gutterBottom
//               sx={{ color: '#FF6600' }}
//             >
//               Our Blogs
//             </Typography>
//             <Typography variant="subtitle1" color="textSecondary">
//               Stay updated with the latest tips, guidance, and news for studying abroad
//             </Typography>
//           </Box>

//           {error && (
//             <Alert severity="error" sx={{ mb: 3 }}>
//               {error}
//             </Alert>
//           )}

//           {blogs.length === 0 && !loading && !error && (
//             <Alert severity="info" sx={{ mb: 3 }}>
//               No blogs available at the moment. Please check back later.
//             </Alert>
//           )}

//           <Grid container spacing={4}>
//             {blogs.map((blog) => (
//               <Grid item xs={12} sm={6} md={4} key={blog._id}>
//                 <Card
//                   elevation={6}
//                   sx={{
//                     borderRadius: 3,
//                     height: '100%',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     transition: 'transform 0.3s, box-shadow 0.3s',
//                     '&:hover': {
//                       transform: 'translateY(-10px)',
//                       boxShadow: '0 12px 25px rgba(255, 102, 0, 0.25)',
//                     },
//                   }}
//                 >
//                   {/* Featured Image */}
//                   {blog.featuredImage && (
//                     <Box
//                       sx={{
//                         height: 200,
//                         overflow: 'hidden',
//                         borderTopLeftRadius: 12,
//                         borderTopRightRadius: 12,
//                       }}
//                     >
//                       <img
//                         src={`${process.env.REACT_APP_API_URL}${blog.featuredImage}`}
//                         alt={blog.title}
//                         style={{
//                           width: '100%',
//                           height: '100%',
//                           objectFit: 'cover',
//                         }}
//                       />
//                     </Box>
//                   )}

//                   <CardContent sx={{ flexGrow: 1, p: 3 }}>
//                     <Typography
//                       variant="h6"
//                       fontWeight="bold"
//                       gutterBottom
//                       sx={{
//                         color: '#FF6600',
//                         display: '-webkit-box',
//                         WebkitLineClamp: 2,
//                         WebkitBoxOrient: 'vertical',
//                         overflow: 'hidden',
//                         minHeight: '64px'
//                       }}
//                     >
//                       {blog.title}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       color="textSecondary"
//                       sx={{
//                         display: '-webkit-box',
//                         WebkitLineClamp: 3,
//                         WebkitBoxOrient: 'vertical',
//                         overflow: 'hidden',
//                         minHeight: '60px'
//                       }}
//                     >
//                       {formatContent(blog.content)}
//                     </Typography>
//                   </CardContent>

//                   <Box sx={{ p: 3, pt: 0, textAlign: 'center' }}>
//                     <Button
//                       component={Link}
//                       to={`/blogs/${blog.slug}`}
//                       variant="contained"
//                       endIcon={<ArrowForwardIcon />}
//                       sx={{
//                         backgroundColor: '#FF6600',
//                         color: '#fff',
//                         borderRadius: 3,
//                         px: 4,
//                         py: 1.5,
//                         fontWeight: 'bold',
//                         textTransform: 'none',
//                         transition: '0.3s',
//                         '&:hover': {
//                           backgroundColor: '#e55d00',
//                           boxShadow: '0 6px 15px rgba(255, 102, 0, 0.3)',
//                           transform: 'translateY(-2px)'
//                         },
//                       }}
//                     >
//                       Read More
//                     </Button>
//                   </Box>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>

//           {/* Fallback placeholder blogs when no data is available */}
//           {blogs.length === 0 && !loading && (
//             <Grid container spacing={4}>
//               {[
//                 {
//                   title: 'How to Choose the Right University Abroad',
//                   summary: 'Tips and strategies to select the best-fit university for your goals.',
//                 },
//                 {
//                   title: 'Scholarships and Financial Aid Opportunities',
//                   summary: 'Discover how to fund your international education with ease.',
//                 },
//                 {
//                   title: 'Visa Application Process Simplified',
//                   summary: 'Step-by-step guide to secure your student visa successfully.',
//                 },
//               ].map((post, index) => (
//                 <Grid item xs={12} sm={6} md={4} key={index}>
//                   <Card
//                     elevation={6}
//                     sx={{
//                       borderRadius: 3,
//                       height: '100%',
//                       display: 'flex',
//                       flexDirection: 'column',
//                       transition: 'transform 0.3s, box-shadow 0.3s',
//                       '&:hover': {
//                         transform: 'translateY(-10px)',
//                         boxShadow: '0 12px 25px rgba(255, 102, 0, 0.25)',
//                       },
//                     }}
//                   >
//                     <CardContent sx={{ flexGrow: 1, p: 3 }}>
//                       <Typography
//                         variant="h6"
//                         fontWeight="bold"
//                         gutterBottom
//                         sx={{ color: '#FF6600' }}
//                       >
//                         {post.title}
//                       </Typography>
//                       <Typography variant="body2" color="textSecondary">
//                         {post.summary}
//                       </Typography>
//                     </CardContent>
//                     <Box sx={{ p: 3, pt: 0, textAlign: 'center' }}>
//                       <Button
//                         variant="contained"
//                         endIcon={<ArrowForwardIcon />}
//                         sx={{
//                           backgroundColor: '#FF6600',
//                           color: '#fff',
//                           borderRadius: 3,
//                           px: 4,
//                           py: 1.5,
//                           fontWeight: 'bold',
//                           textTransform: 'none',
//                           transition: '0.3s',
//                           '&:hover': {
//                             backgroundColor: '#e55d00',
//                             boxShadow: '0 6px 15px rgba(255, 102, 0, 0.3)',
//                             transform: 'translateY(-2px)'
//                           },
//                         }}
//                       >
//                         Read More
//                       </Button>
//                     </Box>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//           )}
//         </Container>
//       </Box>
//     </>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Card,
//   CardContent,
//   Grid,
//   Button,
//   CircularProgress,
//   Alert,
//   Chip,
//   CardActions,
//   CardMedia
// } from '@mui/material';
// import { Helmet } from 'react-helmet';
// import { Link } from 'react-router-dom';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import api from '../api/axios';

// export default function Blogs() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         setLoading(true);
//         const response = await api.get('/api/blogs');
//         // Ensure we always have an array
//         setBlogs(Array.isArray(response.data) ? response.data : response.data.blogs || []);
//         setError('');
//       } catch (err) {
//         setError('Failed to load blogs. Please try again later.');
//         console.error('Error fetching blogs:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   // Safe content formatting for preview
//   const formatContent = (content) => {
//     if (!content) return '';
//     const text = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
//     return text.length > 150 ? text.slice(0, 150) + '...' : text;
//   };

//   // Calculate read time
//   const calculateReadTime = (content) => {
//     if (!content) return '2 min';
//     const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
//     const minutes = Math.ceil(wordCount / 200);
//     return `${minutes} min read`;
//   };

//   if (loading) {
//     return (
//       <Box sx={{
//         py: 10,
//         backgroundColor: '#fff7f0',
//         minHeight: '50vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center'
//       }}>
//         <CircularProgress sx={{ color: '#FF6600' }} />
//       </Box>
//     );
//   }

//   return (
//     <>
//       <Helmet>
//         <title>Eminence Advice Blogs</title>
//         <meta
//           name="description"
//           content="Read expert advice on studying abroad, scholarships, visa guidance, and more."
//         />
//       </Helmet>

//       <Box sx={{ py: 10, backgroundColor: '#fff7f0', minHeight: '100vh' }}>
//         <Container maxWidth="lg">
//           <Box textAlign="center" mb={6}>
//             <Typography
//               variant="h4"
//               fontWeight="bold"
//               gutterBottom
//               sx={{ color: '#FF6600' }}
//             >
//               Our Blogs
//             </Typography>
//             <Typography variant="subtitle1" color="textSecondary">
//               Stay updated with the latest tips, guidance, and news for studying abroad
//             </Typography>
//           </Box>

//           {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

//           {blogs.length === 0 && !loading && !error && (
//             <Alert severity="info" sx={{ mb: 3 }}>
//               No blogs available at the moment. Please check back later.
//             </Alert>
//           )}

//           <Grid container spacing={4}>
//             {blogs.map((blog) => (
//               <Grid item xs={12} sm={6} md={4} key={blog._id}>
//                 <Card
//                   elevation={6}
//                   sx={{
//                     borderRadius: 3,
//                     height: '100%',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     transition: 'transform 0.3s, box-shadow 0.3s',
//                     '&:hover': {
//                       transform: 'translateY(-10px)',
//                       boxShadow: '0 12px 25px rgba(255, 102, 0, 0.25)',
//                     },
//                   }}
//                 >
//                   {/* Featured Image */}
//                   {blog.featuredImage && (
//                     <CardMedia
//                       component="img"
//                       height="200"
//                       image={`${process.env.REACT_APP_API_URL}${blog.featuredImage}`}
//                       alt={blog.title}
//                       sx={{
//                         transition: 'transform 0.3s ease',
//                         '&:hover': { transform: 'scale(1.05)' }
//                       }}
//                     />
//                   )}

//                   <CardContent sx={{ flexGrow: 1, p: 3 }}>
//                     {/* Category Tag */}
//                     {blog.category && (
//                       <Chip
//                         label={blog.category}
//                         size="small"
//                         sx={{
//                           mb: 2,
//                           backgroundColor: '#FF6600',
//                           color: 'white',
//                           fontWeight: 'bold'
//                         }}
//                       />
//                     )}

//                     <Typography
//                       variant="h6"
//                       fontWeight="bold"
//                       gutterBottom
//                       sx={{
//                         color: '#FF6600',
//                         display: '-webkit-box',
//                         WebkitLineClamp: 2,
//                         WebkitBoxOrient: 'vertical',
//                         overflow: 'hidden',
//                         minHeight: '64px'
//                       }}
//                     >
//                       {blog.title}
//                     </Typography>

//                     <Typography
//                       variant="body2"
//                       color="textSecondary"
//                       paragraph
//                       sx={{
//                         display: '-webkit-box',
//                         WebkitLineClamp: 3,
//                         WebkitBoxOrient: 'vertical',
//                         overflow: 'hidden',
//                         minHeight: '60px'
//                       }}
//                     >
//                       {blog.excerpt || formatContent(blog.content)}
//                     </Typography>

//                     {/* Blog Meta Info */}
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                       <Typography variant="caption" color="text.secondary">
//                         {calculateReadTime(blog.content)}
//                       </Typography>
//                       <Typography variant="caption" color="text.secondary">
//                         {new Date(blog.createdAt).toLocaleDateString()}
//                       </Typography>
//                     </Box>
//                   </CardContent>

//                   <CardActions sx={{ p: 2, pt: 0 }}>
//                     <Button
//                       component={Link}
//                       to={`/blogs/${blog.slug}`}
//                       fullWidth
//                       variant="contained"
//                       endIcon={<ArrowForwardIcon />}
//                       sx={{
//                         backgroundColor: '#FF6600',
//                         '&:hover': { backgroundColor: '#e55d00' }
//                       }}
//                     >
//                       Read More
//                     </Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>

//           {/* Fallback placeholder blogs when no data is available */}
//           {blogs.length === 0 && !loading && (
//             <Grid container spacing={4} sx={{ mt: 2 }}>
//               {[
//                 { title: 'How to Choose the Right University Abroad', summary: 'Tips and strategies to select the best-fit university for your goals.' },
//                 { title: 'Scholarships and Financial Aid Opportunities', summary: 'Discover how to fund your international education with ease.' },
//                 { title: 'Visa Application Process Simplified', summary: 'Step-by-step guide to secure your student visa successfully.' },
//               ].map((post, index) => (
//                 <Grid item xs={12} sm={6} md={4} key={index}>
//                   <Card
//                     elevation={6}
//                     sx={{
//                       borderRadius: 3,
//                       height: '100%',
//                       display: 'flex',
//                       flexDirection: 'column',
//                       transition: 'transform 0.3s, box-shadow 0.3s',
//                       '&:hover': {
//                         transform: 'translateY(-10px)',
//                         boxShadow: '0 12px 25px rgba(255, 102, 0, 0.25)',
//                       },
//                     }}
//                   >
//                     <CardContent sx={{ flexGrow: 1, p: 3 }}>
//                       <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#FF6600' }}>
//                         {post.title}
//                       </Typography>
//                       <Typography variant="body2" color="textSecondary">
//                         {post.summary}
//                       </Typography>
//                     </CardContent>
//                     <Box sx={{ p: 3, pt: 0, textAlign: 'center' }}>
//                       <Button
//                         variant="contained"
//                         endIcon={<ArrowForwardIcon />}
//                         sx={{
//                           backgroundColor: '#FF6600',
//                           color: '#fff',
//                           borderRadius: 3,
//                           px: 4,
//                           py: 1.5,
//                           fontWeight: 'bold',
//                           textTransform: 'none',
//                           '&:hover': { backgroundColor: '#e55d00', transform: 'translateY(-2px)' }
//                         }}
//                       >
//                         Read More
//                       </Button>
//                     </Box>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//           )}
//         </Container>
//       </Box>
//     </>
//   );
// }

