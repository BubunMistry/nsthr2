import express from "express";
import {
  createApplication,
  getAllApplications,
  getApplicationById,
  updateApplication,
  deleteApplication,
  searchApplications,
  updateApplicationStatus,
} from "../controllers/applicationController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/apply", upload.single("cv"), createApplication);
router.get("/", getAllApplications);
router.get("/search", searchApplications);
router.get("/:id", getApplicationById);
router.put("/:id", updateApplication);
router.put("/:id/status", updateApplicationStatus);
router.delete("/:id", deleteApplication);

export default router;
