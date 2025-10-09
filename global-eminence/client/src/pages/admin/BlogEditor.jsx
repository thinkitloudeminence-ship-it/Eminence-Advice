// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from '../../api/axios';

// export default function BlogEditor() {
//     const { id } = useParams(); // blog id for edit
//     const navigate = useNavigate();

//     const [title, setTitle] = useState('');
//     const [content, setContent] = useState('');
//     const [image, setImage] = useState('');
//     const [error, setError] = useState('');

//     useEffect(() => {
//         if (id) fetchBlog();
//     }, [id]);

//     const fetchBlog = async () => {
//         try {
//             const { data } = await axios.get(`/api/blogs/${id}`);
//             setTitle(data.title);
//             setContent(data.content);
//             setImage(data.image || '');
//         } catch (err) {
//             console.error(err);
//             setError('Failed to load blog');
//         }
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const token = localStorage.getItem('adminToken');
//             if (id) {
//                 await axios.put(`/api/blogs/${id}`, { title, content, image }, {
//                     headers: { Authorization: `Bearer ${token}` }
//                 });
//             } else {
//                 await axios.post('/api/blogs', { title, content, image }, {
//                     headers: { Authorization: `Bearer ${token}` }
//                 });
//             }
//             navigate('/admin/dashboard');
//         } catch (err) {
//             console.error(err);
//             setError('Failed to save blog');
//         }
//     }

//     return (
//         <div style={{ maxWidth: 800, margin: '50px auto' }}>
//             <h2>{id ? 'Edit Blog' : 'New Blog'}</h2>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
//                 <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} required rows={10}></textarea>
//                 <input type="text" placeholder="Image URL (optional)" value={image} onChange={e => setImage(e.target.value)} />
//                 <button type="submit">{id ? 'Update' : 'Create'} Blog</button>
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//             </form>
//         </div>
//     );
// }


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from '../../api/axios';

// export default function BlogEditor() {
//   const [title, setTitle] = useState('');
//   const [slug, setSlug] = useState('');
//   const [content, setContent] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const token = localStorage.getItem('adminToken');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/api/blogs', { title, slug, content }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       navigate('/admin/dashboard'); // redirect after successful post
//     } catch (err) {
//       console.error(err);
//       setError('Failed to create blog');
//     }
//   };

//   return (
//     <div style={{ maxWidth: 800, margin: '50px auto' }}>
//       <h2>Create New Blog</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Blog Title"
//           value={title}
//           onChange={e => setTitle(e.target.value)}
//           required
//           style={{ width: '100%', padding: 10, marginBottom: 10 }}
//         />
//         <input
//           type="text"
//           placeholder="Slug (URL friendly)"
//           value={slug}
//           onChange={e => setSlug(e.target.value)}
//           required
//           style={{ width: '100%', padding: 10, marginBottom: 10 }}
//         />
//         <textarea
//           placeholder="Content"
//           value={content}
//           onChange={e => setContent(e.target.value)}
//           rows={10}
//           required
//           style={{ width: '100%', padding: 10, marginBottom: 10 }}
//         />
//         <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#FF6600', color: '#fff', border: 'none', borderRadius: 5 }}>
//           Post Blog
//         </button>
//       </form>
//     </div>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from '../../api/axios';

// export default function BlogEditor() {
//   const { id } = useParams(); // for editing
//   const [title, setTitle] = useState('');
//   const [slug, setSlug] = useState('');
//   const [content, setContent] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const token = localStorage.getItem('adminToken');

//   useEffect(() => {
//     if (id) fetchBlog();
//   }, [id]);

//   const fetchBlog = async () => {
//     try {
//       const { data } = await axios.get(`/api/blogs/${id}`);
//       setTitle(data.title);
//       setSlug(data.slug);
//       setContent(data.content);
//     } catch (err) {
//       console.error(err);
//       setError('Failed to load blog for edit');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (id) {
//         await axios.put(
//           `/api/blogs/${id}`,
//           { title, slug, content },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//       } else {
//         await axios.post(
//           '/api/blogs',
//           { title, slug, content },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//       }
//       navigate('/admin/dashboard');
//     } catch (err) {
//       console.error(err);
//       setError('Failed to save blog');
//     }
//   };

//   return (
//     <div style={{ maxWidth: 800, margin: '50px auto' }}>
//       <h2>{id ? 'Edit Blog' : 'Create New Blog'}</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Blog Title"
//           value={title}
//           onChange={(e) => {
//             setTitle(e.target.value);
//             setSlug(
//               e.target.value
//                 .toLowerCase()
//                 .replace(/ /g, '-')
//                 .replace(/[^\w-]+/g, '')
//             );
//           }}
//           required
//           style={{ width: '100%', padding: 10, marginBottom: 10 }}
//         />
//         <input
//           type="text"
//           placeholder="Slug (URL friendly)"
//           value={slug}
//           onChange={(e) => setSlug(e.target.value)}
//           required
//           style={{ width: '100%', padding: 10, marginBottom: 10 }}
//         />
//         <textarea
//           placeholder="Content"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           rows={10}
//           required
//           style={{ width: '100%', padding: 10, marginBottom: 10 }}
//         />
//         <button
//           type="submit"
//           style={{
//             padding: '10px 20px',
//             backgroundColor: '#FF6600',
//             color: '#fff',
//             border: 'none',
//             borderRadius: 5,
//           }}
//         >
//           {id ? 'Update Blog' : 'Post Blog'}
//         </button>
//       </form>
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "../../api/axios";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

// export default function BlogEditor() {
//   const { id } = useParams();
//   const [title, setTitle] = useState("");
//   const [slug, setSlug] = useState("");
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();
//   const token = localStorage.getItem("adminToken");

//   useEffect(() => {
//     if (id) fetchBlog();
//   }, [id]);

//   const fetchBlog = async () => {
//     try {
//       const { data } = await axios.get(`/api/blogs/${id}`);
//       setTitle(data.title);
//       setSlug(data.slug);
//       setContent(data.content);
//       if (data.image) setPreview(data.image);
//     } catch (err) {
//       console.error(err);
//       setError("Failed to load blog for edit");
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("slug", slug);
//       formData.append("content", content);
//       if (image) formData.append("image", image);

//       if (id) {
//         await axios.put(`/api/blogs/${id}`, formData, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         });
//       } else {
//         await axios.post(`/api/blogs`, formData, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         });
//       }

//       navigate("/admin/dashboard");
//     } catch (err) {
//       console.error(err);
//       setError("Failed to save blog");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 900, margin: "50px auto" }}>
//       <h2 style={{ fontWeight: 600 }}>
//         {id ? "Edit Blog Post" : "Create New Blog Post"}
//       </h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <form onSubmit={handleSubmit} encType="multipart/form-data">
//         <label>Blog Title</label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => {
//             setTitle(e.target.value);
//             setSlug(
//               e.target.value
//                 .toLowerCase()
//                 .replace(/ /g, "-")
//                 .replace(/[^\w-]+/g, "")
//             );
//           }}
//           required
//           placeholder="Enter blog title"
//           style={{
//             width: "100%",
//             padding: "10px",
//             margin: "10px 0",
//             borderRadius: 5,
//           }}
//         />

//         <label>Slug (URL)</label>
//         <input
//           type="text"
//           value={slug}
//           onChange={(e) => setSlug(e.target.value)}
//           required
//           style={{
//             width: "100%",
//             padding: "10px",
//             margin: "10px 0",
//             borderRadius: 5,
//           }}
//         />

//         <label>Content</label>
//         <ReactQuill
//           theme="snow"
//           value={content}
//           onChange={setContent}
//           modules={{
//             toolbar: [
//               [{ header: [1, 2, 3, false] }],
//               ["bold", "italic", "underline", "strike"],
//               [{ list: "ordered" }, { list: "bullet" }],
//               ["link", "image"],
//               ["clean"],
//             ],
//           }}
//           style={{
//             height: "300px",
//             marginBottom: "50px",
//             backgroundColor: "white",
//           }}
//         />

//         <label>Feature Image</label>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           style={{ display: "block", margin: "10px 0" }}
//         />

//         {preview && (
//           <img
//             src={preview}
//             alt="Preview"
//             style={{
//               width: "100%",
//               maxHeight: "300px",
//               objectFit: "cover",
//               marginBottom: "20px",
//               borderRadius: 10,
//             }}
//           />
//         )}

//         <button
//           type="submit"
//           disabled={loading}
//           style={{
//             padding: "10px 25px",
//             backgroundColor: "#FF6600",
//             color: "#fff",
//             border: "none",
//             borderRadius: 5,
//             cursor: "pointer",
//           }}
//         >
//           {loading ? "Saving..." : id ? "Update Blog" : "Publish Blog"}
//         </button>
//       </form>
//     </div>
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
// } from "@mui/material";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import axios from "../../api/axios";

// export default function BlogEditor() {
//   const { id } = useParams(); // optional edit id
//   const navigate = useNavigate();
//   const token = localStorage.getItem("adminToken");
//   const fileInputRef = useRef();

//   const [title, setTitle] = useState("");
//   const [slug, setSlug] = useState("");
//   const [category, setCategory] = useState("");
//   const [tagsInput, setTagsInput] = useState("");
//   const [tags, setTags] = useState([]);
//   const [content, setContent] = useState("");
//   const [status, setStatus] = useState("draft"); // 'draft' | 'published'
//   const [featuredFile, setFeaturedFile] = useState(null);
//   const [featuredPreview, setFeaturedPreview] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // auto-generate slug when title changes (simple)
//   useEffect(() => {
//     if (!id) { // don't override slug when editing
//       const s = title
//         .toLowerCase()
//         .replace(/[^a-z0-9]+/g, "-")
//         .replace(/(^-|-$)+/g, "");
//       setSlug(s);
//     }
//   }, [title, id]);

//   // If editing existing blog: fetch data
//   useEffect(() => {
//     if (!id) return;
//     (async () => {
//       try {
//         const { data } = await axios.get(`/api/blogs/${id}`);
//         setTitle(data.title || "");
//         setSlug(data.slug || "");
//         setCategory(data.category || "");
//         setTags(data.tags || []);
//         setTagsInput((data.tags || []).join(", "));
//         setContent(data.content || "");
//         setStatus(data.status || "draft");
//         if (data.image) setFeaturedPreview(process.env.REACT_APP_API_URL + data.image);
//       } catch (err) {
//         console.error("fetch blog:", err);
//         setError("Failed to load blog for editing.");
//       }
//     })();
//   }, [id]);

//   // handle featured image selection
//   const handleFileChange = (e) => {
//     const f = e.target.files[0];
//     if (!f) return;
//     setFeaturedFile(f);
//     setFeaturedPreview(URL.createObjectURL(f));
//   };

//   // tags parsing
//   const applyTags = () => {
//     const arr = tagsInput
//       .split(",")
//       .map((t) => t.trim())
//       .filter(Boolean);
//     setTags(arr);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);
//     try {
//       // Use FormData because image upload
//       const form = new FormData();
//       form.append("title", title);
//       form.append("slug", slug);
//       form.append("category", category);
//       form.append("tags", JSON.stringify(tags));
//       form.append("content", content);
//       form.append("status", status);
//       if (featuredFile) form.append("image", featuredFile);

//       const headers = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       };

//       if (id) {
//         // editing existing blog
//         await axios.put(`/api/blogs/${id}`, form, headers);
//       } else {
//         // create new
//         await axios.post("/api/blogs", form, headers);
//       }

//       navigate("/admin/dashboard");
//     } catch (err) {
//       console.error(err);
//       setError(
//         err.response?.data?.message || "Failed to save blog. Check console."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box sx={{ maxWidth: 1000, m: "40px auto", px: 2 }}>
//       <Paper sx={{ p: 3 }}>
//         <Typography variant="h5" mb={2}>
//           {id ? "Edit Blog" : "Create New Blog"}
//         </Typography>

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
//             />
//           </Stack>

//           <Stack direction="row" spacing={2} sx={{ mb: 2 }} alignItems="center">
//             <TextField
//               label="Tags (comma separated)"
//               value={tagsInput}
//               onChange={(e) => setTagsInput(e.target.value)}
//               fullWidth
//             />
//             <Button variant="outlined" onClick={applyTags}>
//               Apply
//             </Button>
//           </Stack>

//           <Box sx={{ mb: 2 }}>
//             <InputLabel sx={{ mb: 1 }}>Content</InputLabel>
//             <ReactQuill value={content} onChange={setContent} />
//           </Box>

//           <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 2 }}>
//             <FormControl sx={{ minWidth: 160 }}>
//               <InputLabel>Status</InputLabel>
//               <Select
//                 label="Status"
//                 value={status}
//                 onChange={(e) => setStatus(e.target.value)}
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
//                 onClick={() => fileInputRef.current?.click()}
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
//                 <Box component="img"
//                   src={featuredPreview}
//                   alt="preview"
//                   sx={{ display: "block", mt: 1, width: 240, borderRadius: 2 }}
//                 />
//               )}
//             </Box>
//           </Stack>

//           {tags.length > 0 && (
//             <Box sx={{ mb: 2 }}>
//               <Typography variant="subtitle2">Applied Tags</Typography>
//               <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
//                 {tags.map((t) => (
//                   <Chip key={t} label={t} />
//                 ))}
//               </Stack>
//             </Box>
//           )}

//           {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}

//           <Box sx={{ display: "flex", gap: 2 }}>
//             <Button
//               type="submit"
//               variant="contained"
//               disabled={loading}
//               sx={{ backgroundColor: "#FF6600" }}
//             >
//               {id ? "Update Blog" : "Post Blog"}
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



// client/src/pages/admin/BlogEditor.jsx
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
} from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "../../api/axios";

export default function BlogEditor() {
  const { id } = useParams(); // optional id for edit
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");
  const fileInputRef = useRef();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [tags, setTags] = useState([]);
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("draft");
  const [featuredFile, setFeaturedFile] = useState(null);
  const [featuredPreview, setFeaturedPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Auto-generate slug when title changes
  useEffect(() => {
    if (!id) {
      const s = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      setSlug(s);
    }
  }, [title, id]);

  // Fetch existing blog if editing
  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const { data } = await axios.get(`/api/blogs/${id}`);
        setTitle(data.title || "");
        setSlug(data.slug || "");
        setCategory(data.category || "");
        setTags(data.tags || []);
        setTagsInput((data.tags || []).join(", "));
        setContent(data.content || "");
        setStatus(data.status || "draft");
        if (data.image) setFeaturedPreview(process.env.REACT_APP_API_URL + data.image);
      } catch (err) {
        console.error("fetch blog:", err);
        setError("Failed to load blog for editing.");
      }
    })();
  }, [id]);

  // Handle featured image selection
  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setFeaturedFile(f);
    setFeaturedPreview(URL.createObjectURL(f));
  };

  // Apply tags from input
  const applyTags = () => {
    const arr = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    setTags(arr);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const form = new FormData();
      form.append("title", title);
      form.append("slug", slug);
      form.append("category", category);
      form.append("tags", JSON.stringify(tags));
      form.append("content", content);
      form.append("status", status);
      if (featuredFile) form.append("image", featuredFile);

      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };

      if (id) {
        await axios.put(`/api/blogs/${id}`, form, headers);
      } else {
        await axios.post("/api/blogs", form, headers);
      }

      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to save blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 1000, m: "40px auto", px: 2 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" mb={2}>
          {id ? "Edit Blog" : "Create New Blog"}
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
            sx={{ mb: 2 }}
          />

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 2 }}>
            <TextField
              label="Slug (URL friendly)"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              fullWidth
              required
            />

            <TextField
              label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              fullWidth
            />
          </Stack>

          <Stack direction="row" spacing={2} sx={{ mb: 2 }} alignItems="center">
            <TextField
              label="Tags (comma separated)"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              fullWidth
            />
            <Button variant="outlined" onClick={applyTags}>
              Apply
            </Button>
          </Stack>

          {tags.length > 0 && (
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2">Applied Tags</Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                {tags.map((t) => (
                  <Chip key={t} label={t} />
                ))}
              </Stack>
            </Box>
          )}

          <Box sx={{ mb: 2 }}>
            <InputLabel sx={{ mb: 1 }}>Content</InputLabel>
            <ReactQuill value={content} onChange={setContent} style={{ minHeight: 300 }} />
          </Box>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 2 }}>
            <FormControl sx={{ minWidth: 160 }}>
              <InputLabel>Status</InputLabel>
              <Select value={status} onChange={(e) => setStatus(e.target.value)}>
                <MenuItem value="draft">Draft</MenuItem>
                <MenuItem value="published">Published</MenuItem>
              </Select>
            </FormControl>

            <Box sx={{ flex: 1 }}>
              <Button
                variant="contained"
                component="label"
                sx={{ mr: 2 }}
                onClick={() => fileInputRef.current?.click()}
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
                  sx={{ display: "block", mt: 1, width: 240, borderRadius: 2 }}
                />
              )}
            </Box>
          </Stack>

          {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{ backgroundColor: "#FF6600" }}
            >
              {id ? "Update Blog" : "Post Blog"}
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
