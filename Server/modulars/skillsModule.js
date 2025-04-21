import { pool } from "../utils/db.js";

// 🔹 Add Skill
export const addSkill = (user_id, { skill_name}) => {
  return new Promise((resolve, reject) => {
    const sql = `
      INSERT INTO skills (user_id, skill_name) 
      VALUES (?, ?)
    `;
    pool.query(sql, [user_id, skill_name], (err, result) => {
      if (err) return reject(err);
      resolve({ message: "Skill added successfully", skill_id: result.insertId });
    });
  });
};

// 🔹 Fetch Skills by User ID
export const getSkillsByUserId = (user_id) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM skills WHERE user_id = ?`;
    pool.query(sql, [user_id], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};


// 🔹 Delete Skill
export const deleteSkill = (skill_id) => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM skills WHERE id = ?`;
    pool.query(sql, [skill_id], (err, result) => {
      if (err) return reject(err);
      resolve({ message: "Skill deleted successfully" });
    });
  });
};
