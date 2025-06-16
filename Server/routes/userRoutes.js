import express from "express";
import { fetchAllUsers, fetchUserByEmail } from "../controllers/userController.js";

const router = express.Router();

router.get("/", fetchAllUsers);
router.get("/email/:email", fetchUserByEmail); 

export default router;
