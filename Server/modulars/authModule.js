
import { pool } from "../utils/db.js";
import fs from "fs";

// Create a new user (basic)
export const createUser = (name, email, hashedPassword) => {
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    pool.query(sql, [name, email, hashedPassword], (err, result) => {
      if (err) return reject(err);
      resolve({ user_id: result.insertId, name, email });
    });
  });
};

// Find user by email
export const findUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM users WHERE email = ?";
    pool.query(sql, [email], (err, result) => {
      if (err) return reject(err);
      resolve(result.length > 0 ? result[0] : null);
    });
  });
};

// Find user by ID
export const findUserById = (userId) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM users WHERE user_id = ?";
    pool.query(sql, [userId], (err, result) => {
      if (err) return reject(err);
      resolve(result.length > 0 ? result[0] : null);
    });
  });
};


// Update user profile with optional file replacement
export const updateUserProfile = (user_id, profileData) => {
  return new Promise((resolve, reject) => {
    const selectSQL = "SELECT * FROM users WHERE user_id = ?";
    pool.query(selectSQL, [user_id], (err, results) => {
      if (err) return reject({ error: "Failed to fetch user" });

      const existing = results[0];
      if (!existing) return reject({ error: "User not found" });

      const mergedData = {
        name: profileData.name || existing.name,
        email: profileData.email || existing.email,
        mobile: profileData.mobile || existing.mobile,
        location: profileData.location || existing.location,
        about: profileData.about || existing.about,
        profile_image: profileData.profile_image || existing.profile_image,
        resume_file: profileData.resume_file || existing.resume_file,
      };

      const updateSQL = `
        UPDATE users SET
          name = ?, email = ?, mobile = ?, location = ?, about = ?,
          profile_image = ?, resume_file = ?
        WHERE user_id = ?
      `;

      const values = [
        mergedData.name,
        mergedData.email,
        mergedData.mobile,
        mergedData.location,
        mergedData.about,
        mergedData.profile_image,
        mergedData.resume_file,
        user_id,
      ];

      pool.query(updateSQL, values, (err) => {
        if (err) return reject({ error: "Failed to update profile" });
        resolve({ message: "Profile updated successfully" });
      });
    });
  });
};

// Delete user and remove profile files
export const deleteUser = (user_id) => {
  return new Promise((resolve, reject) => {
    const selectSQL = "SELECT profile_image, resume_file FROM users WHERE user_id = ?";
    pool.query(selectSQL, [user_id], (err, results) => {
      if (err) return reject({ error: "Failed to fetch user files" });

      const user = results[0];
      if (!user) return reject({ error: "User not found" });

      const deleteSQL = "DELETE FROM users WHERE user_id = ?";
      pool.query(deleteSQL, [user_id], (err) => {
        if (err) return reject({ error: "Failed to delete user" });

        // Delete uploaded files
        try {
          if (user.profile_image) fs.unlinkSync(`./uploads/users_profiles/${user.profile_image}`);
          if (user.resume_file) fs.unlinkSync(`./uploads/users_profiles/${user.resume_file}`);
        } catch (fileErr) {
          console.warn("File deletion warning:", fileErr.message);
        }

        resolve({ message: "User and profile data deleted successfully" });
      });
    });
  });
};














// Update user password
export const updateUserPassword = (userId, hashedPassword) => {
  return new Promise((resolve, reject) => {
    const sql = "UPDATE users SET password = ?, updated_at = NOW() WHERE user_id = ?";
    pool.query(sql, [hashedPassword, userId], (err, result) => {
      if (err) {
        console.error("Database error in updateUserPassword:", err);
        return reject(new Error("Failed to update password"));
      }
      
      if (result.affectedRows === 0) {
        return reject(new Error("User not found"));
      }
      
      resolve({
        success: true,
        affectedRows: result.affectedRows
      });
    });
  });
};