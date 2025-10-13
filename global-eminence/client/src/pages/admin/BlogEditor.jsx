// // client/src/pages/admin/BlogEditor.jsx
// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import {
//   Box,
//   Button,
//   TextField,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
//   Chip,
//   Stack,
//   Typography,
//   Paper,
//   Alert,
//   CircularProgress
// } from "@mui/material";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import axios from "../../api/axios";

// export default function BlogEditor() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const token = localStorage.getItem("adminToken");
//   const fileInputRef = useRef();

//   const [title, setTitle] = useState("");
//   const [slug, setSlug] = useState("");
//   const [category, setCategory] = useState("");
//   const [tagsInput, setTagsInput] = useState("");
//   const [tags, setTags] = useState([]);
//   const [content, setContent] = useState("");
//   const [status, setStatus] = useState("draft");
//   const [featuredFile, setFeaturedFile] = useState(null);
//   const [featuredPreview, setFeaturedPreview] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // Auto-generate slug when title changes
//   useEffect(() => {
//     if (!id) {
//       const generatedSlug = title
//         .toLowerCase()
//         .replace(/[^a-z0-9]+/g, "-")
//         .replace(/(^-|-$)+/g, "");
//       setSlug(generatedSlug);
//     }
//   }, [title, id]);

//   // Fetch existing blog if editing
//   useEffect(() => {
//     if (!id) return;

//     const fetchBlog = async () => {
//       try {
//         setLoading(true);
//         const { data } = await axios.get(`/blogs/${id}`); // ✅ REMOVED /api
//         setTitle(data.title || "");
//         setSlug(data.slug || "");
//         setCategory(data.category || "");
//         setTags(data.tags || []);
//         setTagsInput((data.tags || []).join(", "));
//         setContent(data.content || "");
//         setStatus(data.isPublished ? "published" : "draft");

//         // Image preview handle karna
//         if (data.featuredImage) {
//           if (data.featuredImage.startsWith('http')) {
//             setFeaturedPreview(data.featuredImage);
//           } else {
//             setFeaturedPreview(`${axios.defaults.baseURL}${data.featuredImage}`);
//           }
//         }
//       } catch (err) {
//         console.error("fetch blog:", err);
//         setError("Failed to load blog for editing.");
//       } finally {
//         setLoading(false);
//       }
//     };


//     fetchBlog();
//   }, [id]);

//   // Handle featured image selection
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     // File validation
//     if (!file.type.startsWith('image/')) {
//       setError('Please select a valid image file');
//       return;
//     }

//     if (file.size > 10 * 1024 * 1024) {
//       setError('Image size should be less than 10MB');
//       return;
//     }

//     setFeaturedFile(file);
//     setFeaturedPreview(URL.createObjectURL(file));
//     setError("");
//   };

//   // Apply tags from input
//   const applyTags = () => {
//     const tagArray = tagsInput
//       .split(",")
//       .map((t) => t.trim())
//       .filter(Boolean);
//     setTags(tagArray);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     setLoading(true);

//     // Validation
//     if (!title.trim() || !slug.trim() || !content.trim()) {
//       setError("Title, slug, and content are required");
//       setLoading(false);
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("slug", slug);
//       formData.append("category", category);
//       formData.append("tags", JSON.stringify(tags));
//       formData.append("content", content);
//       formData.append("isPublished", status === "published");
//       if (featuredFile) formData.append("featuredImage", featuredFile);

//       if (id) {
//         await axios.put(`/blogs/${id}`, formData, {  // ✅ REMOVED /api
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         });
//         setSuccess("Blog updated successfully!");
//       } else {
//         await axios.post("/blogs", formData, {  // ✅ REMOVED /api
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         });
//         setSuccess("Blog created successfully!");
//       }

//       // Redirect after success
//       setTimeout(() => {
//         navigate("/admin/dashboard");
//       }, 2000);

//     } catch (err) {
//       console.error("Save error:", err);
//       const errorMessage = err.response?.data?.message || "Failed to save blog.";
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading && id) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ maxWidth: 1000, m: "40px auto", px: 2 }}>
//       <Paper sx={{ p: 3 }}>
//         <Typography variant="h5" mb={2}>
//           {id ? "Edit Blog" : "Create New Blog"}
//         </Typography>

//         {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
//         {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             fullWidth
//             required
//             sx={{ mb: 2 }}
//           />

//           <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 2 }}>
//             <TextField
//               label="Slug (URL friendly)"
//               value={slug}
//               onChange={(e) => setSlug(e.target.value)}
//               fullWidth
//               required
//             />

//             <TextField
//               label="Category"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               fullWidth
//               select
//             >
//               <MenuItem value="study-abroad">Study Abroad</MenuItem>
//               <MenuItem value="visa-guide">Visa Guide</MenuItem>
//               <MenuItem value="scholarships">Scholarships</MenuItem>
//               <MenuItem value="career-advice">Career Advice</MenuItem>
//               <MenuItem value="university-guide">University Guide</MenuItem>
//               <MenuItem value="student-life">Student Life</MenuItem>
//             </TextField>
//           </Stack>

//           <Stack direction="row" spacing={2} sx={{ mb: 2 }} alignItems="center">
//             <TextField
//               label="Tags (comma separated)"
//               value={tagsInput}
//               onChange={(e) => setTagsInput(e.target.value)}
//               onBlur={applyTags}
//               fullWidth
//               placeholder="study, abroad, visa"
//             />
//             <Button variant="outlined" onClick={applyTags}>
//               Apply
//             </Button>
//           </Stack>

//           {tags.length > 0 && (
//             <Box sx={{ mb: 2 }}>
//               <Typography variant="subtitle2">Applied Tags</Typography>
//               <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap', gap: 1 }}>
//                 {tags.map((t, index) => (
//                   <Chip
//                     key={index}
//                     label={t}
//                     onDelete={() => {
//                       const newTags = tags.filter((_, i) => i !== index);
//                       setTags(newTags);
//                     }}
//                   />
//                 ))}
//               </Stack>
//             </Box>
//           )}

//           <Box sx={{ mb: 2 }}>
//             <InputLabel sx={{ mb: 1 }}>Content *</InputLabel>
//             <ReactQuill
//               value={content}
//               onChange={setContent}
//               style={{ minHeight: 300, marginBottom: 50 }}
//               modules={{
//                 toolbar: [
//                   [{ 'header': [1, 2, 3, false] }],
//                   ['bold', 'italic', 'underline', 'strike'],
//                   [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//                   ['link', 'image'],
//                   ['clean']
//                 ]
//               }}
//             />
//           </Box>

//           <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 2 }}>
//             <FormControl sx={{ minWidth: 160 }}>
//               <InputLabel>Status</InputLabel>
//               <Select value={status} onChange={(e) => setStatus(e.target.value)} label="Status">
//                 <MenuItem value="draft">Draft</MenuItem>
//                 <MenuItem value="published">Published</MenuItem>
//               </Select>
//             </FormControl>

//             <Box sx={{ flex: 1 }}>
//               <Button
//                 variant="contained"
//                 component="label"
//                 sx={{ mr: 2 }}
//               >
//                 Upload Featured Image
//                 <input
//                   ref={fileInputRef}
//                   type="file"
//                   accept="image/*"
//                   hidden
//                   onChange={handleFileChange}
//                 />
//               </Button>

//               {featuredPreview && (
//                 <Box
//                   component="img"
//                   src={featuredPreview}
//                   alt="preview"
//                   sx={{
//                     display: "block",
//                     mt: 1,
//                     maxWidth: 240,
//                     maxHeight: 160,
//                     borderRadius: 2,
//                     objectFit: 'cover'
//                   }}
//                 />
//               )}
//             </Box>
//           </Stack>

//           <Box sx={{ display: "flex", gap: 2 }}>
//             <Button
//               type="submit"
//               variant="contained"
//               disabled={loading}
//               sx={{ backgroundColor: "#FF6600", "&:hover": { backgroundColor: "#e55d00" } }}
//             >
//               {loading ? "Saving..." : (id ? "Update Blog" : "Create Blog")}
//             </Button>

//             <Button variant="outlined" onClick={() => navigate("/admin/dashboard")}>
//               Cancel
//             </Button>
//           </Box>
//         </form>
//       </Paper>
//     </Box>
//   );
// }



// // client/src/pages/admin/BlogEditor.jsx (Updated version)
// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import {
//   Box,
//   Button,
//   TextField,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
//   Chip,
//   Stack,
//   Typography,
//   Paper,
//   Alert,
//   CircularProgress
// } from "@mui/material";
// import ReactQuill from 'react-quill-new';
// import 'react-quill-new/dist/quill.snow.css';
// import axios from "../../api/axios";

// export default function BlogEditor() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const token = localStorage.getItem("adminToken");
//   const fileInputRef = useRef();

//   const [title, setTitle] = useState("");
//   const [slug, setSlug] = useState("");
//   const [category, setCategory] = useState("");
//   const [tagsInput, setTagsInput] = useState("");
//   const [tags, setTags] = useState([]);
//   const [content, setContent] = useState("");
//   const [status, setStatus] = useState("draft");
//   const [featuredFile, setFeaturedFile] = useState(null);
//   const [featuredPreview, setFeaturedPreview] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // Auto-generate slug when title changes
//   useEffect(() => {
//     if (!id) {
//       const generatedSlug = title
//         .toLowerCase()
//         .replace(/[^a-z0-9]+/g, "-")
//         .replace(/(^-|-$)+/g, "");
//       setSlug(generatedSlug);
//     }
//   }, [title, id]);

//   // Fetch existing blog if editing
//   useEffect(() => {
//     if (!id) return;

//     const fetchBlog = async () => {
//       try {
//         setLoading(true);
//         // ✅ FIXED: Removed /api prefix
//         const { data } = await axios.get(`/blogs/${slug}`);
//         setTitle(data.title || "");
//         setSlug(data.slug || "");
//         setCategory(data.category || "");
//         setTags(data.tags || []);
//         setTagsInput((data.tags || []).join(", "));
//         setContent(data.content || "");
//         setStatus(data.isPublished ? "published" : "draft");

//         // Image preview handle karna
//         if (data.featuredImage) {
//           if (data.featuredImage.startsWith('http')) {
//             setFeaturedPreview(data.featuredImage);
//           } else {
//             setFeaturedPreview(`${axios.defaults.baseURL}${data.featuredImage}`);
//           }
//         }
//       } catch (err) {
//         console.error("fetch blog:", err);
//         setError("Failed to load blog for editing.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlog();
//   }, [id]);

//   // Handle featured image selection
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     // File validation
//     if (!file.type.startsWith('image/')) {
//       setError('Please select a valid image file');
//       return;
//     }

//     if (file.size > 10 * 1024 * 1024) {
//       setError('Image size should be less than 10MB');
//       return;
//     }

//     setFeaturedFile(file);
//     setFeaturedPreview(URL.createObjectURL(file));
//     setError("");
//   };

//   // Apply tags from input
//   const applyTags = () => {
//     const tagArray = tagsInput
//       .split(",")
//       .map((t) => t.trim())
//       .filter(Boolean);
//     setTags(tagArray);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     setLoading(true);

//     // Validation
//     if (!title.trim() || !slug.trim() || !content.trim()) {
//       setError("Title, slug, and content are required");
//       setLoading(false);
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("slug", slug);
//       formData.append("category", category);
//       formData.append("tags", JSON.stringify(tags));
//       formData.append("content", content);
//       formData.append("isPublished", status === "published");
//       if (featuredFile) formData.append("featuredImage", featuredFile);

//       console.log('Sending blog data to:', id ? `/blogs/${id}` : '/blogs');

//       if (id) {
//         // ✅ FIXED: Removed /api prefix
//         await axios.put(`/blogs/${id}`, formData, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         });
//         setSuccess("Blog updated successfully!");
//       } else {
//         // ✅ FIXED: Removed /api prefix
//         await axios.post("/blogs", formData, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         });
//         setSuccess("Blog created successfully!");
//       }

//       // Redirect after success
//       setTimeout(() => {
//         navigate("/admin/dashboard");
//       }, 2000);

//     } catch (err) {
//       console.error("Save error:", err);
//       const errorMessage = err.response?.data?.message || "Failed to save blog.";
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading && id) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ maxWidth: 1000, m: "40px auto", px: 2 }}>
//       <Paper sx={{ p: 3 }}>
//         <Typography variant="h5" mb={2}>
//           {id ? "Edit Blog" : "Create New Blog"}
//         </Typography>

//         {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
//         {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             fullWidth
//             required
//             sx={{ mb: 2 }}
//           />

//           <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 2 }}>
//             <TextField
//               label="Slug (URL friendly)"
//               value={slug}
//               onChange={(e) => setSlug(e.target.value)}
//               fullWidth
//               required
//             />

//             <TextField
//               label="Category"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               fullWidth
//               select
//             >
//               <MenuItem value="study-abroad">Study Abroad</MenuItem>
//               <MenuItem value="visa-guide">Visa Guide</MenuItem>
//               <MenuItem value="scholarships">Scholarships</MenuItem>
//               <MenuItem value="career-advice">Career Advice</MenuItem>
//               <MenuItem value="university-guide">University Guide</MenuItem>
//               <MenuItem value="student-life">Student Life</MenuItem>
//             </TextField>
//           </Stack>

//           <Stack direction="row" spacing={2} sx={{ mb: 2 }} alignItems="center">
//             <TextField
//               label="Tags (comma separated)"
//               value={tagsInput}
//               onChange={(e) => setTagsInput(e.target.value)}
//               onBlur={applyTags}
//               fullWidth
//               placeholder="study, abroad, visa"
//             />
//             <Button variant="outlined" onClick={applyTags}>
//               Apply
//             </Button>
//           </Stack>

//           {tags.length > 0 && (
//             <Box sx={{ mb: 2 }}>
//               <Typography variant="subtitle2">Applied Tags</Typography>
//               <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap', gap: 1 }}>
//                 {tags.map((t, index) => (
//                   <Chip
//                     key={index}
//                     label={t}
//                     onDelete={() => {
//                       const newTags = tags.filter((_, i) => i !== index);
//                       setTags(newTags);
//                     }}
//                   />
//                 ))}
//               </Stack>
//             </Box>
//           )}

//           <Box sx={{ mb: 2 }}>
//             <InputLabel sx={{ mb: 1 }}>Content *</InputLabel>
//             <ReactQuill
//               value={content}
//               onChange={setContent}
//               style={{ minHeight: 300, marginBottom: 50 }}
//               modules={{
//                 toolbar: [
//                   [{ 'header': [1, 2, 3, false] }],
//                   ['bold', 'italic', 'underline', 'strike'],
//                   [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//                   ['link', 'image'],
//                   ['clean']
//                 ]
//               }}
//             />
//           </Box>

//           <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 2 }}>
//             <FormControl sx={{ minWidth: 160 }}>
//               <InputLabel>Status</InputLabel>
//               <Select value={status} onChange={(e) => setStatus(e.target.value)} label="Status">
//                 <MenuItem value="draft">Draft</MenuItem>
//                 <MenuItem value="published">Published</MenuItem>
//               </Select>
//             </FormControl>

//             <Box sx={{ flex: 1 }}>
//               <Button
//                 variant="contained"
//                 component="label"
//                 sx={{ mr: 2 }}
//               >
//                 Upload Featured Image
//                 <input
//                   ref={fileInputRef}
//                   type="file"
//                   accept="image/*"
//                   hidden
//                   onChange={handleFileChange}
//                 />
//               </Button>

//               {featuredPreview && (
//                 <Box
//                   component="img"
//                   src={featuredPreview}
//                   alt="preview"
//                   sx={{
//                     display: "block",
//                     mt: 1,
//                     maxWidth: 240,
//                     maxHeight: 160,
//                     borderRadius: 2,
//                     objectFit: 'cover'
//                   }}
//                 />
//               )}
//             </Box>
//           </Stack>

//           <Box sx={{ display: "flex", gap: 2 }}>
//             <Button
//               type="submit"
//               variant="contained"
//               disabled={loading}
//               sx={{ backgroundColor: "#FF6600", "&:hover": { backgroundColor: "#e55d00" } }}
//             >
//               {loading ? "Saving..." : (id ? "Update Blog" : "Create Blog")}
//             </Button>

//             <Button variant="outlined" onClick={() => navigate("/admin/dashboard")}>
//               Cancel
//             </Button>
//           </Box>
//         </form>
//       </Paper>
//     </Box>
//   );
// }



// // client/src/pages/admin/BlogEditor.jsx
// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import {
//   Box,
//   Button,
//   TextField,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
//   Chip,
//   Stack,
//   Typography,
//   Paper,
//   Alert,
//   CircularProgress
// } from "@mui/material";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import axios from "../../api/axios";

// export default function BlogEditor() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const token = localStorage.getItem("adminToken");
//   const fileInputRef = useRef();

//   const [title, setTitle] = useState("");
//   const [slug, setSlug] = useState("");
//   const [category, setCategory] = useState("study-abroad");
//   const [tagsInput, setTagsInput] = useState("");
//   const [tags, setTags] = useState([]);
//   const [content, setContent] = useState("");
//   const [status, setStatus] = useState("draft");
//   const [featuredFile, setFeaturedFile] = useState(null);
//   const [featuredPreview, setFeaturedPreview] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // Auto-generate slug when title changes
//   useEffect(() => {
//     if (!id && title) {
//       const generatedSlug = title
//         .toLowerCase()
//         .replace(/[^a-z0-9]+/g, "-")
//         .replace(/(^-|-$)+/g, "");
//       setSlug(generatedSlug);
//     }
//   }, [title, id]);

//   // Fetch existing blog if editing
//   useEffect(() => {
//     if (!id) return;

//     const fetchBlog = async () => {
//       try {
//         setLoading(true);
//         // ✅ FIXED: Use ID endpoint for editing
//         const { data } = await axios.get(`/blogs/id/${id}`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });

//         setTitle(data.title || "");
//         setSlug(data.slug || "");
//         setCategory(data.category || "study-abroad");
//         setTags(data.tags || []);
//         setTagsInput((data.tags || []).join(", "));
//         setContent(data.content || "");
//         setStatus(data.status || "draft");

//         // Image preview
//         if (data.featuredImage) {
//           if (data.featuredImage.startsWith('http')) {
//             setFeaturedPreview(data.featuredImage);
//           } else {
//             setFeaturedPreview(`http://localhost:5000${data.featuredImage}`);
//           }
//         }
//       } catch (err) {
//         console.error("Fetch blog error:", err);
//         setError("Failed to load blog for editing.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlog();
//   }, [id, token]);

//   // Handle featured image selection
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     // File validation
//     if (!file.type.startsWith('image/')) {
//       setError('Please select a valid image file (JPEG, PNG, etc.)');
//       return;
//     }

//     if (file.size > 10 * 1024 * 1024) {
//       setError('Image size should be less than 10MB');
//       return;
//     }

//     setFeaturedFile(file);
//     setFeaturedPreview(URL.createObjectURL(file));
//     setError("");
//   };

//   // Apply tags from input
//   const applyTags = () => {
//     const tagArray = tagsInput
//       .split(",")
//       .map((t) => t.trim())
//       .filter(Boolean);
//     setTags(tagArray);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     setLoading(true);

//     // Validation
//     if (!title.trim() || !slug.trim() || !content.trim()) {
//       setError("Title, slug, and content are required");
//       setLoading(false);
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("slug", slug);
//       formData.append("category", category);
//       formData.append("tags", JSON.stringify(tags));
//       formData.append("content", content);
//       formData.append("isPublished", status === "published");

//       if (featuredFile) {
//         formData.append("featuredImage", featuredFile);
//       }

//       console.log('Sending blog data...', {
//         title, slug, category, tags, status,
//         hasImage: !!featuredFile
//       });

//       let response;
//       if (id) {
//         // ✅ FIXED: Update blog by ID
//         response = await axios.put(`/blogs/${id}`, formData, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         });
//         setSuccess("Blog updated successfully!");
//       } else {
//         // ✅ FIXED: Create new blog
//         response = await axios.post("/blogs", formData, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         });
//         setSuccess("Blog created successfully!");
//       }

//       console.log('Blog saved successfully:', response.data);

//       // Redirect after success
//       setTimeout(() => {
//         navigate("/admin/dashboard");
//       }, 2000);

//     } catch (err) {
//       console.error("Save error details:", err);
//       const errorMessage = err.response?.data?.message ||
//         err.message ||
//         "Failed to save blog. Please try again.";
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading && id) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
//         <CircularProgress />
//         <Typography sx={{ ml: 2 }}>Loading blog...</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ maxWidth: 1000, m: "40px auto", px: 2 }}>
//       <Paper sx={{ p: 3 }}>
//         <Typography variant="h5" mb={2}>
//           {id ? "Edit Blog" : "Create New Blog"}
//         </Typography>

//         {error && (
//           <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError("")}>
//             {error}
//           </Alert>
//         )}
//         {success && (
//           <Alert severity="success" sx={{ mb: 2 }} onClose={() => setSuccess("")}>
//             {success}
//           </Alert>
//         )}

//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="Title *"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             fullWidth
//             required
//             sx={{ mb: 2 }}
//             placeholder="Enter blog title"
//           />

//           <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 2 }}>
//             <TextField
//               label="Slug (URL friendly) *"
//               value={slug}
//               onChange={(e) => setSlug(e.target.value)}
//               fullWidth
//               required
//               placeholder="url-friendly-slug"
//             />

//             <TextField
//               label="Category"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               fullWidth
//               select
//             >
//               <MenuItem value="study-abroad">Study Abroad</MenuItem>
//               <MenuItem value="visa-guide">Visa Guide</MenuItem>
//               <MenuItem value="scholarships">Scholarships</MenuItem>
//               <MenuItem value="career-advice">Career Advice</MenuItem>
//               <MenuItem value="university-guide">University Guide</MenuItem>
//               <MenuItem value="student-life">Student Life</MenuItem>
//             </TextField>
//           </Stack>

//           <Stack direction="row" spacing={2} sx={{ mb: 2 }} alignItems="center">
//             <TextField
//               label="Tags (comma separated)"
//               value={tagsInput}
//               onChange={(e) => setTagsInput(e.target.value)}
//               onBlur={applyTags}
//               fullWidth
//               placeholder="study, abroad, visa, education"
//               helperText="Press Apply or click outside to save tags"
//             />
//             <Button variant="outlined" onClick={applyTags}>
//               Apply
//             </Button>
//           </Stack>

//           {tags.length > 0 && (
//             <Box sx={{ mb: 2 }}>
//               <Typography variant="subtitle2" gutterBottom>
//                 Applied Tags ({tags.length})
//               </Typography>
//               <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
//                 {tags.map((tag, index) => (
//                   <Chip
//                     key={index}
//                     label={tag}
//                     onDelete={() => {
//                       const newTags = tags.filter((_, i) => i !== index);
//                       setTags(newTags);
//                     }}
//                     color="primary"
//                     variant="outlined"
//                   />
//                 ))}
//               </Stack>
//             </Box>
//           )}

//           <Box sx={{ mb: 2 }}>
//             <InputLabel sx={{ mb: 1 }}>Content *</InputLabel>
//             <ReactQuill
//               value={content}
//               onChange={setContent}
//               style={{ minHeight: 300, marginBottom: 50 }}
//               modules={{
//                 toolbar: [
//                   [{ 'header': [1, 2, 3, false] }],
//                   ['bold', 'italic', 'underline', 'strike'],
//                   [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//                   ['link', 'image'],
//                   ['clean']
//                 ]
//               }}
//               placeholder="Write your blog content here..."
//             />
//           </Box>

//           <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 2 }}>
//             <FormControl sx={{ minWidth: 160 }}>
//               <InputLabel>Status</InputLabel>
//               <Select
//                 value={status}
//                 onChange={(e) => setStatus(e.target.value)}
//                 label="Status"
//               >
//                 <MenuItem value="draft">Draft</MenuItem>
//                 <MenuItem value="published">Published</MenuItem>
//               </Select>
//             </FormControl>

//             <Box sx={{ flex: 1 }}>
//               <Button
//                 variant="contained"
//                 component="label"
//                 sx={{ mr: 2 }}
//               >
//                 Upload Featured Image
//                 <input
//                   ref={fileInputRef}
//                   type="file"
//                   accept="image/*"
//                   hidden
//                   onChange={handleFileChange}
//                 />
//               </Button>

//               {featuredPreview && (
//                 <Box sx={{ mt: 1 }}>
//                   <Typography variant="body2" color="textSecondary">
//                     Image Preview:
//                   </Typography>
//                   <Box
//                     component="img"
//                     src={featuredPreview}
//                     alt="preview"
//                     sx={{
//                       display: "block",
//                       mt: 1,
//                       maxWidth: 240,
//                       maxHeight: 160,
//                       borderRadius: 2,
//                       objectFit: 'cover',
//                       border: '1px solid #ddd'
//                     }}
//                   />
//                 </Box>
//               )}
//             </Box>
//           </Stack>

//           <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
//             <Button
//               type="submit"
//               variant="contained"
//               disabled={loading}
//               sx={{
//                 backgroundColor: "#FF6600",
//                 "&:hover": { backgroundColor: "#e55d00" },
//                 minWidth: 120
//               }}
//             >
//               {loading ? (
//                 <CircularProgress size={24} color="inherit" />
//               ) : (
//                 id ? "Update Blog" : "Create Blog"
//               )}
//             </Button>

//             <Button
//               variant="outlined"
//               onClick={() => navigate("/admin/dashboard")}
//               disabled={loading}
//             >
//               Cancel
//             </Button>
//           </Box>
//         </form>
//       </Paper>
//     </Box>
//   );
// }

// client/src/pages/admin/BlogEditor.jsx (Simplified version)
// client/src/pages/admin/BlogEditor.jsx
// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import {
//   Box,
//   Button,
//   TextField,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
//   Chip,
//   Stack,
//   Typography,
//   Paper,
//   Alert,
//   CircularProgress
// } from "@mui/material";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import axios from "../../api/axios";

// export default function BlogEditor() {
//   const { id } = useParams(); // This should be blog ID, not slug
//   const navigate = useNavigate();
//   const token = localStorage.getItem("adminToken");
//   const fileInputRef = useRef();

//   const [title, setTitle] = useState("");
//   const [slug, setSlug] = useState("");
//   const [category, setCategory] = useState("study-abroad");
//   const [tagsInput, setTagsInput] = useState("");
//   const [tags, setTags] = useState([]);
//   const [content, setContent] = useState("");
//   const [status, setStatus] = useState("draft");
//   const [featuredFile, setFeaturedFile] = useState(null);
//   const [featuredPreview, setFeaturedPreview] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // Auto-generate slug when title changes
//   useEffect(() => {
//     if (!id && title) {
//       const generatedSlug = title
//         .toLowerCase()
//         .replace(/[^a-z0-9]+/g, "-")
//         .replace(/(^-|-$)+/g, "");
//       setSlug(generatedSlug);
//     }
//   }, [title, id]);

//   // Fetch existing blog if editing
//   useEffect(() => {
//     if (!id) return;

//     const fetchBlog = async () => {
//       try {
//         setLoading(true);
//         console.log("🔄 Fetching blog with ID:", id);
//         console.log("📡 API URL:", `/blogs/${id}`);

//         const { data } = await axios.get(`/blogs/${id}`);
//         console.log("✅ Blog data received:", data);

//         if (!data) {
//           console.error("❌ No data received from API");
//           setError("No blog data found");
//           return;
//         }

//         setTitle(data.title || "");
//         setSlug(data.slug || "");
//         setCategory(data.category || "study-abroad");
//         setTags(data.tags || []);
//         setTagsInput((data.tags || []).join(", "));
//         setContent(data.content || "");
//         setStatus(data.status || (data.isPublished ? "published" : "draft"));

//         console.log("📷 Featured Image:", data.featuredImage);
//         if (data.featuredImage) {
//           const imageUrl = data.featuredImage.startsWith('http')
//             ? data.featuredImage
//             : `http://localhost:5000${data.featuredImage}`;
//           console.log("🖼️ Setting image URL:", imageUrl);
//           setFeaturedPreview(imageUrl);
//         }

//       } catch (err) {
//         console.error("❌ Fetch blog error:", err);
//         console.error("❌ Error response:", err.response);
//         setError("Failed to load blog: " + (err.response?.data?.message || err.message));
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlog();
//   }, [id]);

//   // Handle featured image selection
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     // File validation
//     if (!file.type.startsWith('image/')) {
//       setError('Please select a valid image file (JPEG, PNG, etc.)');
//       return;
//     }

//     if (file.size > 10 * 1024 * 1024) {
//       setError('Image size should be less than 10MB');
//       return;
//     }

//     setFeaturedFile(file);
//     setFeaturedPreview(URL.createObjectURL(file));
//     setError("");
//   };

//   // Apply tags from input
//   const applyTags = () => {
//     const tagArray = tagsInput
//       .split(",")
//       .map((t) => t.trim())
//       .filter(Boolean);
//     setTags(tagArray);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     setLoading(true);

//     // Validation
//     if (!title.trim() || !slug.trim() || !content.trim()) {
//       setError("Title, slug, and content are required");
//       setLoading(false);
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("slug", slug);
//       formData.append("category", category);
//       formData.append("tags", JSON.stringify(tags));
//       formData.append("content", content);
//       formData.append("status", status);
//       formData.append("isPublished", status === "published");

//       if (featuredFile) {
//         formData.append("featuredImage", featuredFile);
//       }

//       console.log('Sending blog data...', {
//         id,
//         title,
//         slug,
//         category,
//         tags,
//         status
//       });

//       let response;
//       if (id) {
//         // ✅ FIXED: Update existing blog
//         response = await axios.put(`/blogs/${id}`, formData, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         });
//         setSuccess("Blog updated successfully!");
//       } else {
//         // ✅ FIXED: Create new blog
//         response = await axios.post("/blogs", formData, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         });
//         setSuccess("Blog created successfully!");
//       }

//       console.log("Blog save response:", response.data);

//       // Redirect after success
//       setTimeout(() => {
//         navigate("/admin/dashboard");
//       }, 2000);

//     } catch (err) {
//       console.error("Save error details:", err);
//       const errorMessage = err.response?.data?.message ||
//         err.response?.data?.error ||
//         "Failed to save blog. Please try again.";
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading && id) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
//         <CircularProgress />
//         <Typography sx={{ ml: 2 }}>Loading blog...</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ maxWidth: 1000, m: "40px auto", px: 2 }}>
//       <Paper sx={{ p: 3 }}>
//         <Typography variant="h5" mb={2}>
//           {id ? "Edit Blog" : "Create New Blog"}
//         </Typography>

//         {error && (
//           <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError("")}>
//             {error}
//           </Alert>
//         )}
//         {success && (
//           <Alert severity="success" sx={{ mb: 2 }} onClose={() => setSuccess("")}>
//             {success}
//           </Alert>
//         )}

//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="Blog Title *"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             fullWidth
//             required
//             sx={{ mb: 2 }}
//             placeholder="Enter blog title"
//           />

//           <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 2 }}>
//             <TextField
//               label="Slug (URL friendly) *"
//               value={slug}
//               onChange={(e) => setSlug(e.target.value)}
//               fullWidth
//               required
//               placeholder="url-friendly-slug"
//               helperText="This will be used in the blog URL"
//             />

//             <TextField
//               label="Category *"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               fullWidth
//               select
//               required
//             >
//               <MenuItem value="study-abroad">Study Abroad</MenuItem>
//               <MenuItem value="visa-guide">Visa Guide</MenuItem>
//               <MenuItem value="scholarships">Scholarships</MenuItem>
//               <MenuItem value="career-advice">Career Advice</MenuItem>
//               <MenuItem value="university-guide">University Guide</MenuItem>
//               <MenuItem value="student-life">Student Life</MenuItem>
//             </TextField>
//           </Stack>

//           <Stack direction="row" spacing={2} sx={{ mb: 2 }} alignItems="flex-end">
//             <TextField
//               label="Tags (comma separated)"
//               value={tagsInput}
//               onChange={(e) => setTagsInput(e.target.value)}
//               onBlur={applyTags}
//               fullWidth
//               placeholder="study, abroad, visa, education"
//               helperText="Press Apply or click outside to add tags"
//             />
//             <Button variant="outlined" onClick={applyTags} sx={{ minWidth: 100 }}>
//               Apply Tags
//             </Button>
//           </Stack>

//           {tags.length > 0 && (
//             <Box sx={{ mb: 2 }}>
//               <Typography variant="subtitle2" gutterBottom>
//                 Applied Tags ({tags.length})
//               </Typography>
//               <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
//                 {tags.map((tag, index) => (
//                   <Chip
//                     key={index}
//                     label={tag}
//                     onDelete={() => {
//                       const newTags = tags.filter((_, i) => i !== index);
//                       setTags(newTags);
//                     }}
//                     color="primary"
//                     variant="outlined"
//                   />
//                 ))}
//               </Stack>
//             </Box>
//           )}

//           <Box sx={{ mb: 3 }}>
//             <InputLabel sx={{ mb: 1, fontWeight: 'bold' }}>Content *</InputLabel>
//             <ReactQuill
//               value={content}
//               onChange={setContent}
//               style={{
//                 minHeight: 300,
//                 marginBottom: 50,
//                 borderRadius: '4px'
//               }}
//               modules={{
//                 toolbar: [
//                   [{ 'header': [1, 2, 3, false] }],
//                   ['bold', 'italic', 'underline', 'strike'],
//                   [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//                   ['link', 'image'],
//                   ['blockquote', 'code-block'],
//                   ['clean']
//                 ]
//               }}
//               formats={[
//                 'header', 'bold', 'italic', 'underline', 'strike',
//                 'list', 'bullet', 'link', 'image', 'blockquote', 'code-block'
//               ]}
//             />
//           </Box>

//           <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 3 }}>
//             <FormControl sx={{ minWidth: 160 }}>
//               <InputLabel>Status *</InputLabel>
//               <Select
//                 value={status}
//                 onChange={(e) => setStatus(e.target.value)}
//                 label="Status *"
//               >
//                 <MenuItem value="draft">Draft</MenuItem>
//                 <MenuItem value="published">Published</MenuItem>
//               </Select>
//             </FormControl>

//             <Box sx={{ flex: 1 }}>
//               <Button
//                 variant="outlined"
//                 component="label"
//                 sx={{ mr: 2 }}
//               >
//                 {featuredFile ? "Change Image" : "Upload Featured Image"}
//                 <input
//                   ref={fileInputRef}
//                   type="file"
//                   accept="image/*"
//                   hidden
//                   onChange={handleFileChange}
//                 />
//               </Button>

//               {featuredPreview && (
//                 <Box sx={{ mt: 1 }}>
//                   <Typography variant="caption" display="block" gutterBottom>
//                     Image Preview:
//                   </Typography>
//                   <Box
//                     component="img"
//                     src={featuredPreview}
//                     alt="Featured preview"
//                     sx={{
//                       display: "block",
//                       maxWidth: 240,
//                       maxHeight: 160,
//                       borderRadius: 2,
//                       objectFit: 'cover',
//                       border: '1px solid #ddd'
//                     }}
//                   />
//                 </Box>
//               )}
//             </Box>
//           </Stack>

//           <Box sx={{ display: "flex", gap: 2, justifyContent: 'flex-end' }}>
//             <Button
//               variant="outlined"
//               onClick={() => navigate("/admin/dashboard")}
//               disabled={loading}
//             >
//               Cancel
//             </Button>
//             <Button
//               type="submit"
//               variant="contained"
//               disabled={loading}
//               sx={{
//                 backgroundColor: "#FF6600",
//                 "&:hover": { backgroundColor: "#e55d00" },
//                 minWidth: 120
//               }}
//             >
//               {loading ? (
//                 <CircularProgress size={24} color="inherit" />
//               ) : id ? (
//                 "Update Blog"
//               ) : (
//                 "Create Blog"
//               )}
//             </Button>
//           </Box>
//         </form>
//       </Paper>
//     </Box>
//   );
// }



// client/src/pages/admin/BlogEditor.jsx - UPDATED
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Chip,
  Stack,
  Typography,
  Paper,
  Alert,
  CircularProgress
} from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "../../api/axios";

export default function BlogEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("study-abroad");
  const [tagsInput, setTagsInput] = useState("");
  const [tags, setTags] = useState([]);
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("draft");
  const [featuredFile, setFeaturedFile] = useState(null);
  const [featuredPreview, setFeaturedPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ✅ Get token with validation
  const getToken = () => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      setError("Authentication required. Please login again.");
      setTimeout(() => navigate('/admin/login'), 2000);
      return null;
    }
    return token;
  };

  // Auto-generate slug when title changes
  useEffect(() => {
    if (!id && title) {
      const generatedSlug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      setSlug(generatedSlug);
    }
  }, [title, id]);

  // Fetch existing blog if editing
  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        setLoading(true);
        console.log("🔍 Fetching blog with ID:", id);
        
        const token = getToken();
        if (!token) return;

        const { data } = await axios.get(`/blogs/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        console.log("✅ Blog data received:", data);
        setTitle(data.title || "");
        setSlug(data.slug || "");
        setCategory(data.category || "study-abroad");
        setTags(data.tags || []);
        setTagsInput((data.tags || []).join(", "));
        setContent(data.content || "");
        setStatus(data.status || "draft");

        if (data.featuredImage) {
          if (data.featuredImage.startsWith('http')) {
            setFeaturedPreview(data.featuredImage);
          } else {
            setFeaturedPreview(`http://localhost:5000${data.featuredImage}`);
          }
        }
      } catch (err) {
        console.error("❌ Fetch blog error:", err);
        if (err.response?.status === 401) {
          setError("Session expired. Please login again.");
          setTimeout(() => navigate('/admin/login'), 2000);
        } else {
          setError("Failed to load blog: " + (err.response?.data?.message || ""));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id, navigate]);

  // Handle featured image selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError('Image size should be less than 10MB');
      return;
    }

    setFeaturedFile(file);
    setFeaturedPreview(URL.createObjectURL(file));
    setError("");
  };

  // Apply tags from input
  const applyTags = () => {
    const tagArray = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    setTags(tagArray);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    // Validation
    if (!title.trim() || !slug.trim() || !content.trim()) {
      setError("Title, slug, and content are required");
      setLoading(false);
      return;
    }

    // ✅ Get token with validation
    const token = getToken();
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("slug", slug);
      formData.append("category", category);
      formData.append("tags", JSON.stringify(tags));
      formData.append("content", content);
      formData.append("status", status);
      formData.append("isPublished", status === "published");
      
      if (featuredFile) {
        formData.append("featuredImage", featuredFile);
      }

      console.log('📤 Sending blog data with token...');
      console.log('🔐 Token exists:', !!token);

      let response;
      if (id) {
        // ✅ UPDATE BLOG
        response = await axios.put(`/blogs/${id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        setSuccess("✅ Blog updated successfully!");
      } else {
        // ✅ CREATE NEW BLOG
        response = await axios.post("/blogs", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        setSuccess("✅ Blog created successfully!");
      }

      console.log("✅ Blog save response:", response.data);

      // Redirect after success
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 2000);

    } catch (err) {
      console.error("❌ Save error details:", err);
      
      if (err.response?.status === 401) {
        setError("❌ Session expired! Please login again.");
        localStorage.removeItem('adminToken');
        setTimeout(() => navigate('/admin/login'), 2000);
      } else {
        const errorMessage = err.response?.data?.message || 
                            err.response?.data?.error || 
                            "Failed to save blog. Please try again.";
        setError(`❌ ${errorMessage}`);
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading && id) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <CircularProgress />
        <Typography sx={{ ml: 2 }}>Loading blog...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 1000, m: "40px auto", px: 2 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" mb={2}>
          {id ? "Edit Blog" : "Create New Blog"}
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError("")}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }} onClose={() => setSuccess("")}>
            {success}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          {/* ... rest of your form JSX remains same ... */}
          <TextField
            label="Blog Title *"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
            sx={{ mb: 2 }}
          />

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 2 }}>
            <TextField
              label="Slug (URL friendly) *"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              fullWidth
              required
            />
            <TextField
              label="Category *"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              fullWidth
              select
              required
            >
              <MenuItem value="study-abroad">Study Abroad</MenuItem>
              <MenuItem value="visa-guide">Visa Guide</MenuItem>
              <MenuItem value="scholarships">Scholarships</MenuItem>
              <MenuItem value="career-advice">Career Advice</MenuItem>
              <MenuItem value="university-guide">University Guide</MenuItem>
              <MenuItem value="student-life">Student Life</MenuItem>
            </TextField>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ mb: 2 }} alignItems="center">
            <TextField
              label="Tags (comma separated)"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              onBlur={applyTags}
              fullWidth
              placeholder="study, abroad, visa"
            />
            <Button variant="outlined" onClick={applyTags}>
              Apply
            </Button>
          </Stack>

          {tags.length > 0 && (
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2">Applied Tags</Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap', gap: 1 }}>
                {tags.map((t, index) => (
                  <Chip
                    key={index}
                    label={t}
                    onDelete={() => {
                      const newTags = tags.filter((_, i) => i !== index);
                      setTags(newTags);
                    }}
                  />
                ))}
              </Stack>
            </Box>
          )}

          <Box sx={{ mb: 2 }}>
            <InputLabel sx={{ mb: 1 }}>Content *</InputLabel>
            <ReactQuill
              value={content}
              onChange={setContent}
              style={{ minHeight: 300, marginBottom: 50 }}
              modules={{
                toolbar: [
                  [{ 'header': [1, 2, 3, false] }],
                  ['bold', 'italic', 'underline', 'strike'],
                  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                  ['link', 'image'],
                  ['clean']
                ]
              }}
            />
          </Box>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 2 }}>
            <FormControl sx={{ minWidth: 160 }}>
              <InputLabel>Status</InputLabel>
              <Select value={status} onChange={(e) => setStatus(e.target.value)} label="Status">
                <MenuItem value="draft">Draft</MenuItem>
                <MenuItem value="published">Published</MenuItem>
              </Select>
            </FormControl>

            <Box sx={{ flex: 1 }}>
              <Button
                variant="contained"
                component="label"
                sx={{ mr: 2 }}
              >
                Upload Featured Image
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleFileChange}
                />
              </Button>

              {featuredPreview && (
                <Box
                  component="img"
                  src={featuredPreview}
                  alt="preview"
                  sx={{
                    display: "block",
                    mt: 1,
                    maxWidth: 240,
                    maxHeight: 160,
                    borderRadius: 2,
                    objectFit: 'cover'
                  }}
                />
              )}
            </Box>
          </Stack>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{ backgroundColor: "#FF6600", "&:hover": { backgroundColor: "#e55d00" } }}
            >
              {loading ? "Saving..." : (id ? "Update Blog" : "Create Blog")}
            </Button>

            <Button variant="outlined" onClick={() => navigate("/admin/dashboard")}>
              Cancel
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}