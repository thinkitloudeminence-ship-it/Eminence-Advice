// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import axios from "../../api/axios";

// export default function CreateBlog() {
//     const [formData, setFormData] = useState({
//         title: "",
//         slug: "",
//         category: "",
//         content: "",
//         image: null,
//     });
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState("");
//     const navigate = useNavigate();
//     const token = localStorage.getItem("adminToken");

//     const handleChange = (e) => {
//         const { name, value, files } = e.target;
//         if (name === "image") {
//             setFormData({ ...formData, image: files[0] });
//         } else {
//             setFormData({ ...formData, [name]: value });
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         try {
//             const data = new FormData();
//             Object.entries(formData).forEach(([key, value]) => {
//                 data.append(key, value);
//             });

//             await axios.post("/api/blogs", data, {
//                 headers: {
//                     "Content-Type": "multipart/form-data",
//                     Authorization: `Bearer ${token}`,
//                 },
//             });

//             alert("✅ Blog created successfully!");
//             navigate("/admin/dashboard");
//         } catch (err) {
//             console.error(err);
//             setError("Failed to create blog. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div style={{ maxWidth: 900, margin: "40px auto" }}>
//             <h2 style={{ marginBottom: 20 }}>📝 Create New Blog</h2>
//             {error && <p style={{ color: "red" }}>{error}</p>}

//             <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 15 }}>
//                 <input
//                     type="text"
//                     name="title"
//                     placeholder="Blog Title"
//                     value={formData.title}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="slug"
//                     placeholder="Slug (e.g. study-in-usa-guide)"
//                     value={formData.slug}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="category"
//                     placeholder="Category (optional)"
//                     value={formData.category}
//                     onChange={handleChange}
//                 />

//                 <ReactQuill
//                     theme="snow"
//                     value={formData.content}
//                     onChange={(value) => setFormData({ ...formData, content: value })}
//                     placeholder="Write your blog content here..."
//                     style={{ height: 300, marginBottom: 40 }}
//                 />

//                 <input type="file" name="image" accept="image/*" onChange={handleChange} />

//                 <button
//                     type="submit"
//                     disabled={loading}
//                     style={{
//                         padding: "10px 20px",
//                         backgroundColor: "#FF6600",
//                         color: "#fff",
//                         border: "none",
//                         borderRadius: 5,
//                         cursor: "pointer",
//                     }}
//                 >
//                     {loading ? "Publishing..." : "Publish Blog"}
//                 </button>
//             </form>
//         </div>
//     );
// }


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { RichTextEditor } from "@mantine/rte";
// import { Button, TextInput, FileInput, Container, Title, Text } from "@mantine/core";
// import axios from "../../api/axios";

// export default function CreateBlog() {
//     const [formData, setFormData] = useState({
//         title: "",
//         slug: "",
//         category: "",
//         content: "",
//         image: null,
//     });
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState("");
//     const navigate = useNavigate();
//     const token = localStorage.getItem("adminToken");

//     const handleChange = (e) => {
//         const { name, value, files } = e.target;
//         if (name === "image") {
//             setFormData({ ...formData, image: files[0] });
//         } else {
//             setFormData({ ...formData, [name]: value });
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError("");

//         try {
//             const data = new FormData();
//             Object.entries(formData).forEach(([key, value]) => {
//                 data.append(key, value);
//             });

//             await axios.post("/api/blogs", data, {
//                 headers: { "Content-Type": "multipart/form-data" },
//             });

//             alert("✅ Blog created successfully!");
//             navigate("/admin/dashboard");
//         } catch (err) {
//             console.error(err);
//             setError("Failed to create blog. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <Container size="sm" style={{ marginTop: 40 }}>
//             <Title order={2} style={{ marginBottom: 20 }}>
//                 📝 Create New Blog
//             </Title>

//             {error && <Text color="red">{error}</Text>}

//             <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 15 }}>
//                 <TextInput
//                     placeholder="Blog Title"
//                     name="title"
//                     value={formData.title}
//                     onChange={handleChange}
//                     required
//                 />

//                 <TextInput
//                     placeholder="Slug (e.g. study-in-usa-guide)"
//                     name="slug"
//                     value={formData.slug}
//                     onChange={handleChange}
//                     required
//                 />

//                 <TextInput
//                     placeholder="Category (optional)"
//                     name="category"
//                     value={formData.category}
//                     onChange={handleChange}
//                 />

//                 <RichTextEditor
//                     value={formData.content}
//                     onChange={(value) => setFormData({ ...formData, content: value })}
//                     placeholder="Write your blog content here..."
//                     style={{ minHeight: 300 }}
//                 />

//                 <FileInput
//                     placeholder="Upload image"
//                     name="image"
//                     accept="image/*"
//                     onChange={(file) => setFormData({ ...formData, image: file })}
//                 />

//                 <Button type="submit" color="orange" loading={loading}>
//                     Publish Blog
//                 </Button>
//             </form>
//         </Container>
//     );
// }

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//     Container,
//     Paper,
//     TextField,
//     Button,
//     Box,
//     Typography,
//     Alert,
//     Card,
//     CardMedia,
//     IconButton,
//     Chip,
//     FormControl,
//     InputLabel,
//     Select,
//     MenuItem,
//     Switch,
//     FormControlLabel,
//     Grid, // <-- add this
// } from "@mui/material";
// import {
//     RichTextEditor,
//     Link,
//     useRichTextEditorContext,
// } from "@mantine/tiptap";
// import { useEditor } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import Image from "@tiptap/extension-image";
// import TextAlign from "@tiptap/extension-text-align";
// import Underline from "@tiptap/extension-underline";
// import Highlight from "@tiptap/extension-highlight";
// import Placeholder from "@tiptap/extension-placeholder";
// import {
//     IconPhoto,
//     IconBold,
//     IconItalic,
//     IconUnderline,
//     IconStrikethrough,
//     IconH1,
//     IconH2,
//     IconH3,
//     IconListNumbers,
//     IconList,
//     IconQuote,
//     IconSeparator,
//     IconLink,
//     IconUnlink,
//     IconAlignLeft,
//     IconAlignCenter,
//     IconAlignRight,
//     IconHighlight,
//     IconArrowBack
// } from "@tabler/icons-react";
// import axios from "../../api/axios";
// import "./CreateBlog.css"; // We'll create this CSS file

// // Custom Image Control Component
// function ImageControl() {
//     const { editor } = useRichTextEditorContext();
//     const [imageUrl, setImageUrl] = useState("");

//     const addImage = () => {
//         if (imageUrl) {
//             editor.chain().focus().setImage({ src: imageUrl }).run();
//             setImageUrl("");
//         }
//     };

//     const handleFileUpload = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             // In a real app, you'd upload to cloud storage first
//             const reader = new FileReader();
//             reader.onload = (e) => {
//                 editor.chain().focus().setImage({ src: e.target.result }).run();
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     return (
//         <Box className="image-control">
//             <TextField
//                 size="small"
//                 placeholder="Paste image URL"
//                 value={imageUrl}
//                 onChange={(e) => setImageUrl(e.target.value)}
//                 onKeyPress={(e) => e.key === "Enter" && addImage()}
//             />
//             <Button size="small" onClick={addImage}>
//                 Insert
//             </Button>
//             <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileUpload}
//                 style={{ display: "none" }}
//                 id="file-upload"
//             />
//             <label htmlFor="file-upload">
//                 <Button component="span" size="small">
//                     Upload
//                 </Button>
//             </label>
//         </Box>
//     );
// }

// export default function CreateBlog() {
//     const [formData, setFormData] = useState({
//         title: "",
//         slug: "",
//         category: "",
//         excerpt: "",
//         featuredImage: null,
//         metaDescription: "",
//         tags: "",
//         isPublished: true,
//     });
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState("");
//     const [imagePreview, setImagePreview] = useState("");
//     const navigate = useNavigate();
//     const token = localStorage.getItem("adminToken");

//     // TipTap Editor
//     const editor = useEditor({
//         extensions: [
//             StarterKit,
//             Image.configure({
//                 HTMLAttributes: {
//                     class: "blog-image",
//                 },
//             }),
//             TextAlign.configure({
//                 types: ["heading", "paragraph"],
//             }),
//             Underline,
//             Highlight.configure({ multicolor: true }),
//             Placeholder.configure({ placeholder: "Start writing your amazing blog post..." }),
//         ],
//         content: "",
//     });

//     const handleChange = (e) => {
//         const { name, value, files, checked } = e.target;
//         if (name === "featuredImage") {
//             const file = files[0];
//             setFormData({ ...formData, featuredImage: file });
//             if (file) {
//                 const previewUrl = URL.createObjectURL(file);
//                 setImagePreview(previewUrl);
//             }
//         } else if (name === "isPublished") {
//             setFormData({ ...formData, [name]: checked });
//         } else {
//             setFormData({ ...formData, [name]: value });
//         }
//     };

//     // Auto-generate slug from title
//     const generateSlug = (title) => {
//         return title
//             .toLowerCase()
//             .replace(/[^a-z0-9 -]/g, "")
//             .replace(/\s+/g, "-")
//             .replace(/-+/g, "-")
//             .trim();
//     };

//     const handleTitleChange = (e) => {
//         const title = e.target.value;
//         setFormData({
//             ...formData,
//             title,
//             slug: generateSlug(title)
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError("");

//         if (!editor.getHTML() || editor.getHTML() === "<p></p>") {
//             setError("Blog content is required");
//             setLoading(false);
//             return;
//         }

//         try {
//             const data = new FormData();
//             data.append("title", formData.title);
//             data.append("slug", formData.slug);
//             data.append("category", formData.category);
//             data.append("excerpt", formData.excerpt);
//             data.append("content", editor.getHTML());
//             data.append("metaDescription", formData.metaDescription);
//             data.append("tags", formData.tags);
//             data.append("isPublished", formData.isPublished);

//             if (formData.featuredImage) {
//                 data.append("featuredImage", formData.featuredImage);
//             }

//             await axios.post("/api/blogs", data, {
//                 headers: {
//                     "Content-Type": "multipart/form-data",
//                     Authorization: `Bearer ${token}`
//                 },
//             });

//             alert("✅ Blog published successfully!");
//             navigate("/admin/dashboard");
//         } catch (err) {
//             console.error(err);
//             setError(
//                 err.response?.data?.message ||
//                 "Failed to create blog. Please try again."
//             );
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <Container maxWidth="lg" sx={{ py: 4 }}>
//             {/* Header */}
//             <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
//                 <IconButton onClick={() => navigate("/admin/dashboard")} sx={{ mr: 2 }}>
//                     <IconArrowBack />
//                 </IconButton>
//                 <Typography variant="h4" fontWeight="bold">
//                     ✍️ Create New Blog Post
//                 </Typography>
//             </Box>

//             {error && (
//                 <Alert severity="error" sx={{ mb: 3 }}>
//                     {error}
//                 </Alert>
//             )}

//             <form onSubmit={handleSubmit}>
//                 <Grid container spacing={3}>
//                     {/* Main Content Column */}
//                     <Grid item xs={12} md={8}>
//                         <Paper sx={{ p: 3, mb: 3 }}>
//                             <TextField
//                                 fullWidth
//                                 label="Blog Title"
//                                 name="title"
//                                 value={formData.title}
//                                 onChange={handleTitleChange}
//                                 placeholder="Enter a compelling blog title..."
//                                 required
//                                 sx={{ mb: 3 }}
//                             />

//                             <TextField
//                                 fullWidth
//                                 label="Slug"
//                                 name="slug"
//                                 value={formData.slug}
//                                 onChange={handleChange}
//                                 placeholder="URL-friendly slug"
//                                 required
//                                 sx={{ mb: 3 }}
//                                 helperText="This will be used in the blog URL"
//                             />

//                             <Typography variant="h6" gutterBottom>
//                                 Content
//                             </Typography>

//                             {/* Rich Text Editor */}
//                             <Paper variant="outlined" sx={{ mb: 3 }}>
//                                 <RichTextEditor
//                                     editor={editor}
//                                     className="blog-editor"
//                                 >
//                                     {/* Toolbar */}
//                                     <RichTextEditor.Toolbar sticky stickyOffset={60}>
//                                         <RichTextEditor.ControlsGroup>
//                                             <RichTextEditor.Bold />
//                                             <RichTextEditor.Italic />
//                                             <RichTextEditor.Underline />
//                                             <RichTextEditor.Strikethrough />
//                                             <RichTextEditor.Highlight />
//                                             <RichTextEditor.ClearFormatting />
//                                         </RichTextEditor.ControlsGroup>

//                                         <RichTextEditor.ControlsGroup>
//                                             <RichTextEditor.H1 />
//                                             <RichTextEditor.H2 />
//                                             <RichTextEditor.H3 />
//                                         </RichTextEditor.ControlsGroup>

//                                         <RichTextEditor.ControlsGroup>
//                                             <RichTextEditor.Blockquote />
//                                             <RichTextEditor.Hr />
//                                             <RichTextEditor.BulletList />
//                                             <RichTextEditor.OrderedList />
//                                         </RichTextEditor.ControlsGroup>

//                                         <RichTextEditor.ControlsGroup>
//                                             <RichTextEditor.Link />
//                                             <RichTextEditor.Unlink />
//                                         </RichTextEditor.ControlsGroup>

//                                         <RichTextEditor.ControlsGroup>
//                                             <RichTextEditor.AlignLeft />
//                                             <RichTextEditor.AlignCenter />
//                                             <RichTextEditor.AlignRight />
//                                         </RichTextEditor.ControlsGroup>

//                                         <RichTextEditor.ControlsGroup>
//                                             <ImageControl />
//                                         </RichTextEditor.ControlsGroup>
//                                     </RichTextEditor.Toolbar>

//                                     <RichTextEditor.Content />
//                                 </RichTextEditor>
//                             </Paper>
//                         </Paper>
//                     </Grid>

//                     {/* Sidebar Column */}
//                     <Grid item xs={12} md={4}>
//                         {/* Publish Card */}
//                         <Paper sx={{ p: 3, mb: 3 }}>
//                             <Typography variant="h6" gutterBottom>
//                                 Publish
//                             </Typography>

//                             <FormControlLabel
//                                 control={
//                                     <Switch
//                                         checked={formData.isPublished}
//                                         onChange={handleChange}
//                                         name="isPublished"
//                                         color="success"
//                                     />
//                                 }
//                                 label={formData.isPublished ? "Published" : "Draft"}
//                                 sx={{ mb: 2 }}
//                             />

//                             <Box sx={{ display: "flex", gap: 1 }}>
//                                 <Button
//                                     type="submit"
//                                     variant="contained"
//                                     fullWidth
//                                     loading={loading}
//                                     sx={{
//                                         backgroundColor: "#FF6600",
//                                         "&:hover": { backgroundColor: "#e55d00" },
//                                     }}
//                                 >
//                                     {formData.isPublished ? "Publish" : "Save Draft"}
//                                 </Button>

//                                 <Button
//                                     variant="outlined"
//                                     onClick={() => navigate("/admin/dashboard")}
//                                 >
//                                     Cancel
//                                 </Button>
//                             </Box>
//                         </Paper>

//                         {/* Featured Image Card */}
//                         <Paper sx={{ p: 3, mb: 3 }}>
//                             <Typography variant="h6" gutterBottom>
//                                 Featured Image
//                             </Typography>

//                             {imagePreview && (
//                                 <CardMedia
//                                     component="img"
//                                     height="200"
//                                     image={imagePreview}
//                                     alt="Featured preview"
//                                     sx={{ mb: 2, borderRadius: 1 }}
//                                 />
//                             )}

//                             <Button
//                                 variant="outlined"
//                                 component="label"
//                                 fullWidth
//                                 startIcon={<IconPhoto />}
//                             >
//                                 Upload Featured Image
//                                 <input
//                                     type="file"
//                                     name="featuredImage"
//                                     accept="image/*"
//                                     onChange={handleChange}
//                                     hidden
//                                 />
//                             </Button>
//                         </Paper>

//                         {/* Categories & Tags */}
//                         <Paper sx={{ p: 3, mb: 3 }}>
//                             <Typography variant="h6" gutterBottom>
//                                 Categories & Tags
//                             </Typography>

//                             <FormControl fullWidth sx={{ mb: 2 }}>
//                                 <InputLabel>Category</InputLabel>
//                                 <Select
//                                     name="category"
//                                     value={formData.category}
//                                     label="Category"
//                                     onChange={handleChange}
//                                 >
//                                     <MenuItem value="study-abroad">Study Abroad</MenuItem>
//                                     <MenuItem value="visa-guide">Visa Guide</MenuItem>
//                                     <MenuItem value="scholarships">Scholarships</MenuItem>
//                                     <MenuItem value="career-advice">Career Advice</MenuItem>
//                                     <MenuItem value="university-guide">University Guide</MenuItem>
//                                     <MenuItem value="student-life">Student Life</MenuItem>
//                                 </Select>
//                             </FormControl>

//                             <TextField
//                                 fullWidth
//                                 label="Tags"
//                                 name="tags"
//                                 value={formData.tags}
//                                 onChange={handleChange}
//                                 placeholder="comma, separated, tags"
//                                 helperText="Separate tags with commas"
//                             />
//                         </Paper>

//                         {/* Excerpt & SEO */}
//                         <Paper sx={{ p: 3 }}>
//                             <Typography variant="h6" gutterBottom>
//                                 Excerpt & SEO
//                             </Typography>

//                             <TextField
//                                 fullWidth
//                                 multiline
//                                 rows={3}
//                                 label="Excerpt"
//                                 name="excerpt"
//                                 value={formData.excerpt}
//                                 onChange={handleChange}
//                                 placeholder="Brief description of your blog post..."
//                                 sx={{ mb: 2 }}
//                             />

//                             <TextField
//                                 fullWidth
//                                 multiline
//                                 rows={2}
//                                 label="Meta Description"
//                                 name="metaDescription"
//                                 value={formData.metaDescription}
//                                 onChange={handleChange}
//                                 placeholder="SEO meta description..."
//                                 helperText="Recommended: 150-160 characters"
//                             />
//                         </Paper>
//                     </Grid>
//                 </Grid>
//             </form>
//         </Container>
//     );
// }



import React, { useState } from "react";
import {
    Container,
    Paper,
    TextField,
    Button,
    Box,
    Typography,
    Alert,
    CardMedia,
    IconButton,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Switch,
    FormControlLabel,
    Grid,
} from "@mui/material";
import { IconArrowBack, IconPhoto } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import axios from "../../api/axios";

export default function CreateBlog() {
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        category: "",
        excerpt: "",
        featuredImage: null,
        metaDescription: "",
        tags: "",
        isPublished: true,
    });

    const [imagePreview, setImagePreview] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const token = localStorage.getItem("adminToken");

    // TipTap Editor Setup
    const editor = useEditor({
        extensions: [
            StarterKit,
            Image.configure({ HTMLAttributes: { class: "blog-image" } }),
            TextAlign.configure({ types: ["heading", "paragraph"] }),
            Underline,
            Highlight.configure({ multicolor: true }),
            Placeholder.configure({ placeholder: "Start writing your blog..." }),
        ],
        content: "",
    });

    const handleChange = (e) => {
        const { name, value, files, checked } = e.target;
        if (name === "featuredImage") {
            const file = files[0];
            setFormData({ ...formData, featuredImage: file });
            if (file) setImagePreview(URL.createObjectURL(file));
        } else if (name === "isPublished") {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const generateSlug = (title) =>
        title
            .toLowerCase()
            .replace(/[^a-z0-9 -]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .trim();

    const handleTitleChange = (e) => {
        const title = e.target.value;
        setFormData({ ...formData, title, slug: generateSlug(title) });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        if (!editor.getHTML() || editor.getHTML() === "<p></p>") {
            setError("Blog content is required");
            setLoading(false);
            return;
        }

        try {
            const data = new FormData();
            data.append("title", formData.title);
            data.append("slug", formData.slug);
            data.append("category", formData.category);
            data.append("excerpt", formData.excerpt);
            data.append("content", editor.getHTML());
            data.append("metaDescription", formData.metaDescription);
            data.append("tags", formData.tags);
            data.append("isPublished", formData.isPublished);
            if (formData.featuredImage) data.append("featuredImage", formData.featuredImage);

            await axios.post("/api/blogs", data, {
                headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${token}` },
            });

            alert("✅ Blog created successfully!");
            navigate("/admin/dashboard");
        } catch (err) {
            setError(err.response?.data?.message || "Failed to create blog.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <IconButton onClick={() => navigate("/admin/dashboard")} sx={{ mr: 2 }}>
                    <IconArrowBack />
                </IconButton>
                <Typography variant="h4" fontWeight="bold">
                    ✍️ Create New Blog Post
                </Typography>
            </Box>

            {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    {/* Left Column */}
                    <Grid item xs={12} md={8}>
                        <Paper sx={{ p: 3, mb: 3 }}>
                            <TextField
                                fullWidth
                                label="Blog Title"
                                name="title"
                                value={formData.title}
                                onChange={handleTitleChange}
                                required
                                sx={{ mb: 3 }}
                            />
                            <TextField
                                fullWidth
                                label="Slug"
                                name="slug"
                                value={formData.slug}
                                onChange={handleChange}
                                helperText="This will be used in the blog URL"
                                sx={{ mb: 3 }}
                            />

                            <Typography variant="h6" gutterBottom>Content</Typography>
                            <Paper variant="outlined" sx={{ p: 2, minHeight: 300, mb: 3 }}>
                                <EditorContent editor={editor} />
                            </Paper>
                        </Paper>
                    </Grid>

                    {/* Right Column */}
                    <Grid item xs={12} md={4}>
                        {/* Publish Section */}
                        <Paper sx={{ p: 3, mb: 3 }}>
                            <Typography variant="h6">Publish</Typography>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={formData.isPublished}
                                        onChange={handleChange}
                                        name="isPublished"
                                        color="success"
                                    />
                                }
                                label={formData.isPublished ? "Published" : "Draft"}
                                sx={{ mb: 2 }}
                            />
                            <Box sx={{ display: "flex", gap: 1 }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    disabled={loading}
                                    sx={{
                                        backgroundColor: "#FF6600",
                                        "&:hover": { backgroundColor: "#e55d00" },
                                    }}
                                >
                                    {formData.isPublished ? "Publish" : "Save Draft"}
                                </Button>
                                <Button variant="outlined" onClick={() => navigate("/admin/dashboard")}>
                                    Cancel
                                </Button>
                            </Box>
                        </Paper>

                        {/* Featured Image */}
                        <Paper sx={{ p: 3, mb: 3 }}>
                            <Typography variant="h6">Featured Image</Typography>
                            {imagePreview && (
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={imagePreview}
                                    alt="Preview"
                                    sx={{ mb: 2 }}
                                />
                            )}
                            <Button variant="outlined" component="label" fullWidth startIcon={<IconPhoto />}>
                                Upload Featured Image
                                <input
                                    type="file"
                                    name="featuredImage"
                                    accept="image/*"
                                    onChange={handleChange}
                                    hidden
                                />
                            </Button>
                        </Paper>

                        {/* Category & Tags */}
                        <Paper sx={{ p: 3 }}>
                            <Typography variant="h6">Categories & Tags</Typography>
                            <FormControl fullWidth sx={{ mb: 2 }}>
                                <InputLabel>Category</InputLabel>
                                <Select name="category" value={formData.category} label="Category" onChange={handleChange}>
                                    <MenuItem value="study-abroad">Study Abroad</MenuItem>
                                    <MenuItem value="visa-guide">Visa Guide</MenuItem>
                                    <MenuItem value="scholarships">Scholarships</MenuItem>
                                    <MenuItem value="career-advice">Career Advice</MenuItem>
                                    <MenuItem value="university-guide">University Guide</MenuItem>
                                    <MenuItem value="student-life">Student Life</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                fullWidth
                                label="Tags"
                                name="tags"
                                value={formData.tags}
                                onChange={handleChange}
                                placeholder="comma, separated, tags"
                                helperText="Separate tags with commas"
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}
