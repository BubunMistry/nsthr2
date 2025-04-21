import express from "express";
import { createEducation, fetchEducation, modifyEducation, removeEducation } from "../controllers/educationController.js";
import { verifyUser } from "../middleware/verifyUser.js";

const router = express.Router();

router.post("/create", verifyUser, createEducation); // Add education
router.post("/fetch", verifyUser, fetchEducation);   // Get all education records
router.post("/update", verifyUser, modifyEducation); // Update education
router.post("/delete", verifyUser, removeEducation); // Delete education

export default router;
