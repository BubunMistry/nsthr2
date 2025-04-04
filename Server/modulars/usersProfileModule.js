import { pool } from "../utils/db.js";

// Create User Profile
export const createUserProfile = (user_id, { fullname, mobile, email, location, about }) => {
    return new Promise((resolve, reject) => {
      console.log("Creating Profile for User ID:", user_id); // Debugging log
  
      const sql = "INSERT INTO user_profile (user_id, fullname, mobile, email, location, about) VALUES (?, ?, ?, ?, ?, ?)";
      pool.query(sql, [user_id, fullname, mobile, email, location, about], (err, result) => {
        if (err) {
          console.error("Database Error:", err); // Debugging log
          return reject(err);
        }
        console.log("Profile Created Successfully:", result.insertId); // Debugging log
        resolve({ message: "User profile created successfully" });
      });
    });
  };

// Get User Profile
export const getUserProfile = (user_id) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM user_profile WHERE user_id = ?";
    pool.query(sql, [user_id], (err, result) => {
      if (err) return reject(err);
      resolve(result.length > 0 ? result[0] : null);
    });
  });
};

// Update User Profile
export const updateUserProfile = (user_id, { fullname, mobile, location, about }) => {
  return new Promise((resolve, reject) => {
    const sql = "UPDATE user_profile SET fullname = ?, mobile = ?, location = ?, about = ? WHERE user_id = ?";
    pool.query(sql, [fullname, mobile, location, about, user_id], (err, result) => {
      if (err) return reject(err);
      resolve({ message: "Profile updated successfully" });
    });
  });
};

// Delete User Profile
export const deleteUserProfile = (user_id) => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM user_profile WHERE user_id = ?";
    pool.query(sql, [user_id], (err, result) => {
      if (err) return reject(err);
      resolve({ message: "Profile deleted successfully" });
    });
  });
};
