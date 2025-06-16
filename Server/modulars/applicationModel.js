import db from "../db.js";

const Application = {
  create: (data, callback) => {
    const {
      job_id,
      name,
      phone,
      email,
      designation,
      experience,
      skills,
      cv,
    } = data;

    const sql = `
      INSERT INTO applications (
        job_id, name, phone, email, designation, experience, skills, cv, applied_at, status
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), 'Pending')
    `;

    db.query(
      sql,
      [job_id, name, phone, email, designation, experience, skills, cv],
      callback
    );
  },

  getAll: (callback) => {
    const sql = `SELECT * FROM applications ORDER BY applied_at DESC`;
    db.query(sql, callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM applications WHERE id = ?", [id], callback);
  },

  update: (id, data, callback) => {
    const { name, phone, email, designation, experience, skills } = data;
    const sql = `
      UPDATE applications
      SET name = ?, phone = ?, email = ?, designation = ?, experience = ?, skills = ?
      WHERE id = ?
    `;
    db.query(
      sql,
      [name, phone, email, designation, experience, skills, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query("DELETE FROM applications WHERE id = ?", [id], callback);
  },

  search: (query, callback) => {
    const sql = `
      SELECT * FROM applications 
      WHERE email LIKE ? OR phone LIKE ?
      ORDER BY applied_at DESC
    `;
    const searchTerm = `%${query}%`;
    db.query(sql, [searchTerm, searchTerm], callback);
  },

  updateStatus: (id, status, callback) => {
    const sql = `
      UPDATE applications
      SET status = ?
      WHERE id = ?
    `;
    db.query(sql, [status, id], callback);
  },
};

export default Application;
