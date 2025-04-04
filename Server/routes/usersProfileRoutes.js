import express from "express";

import { verifyUser } from "../middleware/verifyUser.js";
import { createProfile, fetchProfile, removeProfile, updateProfile } from "../controllers/usersProfileController.js";

const router = express.Router();

router.post("/create", verifyUser, createProfile); // Create profile
router.post("/get", verifyUser, fetchProfile); // Get profile
router.post("/update", verifyUser, updateProfile); // Update profile
router.post("/delete", verifyUser, removeProfile); // Delete profile

export default router;
