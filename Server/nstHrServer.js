import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import authRoutes from "./routes/authRoutes.js";
import experienceRoutes from "./routes/experienceRoutes.js"
import educationRoutes from "./routes/educationRoutes.js"
import skillsRoutes from "./routes/skillsRoutes.js"
import adminAuthRoutes from "./routes/adminAuthRoute.js"
import applicationRoutes from "./routes/applicationRoutes.js";
import jobRoutes from "./routes/jobRoute.js";
import blogRoutes from "./routes/blogRoutes.js";
import contactRoutes from "./routes/contactFormRoutes.js";
import morgan from "morgan";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API routes should come first

// API routes for users
app.use("/api/users/auth", authRoutes);
app.use("/api/users/experience", experienceRoutes);
app.use("/api/users/education", educationRoutes);
app.use("/api/users/skills", skillsRoutes);

// API routes for admin
app.use("/api/admin/auth", adminAuthRoutes);
app.use("/api/admin/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/contact", contactRoutes);


// Serve static files from React build directory
app.use(express.static(path.join(__dirname, "build")));

// Handle React routes (this must be after all other routes)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
