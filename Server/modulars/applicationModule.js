import { pool } from "../utils/db.js";

export const applyForJob = (user_id, job_id) => {
    return new Promise((resolve, reject) => {
      const checkSql = `SELECT id FROM applications WHERE user_id = ? AND job_id = ?`;
      pool.query(checkSql, [user_id, job_id], (err, results) => {
        if (err) return reject(err);
        if (results.length > 0) {
          const error = new Error("Already applied to this job");
          error.message = "Already applied to this job"; // 🔹 tag it if needed
          return reject(error);
        }
  
        const insertSql = `INSERT INTO applications (user_id, job_id) VALUES (?, ?)`;
        pool.query(insertSql, [user_id, job_id], (err, result) => {
          if (err) return reject(err);
          resolve({ message: "Application submitted", application_id: result.insertId });
        });
      });
    });
  };
  

// 🔹 Get Applications for a User
export const getUserApplications = (user_id) => {
  return new Promise((resolve, reject) => {
    const sql = `
      SELECT a.id AS application_id, a.applied_at, j.*
      FROM applications a
      JOIN job j ON a.job_id = j.id
      WHERE a.user_id = ?
    `;
    pool.query(sql, [user_id], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

export const getJobApplicants = (job_title) => {
  return new Promise((resolve, reject) => {
    const sql = `
      SELECT 
        a.id AS application_id,
        a.status,
        a.applied_at,
        u.*,
        j.job_title
      FROM applications a
      JOIN users u ON a.user_id = u.user_id
      JOIN job j ON a.job_id = j.id
      WHERE j.job_title LIKE ?
    `;
    pool.query(sql, [`%${job_title}%`], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};


// 🔹 Get All Applicants with Job Info
export const getAllApplicantsWithJobs = () => {
  return new Promise((resolve, reject) => {
    const sql = `
      SELECT 
        a.id AS application_id,
        a.status,
        a.applied_at,
        u.user_id,
        u.name,
        u.email,
        u.mobile,
        j.id AS job_id,
        j.job_title AS job_title,
        j.job_location,
        j.job_type
      FROM applications a
      JOIN users u ON a.user_id = u.user_id
      JOIN job j ON a.job_id = j.id
      ORDER BY a.applied_at DESC
    `;
    pool.query(sql, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};


// 🔹 Update Application Status
export const updateAppStatus = (application_id, status) => {
  return new Promise((resolve, reject) => {
    const sql = `UPDATE applications SET status = ? WHERE id = ?`;
    pool.query(sql, [status, application_id], (err, result) => {
      if (err) return reject(err);
      resolve({ message: "Application status updated" });
    });
  });
};

// 🔹 Delete Application
export const removeApplication = (application_id) => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM applications WHERE id = ?`;
    pool.query(sql, [application_id], (err, result) => {
      if (err) return reject(err);
      resolve({ message: "Application deleted successfully" });
    });
  });
};
