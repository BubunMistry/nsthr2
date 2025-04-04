import { pool } from "../utils/db.js";

// 🔹 Add Experience
export const addExperience = (user_id, { company, role, start_date, end_date, description }) => {
  return new Promise((resolve, reject) => {
    const sql = `
      INSERT INTO experience (user_id, company, role, start_date, end_date, description) 
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    pool.query(sql, [user_id, company, role, start_date, end_date, description], (err, result) => {
      if (err) return reject(err);
      resolve({ message: "Experience added successfully", exp_id: result.insertId });
    });
  });
};

// 🔹 Fetch Experience by User ID
export const getExperienceByUserId = (user_id) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM experience WHERE user_id = ?`;
    pool.query(sql, [user_id], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

// 🔹 Update Experience
export const updateExperience = (exp_id, { company, role, start_date, end_date, description }) => {
  return new Promise((resolve, reject) => {
    const sql = `
      UPDATE experience 
      SET company = ?, role = ?, start_date = ?, end_date = ?, description = ?
      WHERE id = ?
    `;
    pool.query(sql, [company, role, start_date, end_date, description, exp_id], (err, result) => {
      if (err) return reject(err);
      resolve({ message: "Experience updated successfully" });
    });
  });
};

// 🔹 Delete Experience
export const deleteExperience = (exp_id) => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM experience WHERE id = ?`;
    pool.query(sql, [exp_id], (err, result) => {
      if (err) return reject(err);
      resolve({ message: "Experience deleted successfully" });
    });
  });
};
