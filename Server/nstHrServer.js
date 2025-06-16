import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import morgan from "morgan";

// Route imports
import authRoutes from "./routes/authRoutes.js";
import experienceRoutes from "./routes/experienceRoutes.js";
import educationRoutes from "./routes/educationRoutes.js";
import skillsRoutes from "./routes/skillsRoutes.js";
import adminAuthRoutes from "./routes/adminAuthRoute.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import jobRoutes from "./routes/jobRoute.js";
import blogRoutes from "./routes/blogRoutes.js";
import contactRoutes from "./routes/contactFormRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use(
  cors({
    origin: process.env.ORIGIN || "",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// User API routes
app.use("/api/users/auth", authRoutes);
app.use("/api/users/experience", experienceRoutes);
app.use("/api/users/education", educationRoutes);
app.use("/api/users/skills", skillsRoutes);

// Admin & CMS API routes
app.use("/api/admin/auth", adminAuthRoutes);
app.use("/api/admin/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/contact", contactRoutes);

app.use("/api/applications", applicationRoutes);

app.use("/api/users", userRoutes);

// Serve static frontend
app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
