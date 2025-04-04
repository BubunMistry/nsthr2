import express from "express";
import { createExperience, fetchExperience, modifyExperience, removeExperience } from "../controllers/experienceController.js";
import { verifyUser } from "../middleware/verifyUser.js";

const router = express.Router();

router.post("/create", verifyUser, createExperience); // Add experience
router.post("/fetch", verifyUser, fetchExperience);   // Get all experiences
router.post("/update", verifyUser, modifyExperience); // Update experience
router.post("/delete", verifyUser, removeExperience); // Delete experience

export default router;
