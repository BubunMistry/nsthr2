import express from "express";
import { createSkill, fetchSkills, removeSkill, checkDuplicateSkill } from "../controllers/skillsController.js";
import { verifyUser } from "../middleware/verifyUser.js";

const router = express.Router();

router.post("/create", verifyUser,checkDuplicateSkill, createSkill); // Add skill
router.post("/fetch", verifyUser, fetchSkills);   // Get all skills
router.post("/delete", verifyUser, removeSkill); // Delete skill

export default router;
