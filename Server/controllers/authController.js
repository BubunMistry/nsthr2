// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// import {
//   createUser,
//   findUserByEmail,
//   findUserById,
//   updateUserPassword,
// } from "../modulars/authModule.js";
// import { hashPassword } from "../utils/hash.js";

// dotenv.config();
// const saltRounds = 10;

// // Register Controller
// export const registerUser = async (req, res) => {
//   try {
//     const { name, email, password, confirmPassword } = req.body;

//     if (!name || !email || !password || !confirmPassword) {
//       return res.status(400).json({ success: false, message: "All fields are required." });
//     }

//     if (password !== confirmPassword) {
//       return res.status(400).json({ success: false, message: "Passwords do not match." });
//     }

//     const hashedPassword = await hashPassword(password);
//     const result = await createUser(name, email, hashedPassword);

//     return res.status(201).json({ success: true, message: "User registered successfully", data: result });
//   } catch (error) {
//     console.error("Registration error:", error);
//     return res.status(500).json({ success: false, message: "Error during registration" });
//   }
// };

// export const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await findUserByEmail(email);

//     if (!user) {
//       return res.status(404).json({ Error: "User not found" });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(400).json({ Error: "Password is incorrect" });
//     }

//     const secretKey = process.env.JWT_SECRET || "default_secret_key"; // Ensure secret key is set
//     const token = jwt.sign({ id: user.user_id }, secretKey, { expiresIn: "1d" });

//     res.cookie("token", token, { httpOnly: true, sameSite: "strict" });
//     return res.json({ Status: "User logged in successfully", token });
//   } catch (error) {
//     console.error("Login error:", error);
//     return res.status(500).json({ Error: "Error during login" });
//   }
// };

// // Logout Controller
// export const logoutUser = (req, res) => {
//   res.clearCookie("token", { httpOnly: true, secure: true, sameSite: "None" });
//   return res.json({ success: true, message: "User logged out successfully" });
// };

// // Change Password
// export const changePassword = async (req, res) => {
//   try {
//     const { oldPassword, newPassword } = req.body;

//     const user = await findUserById(req.userId);
//     if (!user) {
//       return res.status(404).json({ success: false, message: "User not found" });
//     }

//     const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
//     if (!isPasswordValid) {
//       return res.status(400).json({ success: false, message: "Incorrect old password" });
//     }

//     const newHashedPassword = await bcrypt.hash(newPassword, saltRounds);
//     await updateUserPassword(req.userId, newHashedPassword);

//     return res.json({ success: true, message: "Password updated successfully" });
//   } catch (error) {
//     console.error("Password change error:", error);
//     return res.status(500).json({ success: false, message: "Error changing password" });
//   }
// };




import {
  createUser,
  findUserByEmail,
  findUserById,
  updateUserPassword,
  updateUserProfile,
  deleteUser,
} from "../modulars/authModule.js";
import { hashPassword } from "../utils/hash.js";
import path from "path";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const saltRounds = 10;

// 📁 Safe user folder name
const getUserFolder = (fullname, user_id) => {
  const safeName = fullname?.trim().replace(/\s+/g, "_") || "unknown";
  return `user_${safeName}_${user_id || "noid"}`;
};

// ✅ Register Controller
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword)
      return res.status(400).json({ success: false, message: "All fields are required." });

    if (password !== confirmPassword)
      return res.status(400).json({ success: false, message: "Passwords do not match." });

    const hashedPassword = await hashPassword(password);
    const result = await createUser(name, email, hashedPassword);

    res.status(201).json({ success: true, message: "User registered successfully", data: result });
  } catch (error) {
    console.error("❌ Registration error:", error);
    res.status(500).json({ success: false, message: "Error during registration" });
  }
};

// ✅ Login Controller
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);

    if (!user) return res.status(404).json({ Error: "User not found" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ Error: "Password is incorrect" });

    const secretKey = process.env.JWT_SECRET || "default_secret_key";
    const token = jwt.sign({ id: user.user_id }, secretKey, { expiresIn: "1d" });

    res.cookie("token", token, { httpOnly: true, sameSite: "strict" });
    res.json({ Status: "User logged in successfully", token });
  } catch (error) {
    console.error("❌ Login error:", error);
    res.status(500).json({ Error: "Error during login" });
  }
};

// ✅ Logout Controller
export const logoutUser = (req, res) => {
  res.clearCookie("token", { httpOnly: true, secure: true, sameSite: "None" });
  res.json({ success: true, message: "User logged out successfully" });
};

// ✅ Change Password
export const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await findUserById(req.userId);

    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const isValid = await bcrypt.compare(oldPassword, user.password);
    if (!isValid) return res.status(400).json({ success: false, message: "Incorrect old password" });

    const newHashed = await bcrypt.hash(newPassword, saltRounds);
    await updateUserPassword(req.userId, newHashed);

    res.json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    console.error("❌ Password change error:", error);
    res.status(500).json({ success: false, message: "Error changing password" });
  }
};

// ✅ Create or Update Profile
export const upsertUserProfile = async (req, res) => {
  try {
    const user_id = req.user_id;
    const { name, email, mobile, location, about } = req.body;

    const folder = getUserFolder(name, user_id);
    const profileData = {
      name,
      email,
      mobile,
      location,
      about,
      profile_image: req.files?.profile_image?.[0]
        ? `users_profiles/${folder}/${req.files.profile_image[0].filename}`
        : null,
      resume_file: req.files?.resume_file?.[0]
        ? `users_profiles/${folder}/${req.files.resume_file[0].filename}`
        : null,
    };

    const result = await updateUserProfile(user_id, profileData);
    res.status(200).json(result);
  } catch (error) {
    console.error("❌ Profile upsert error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// ✅ Fetch Profile
export const fetchUserProfile = async (req, res) => {
  try {
    const user = await findUserById(req.user_id);
    if (!user) return res.status(404).json({ error: "Profile not found" });

    res.status(200).json(user);
  } catch (error) {
    console.error("❌ Fetch profile error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// ✅ Delete Profile
export const deleteUserProfile = async (req, res) => {
  try {
    const result = await deleteUser(req.user_id);
    res.status(200).json(result);
  } catch (error) {
    console.error("❌ Delete profile error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
