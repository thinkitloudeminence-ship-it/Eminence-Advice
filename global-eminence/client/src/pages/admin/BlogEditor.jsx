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
  Alert,
  CircularProgress
} from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "../../api/axios";

export default function BlogEditor() {
  const { id } = useParams();
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
  const [success, setSuccess] = useState("");

  // Auto-generate slug when title changes
  useEffect(() => {
    if (!id) {
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
        const { data } = await axios.get(`/api/blogs/${id}`);
        setTitle(data.title || "");
        setSlug(data.slug || "");
        setCategory(data.category || "");
        setTags(data.tags || []);
        setTagsInput((data.tags || []).join(", "));
        setContent(data.content || "");
        setStatus(data.isPublished ? "published" : "draft");

        // Image preview handle karna
        if (data.featuredImage) {
          if (data.featuredImage.startsWith('http')) {
            setFeaturedPreview(data.featuredImage);
          } else {
            setFeaturedPreview(`${axios.defaults.baseURL}${data.featuredImage}`);
          }
        }
      } catch (err) {
        console.error("fetch blog:", err);
        setError("Failed to load blog for editing.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  // Handle featured image selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // File validation
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

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("slug", slug);
      formData.append("category", category);
      formData.append("tags", JSON.stringify(tags));
      formData.append("content", content);
      formData.append("isPublished", status === "published");
      if (featuredFile) formData.append("featuredImage", featuredFile);

      if (id) {
        await axios.put(`/api/blogs/${id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        setSuccess("Blog updated successfully!");
      } else {
        await axios.post("/api/blogs", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        setSuccess("Blog created successfully!");
      }

      // Redirect after success
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 2000);

    } catch (err) {
      console.error("Save error:", err);
      const errorMessage = err.response?.data?.message || "Failed to save blog.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (loading && id) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 1000, m: "40px auto", px: 2 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" mb={2}>
          {id ? "Edit Blog" : "Create New Blog"}
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

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
              select
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