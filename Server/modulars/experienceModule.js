
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
export const updateExperience = (exp_id, newData) => {
  return new Promise((resolve, reject) => {
    // First, fetch existing data
    const fetchSql = `SELECT * FROM experience WHERE id = ?`;
    pool.query(fetchSql, [exp_id], (fetchErr, results) => {
      if (fetchErr) return reject(fetchErr);
      if (results.length === 0) return reject(new Error("Experience not found"));

      const existingData = results[0];

      // Merge existing data with new data
      const updatedData = {
        company: newData.company || existingData.company,
        role: newData.role || existingData.role,
        start_date: newData.start_date || existingData.start_date,
        end_date: newData.end_date || existingData.end_date,
        description: newData.description || existingData.description,
      };

      // Now update
      const updateSql = `
        UPDATE experience 
        SET company = ?, role = ?, start_date = ?, end_date = ?, description = ?
        WHERE id = ?
      `;
      const params = [
        updatedData.company,
        updatedData.role,
        updatedData.start_date,
        updatedData.end_date,
        updatedData.description,
        exp_id,
      ];

      pool.query(updateSql, params, (updateErr, result) => {
        if (updateErr) return reject(updateErr);
        resolve({ message: "Experience updated successfully" });
      });
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
