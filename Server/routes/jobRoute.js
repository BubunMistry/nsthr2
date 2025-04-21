import express from "express";
import {
  createJobController,
  getAllJobsController,
  updateJobController,
  deleteJobController
} from "../controllers/jobController.js";
import { verifyUser } from "../middleware/verifyUser.js";

const router = express.Router();

// All POST-based routes
router.post("/create",verifyUser, createJobController);
router.post("/list", getAllJobsController);
router.post("/update",verifyUser, updateJobController);
router.post("/delete",verifyUser, deleteJobController);

export default router;
