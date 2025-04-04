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

// 🔹 Update Education
export const updateEducation = (edu_id, { institution, degree, start_year, end_year, description }) => {
  return new Promise((resolve, reject) => {
    const sql = `
      UPDATE education 
      SET institution = ?, degree = ?, start_year = ?, end_year = ?, description = ?
      WHERE id = ?
    `;
    pool.query(sql, [institution, degree, start_year, end_year, description, edu_id], (err, result) => {
      if (err) return reject(err);
      resolve({ message: "Education updated successfully" });
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
