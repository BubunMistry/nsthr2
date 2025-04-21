import express from "express";
import { registerUser, loginUser, logoutUser, changePassword } from "../controllers/adminAuthController.js";
import { verifyAdmin } from "../middleware/verifyAdmin.js";


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/change-password", verifyAdmin, changePassword);

export default router;
