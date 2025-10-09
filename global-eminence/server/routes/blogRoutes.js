const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

const {
  createBlog,
  updateBlog,
  getBlogs,
  getBlogBySlug,
  deleteBlog,
} = require("../controllers/blogController");

const { protect } = require("../middleware/authMiddleware");

// ✅ Multer config (for image uploads)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// ✅ Blog routes
router.get("/", getBlogs);
router.get("/:slug", getBlogBySlug);
router.post("/", protect, upload.single("image"), createBlog);
router.put("/:id", protect, upload.single("image"), updateBlog);
router.delete("/:id", protect, deleteBlog);

module.exports = router;
