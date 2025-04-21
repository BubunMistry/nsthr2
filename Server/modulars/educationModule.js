import { pool } from "../utils/db.js";

// 🔹 Add Education
export const addEducation = (user_id, { institution, degree, start_year, end_year, description }) => {
  return new Promise((resolve, reject) => {
    const sql = `
      INSERT INTO education (user_id, institution, degree, start_year, end_year, description) 
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    pool.query(sql, [user_id, institution, degree, start_year, end_year, description], (err, result) => {
      if (err) return reject(err);
      resolve({ message: "Education added successfully", edu_id: result.insertId });
    });
  });
};

// 🔹 Fetch Education by User ID
export const getEducationByUserId = (user_id) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM education WHERE user_id = ?`;
    pool.query(sql, [user_id], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

// 🔹 Update Education (Partial)
export const updateEducation = (edu_id, updates) => {
  return new Promise((resolve, reject) => {
    // Step 1: Get current data
    const selectSql = `SELECT * FROM education WHERE id = ?`;
    pool.query(selectSql, [edu_id], (err, results) => {
      if (err) return reject(err);
      if (results.length === 0) return reject({ message: "Education record not found" });

      const existing = results[0];

      // Step 2: Merge updates with existing
      const {
        institution = existing.institution,
        degree = existing.degree,
        start_year = existing.start_year,
        end_year = existing.end_year,
        description = existing.description,
      } = updates;

      // Step 3: Run update
      const updateSql = `
        UPDATE education 
        SET institution = ?, degree = ?, start_year = ?, end_year = ?, description = ?
        WHERE id = ?
      `;
      pool.query(updateSql, [institution, degree, start_year, end_year, description, edu_id], (updateErr, result) => {
        if (updateErr) return reject(updateErr);
        resolve({ message: "Education updated successfully" });
      });
    });
  });
};


// 🔹 Delete Education
export const deleteEducation = (edu_id) => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM education WHERE id = ?`;
    pool.query(sql, [edu_id], (err, result) => {
      if (err) return reject(err);
      resolve({ message: "Education deleted successfully" });
    });
  });
};
