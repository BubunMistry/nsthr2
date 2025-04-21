



import multer from "multer";
import path from "path";
import fs from "fs";

// Base directory
const baseUploadDir = "./uploads/users_profiles";

// Storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const user_id = req.user_id;
    const fullname = req.body.fullname?.replace(/\s+/g, "_") || "unknown";

    const userDir = path.join(baseUploadDir, `user_${fullname}_${user_id}`);

    // Ensure user-specific directory exists
    fs.mkdirSync(userDir, { recursive: true });

    cb(null, userDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext).replace(/\s+/g, "-");
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}-${baseName}${ext}`;
    cb(null, uniqueName);
  },
});

// File filter for both images and docs
const fileFilter = (req, file, cb) => {
  const allowed = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "image/webp",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only images and resume files (PDF, Word) are allowed"), false);
  }
};

// Exported upload middleware
export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max
});


// Blog images upload configuration
const blogStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const blogDir = path.join("./uploads/blogs");

    // Ensure the blogs directory exists
    fs.mkdirSync(blogDir, { recursive: true });

    cb(null, blogDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext).replace(/\s+/g, "-");
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}-${baseName}${ext}`;
    cb(null, uniqueName);
  },
});

// Blog image filter (allow only image types)
const blogFileFilter = (req, file, cb) => {
  const allowed = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed for blogs"), false);
  }
};

// Exported upload middleware for blog images
export const blogUpload = multer({
  storage: blogStorage,
  fileFilter: blogFileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
});