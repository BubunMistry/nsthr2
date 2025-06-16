import { pool } from "../utils/db.js";

export const getAllUsers = (search, callback) => {
  const query = `
    SELECT user_id, name, email, mobile, location, created_at, about, profile_image, resume_file
    FROM users
    WHERE name LIKE ? OR email LIKE ? OR location LIKE ?
  `;
  const searchPattern = `%${search}%`;

  pool.query(query, [searchPattern, searchPattern, searchPattern], (err, results) => {
    if (err) {
      console.error("❌ Database query error:", err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

export const getUserByEmail = (email, callback) => {
  const query = `
    SELECT * FROM users WHERE email = ?
  `;
  pool.query(query, [email], (err, results) => {
    if (err) {
      console.error("❌ Error fetching user by email:", err);
      return callback(err, null);
    }
    callback(null, results[0]); // Return single user
  });
};
