import express from "express";
import {
  createJobController,
  getAllJobsController,
  updateJobController,
  deleteJobController,
} from "../controllers/jobController.js";
import { verifyUser } from "../middleware/verifyUser.js";

const router = express.Router();

// Create a new job (POST)
router.post("/create", verifyUser, createJobController);

// Get all jobs (GET) with optional search via query params
router.get("/list", getAllJobsController);

// Update a job (PUT)
router.put("/update", verifyUser, updateJobController);

// Delete a job (DELETE)
router.delete("/delete", verifyUser, deleteJobController);

export default router;
