// import express from "express";
// import { registerUser, loginUser, logoutUser, changePassword } from "../controllers/authController.js";
// import { verifyUser } from "../middleware/verifyUser.js";

// const router = express.Router();

// router.post("/register", registerUser);
// router.post("/login", loginUser);
// router.post("/logout", logoutUser);
// router.post("/change-password", verifyUser, changePassword);

// export default router;



import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  changePassword,
  upsertUserProfile,
  fetchUserProfile,
  deleteUserProfile,
} from "../controllers/authController.js";
import { verifyUser } from "../middleware/verifyUser.js";
import { upload } from "../middleware/fileUpload.js"; // ✅ Your defined multer config

const router = express.Router();

// ✅ Auth Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/change-password", verifyUser, changePassword);

// ✅ Profile Routes (Create/Update with File Upload)
router.post(
  "/update",
  verifyUser,
  upload.fields([
    { name: "profile_image", maxCount: 1 },
    { name: "resume_file", maxCount: 1 },
  ]),
  upsertUserProfile
);

// ✅ Fetch current user profile
router.post("/get", verifyUser, fetchUserProfile);

// ✅ Delete user + files
router.post("/delete", verifyUser, deleteUserProfile);

export default router;
