import express from "express";
import {
  createApplication,
  fetchUserApplications,
  fetchJobApplicants,
  modifyApplicationStatus,
  deleteApplication,
  fetchAllApplicantsWithJobs,
} from "../controllers/applicationController.js";

import { verifyUser } from "../middleware/verifyUser.js";
import { verifyAdmin } from "../middleware/verifyAdmin.js";

const router = express.Router();

// 🔹 Apply for a Job (user only)
router.post("/apply", verifyUser, createApplication);

// 🔹 Get All Applications of Logged-in User
router.post("/my-applications", verifyUser, fetchUserApplications);

// 🔹 Get All Applicants for a Specific Job (admin only)
router.post("/applicants", verifyAdmin, fetchJobApplicants);

// 🔹 Update Application Status (admin only)
router.post("/update-status",verifyAdmin, modifyApplicationStatus);

// 🔹 Delete an Application (user or admin)
router.post("/delete", verifyAdmin, deleteApplication);

// 🔹 NEW: Get all applicants across all jobs with job and user info
router.post("/all", verifyAdmin, fetchAllApplicantsWithJobs); // ✅ New Route

export default router;
