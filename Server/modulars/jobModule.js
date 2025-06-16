import { pool } from "../utils/db.js";

// Create a new job
export const createJob = (job) => {
  const {
    job_title,
    job_location,
    job_type,
    job_opening_number,
    salary,
    description,
  } = job;

  const sql = `
    INSERT INTO job (job_title, job_location, job_type, job_opening_number, salary, description)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  return new Promise((resolve, reject) => {
    pool.query(
      sql,
      [job_title, job_location, job_type, job_opening_number, salary, description],
      (err, result) => {
        if (err) return reject(err);
        resolve({ id: result.insertId, ...job });
      }
    );
  });
};

// Get all jobs, with optional search by keyword and/or location
export const getAllJobs = (filters = {}) => {
  const { keyword = "", location = "" } = filters;
  let sql = `SELECT * FROM job WHERE 1=1`;
  const params = [];

  if (keyword) {
    sql += ` AND job_title LIKE ?`;
    params.push(`%${keyword}%`);
  }

  if (location) {
    sql += ` AND job_location LIKE ?`;
    params.push(`%${location}%`);
  }

  return new Promise((resolve, reject) => {
    pool.query(sql, params, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

// Update job by ID
export const updateJobById = (id, job) => {
  const {
    job_title,
    job_location,
    job_type,
    job_opening_number,
    salary,
    description,
  } = job;

  const sql = `
    UPDATE job
    SET job_title = ?, job_location = ?, job_type = ?, job_opening_number = ?, salary = ?, description = ?
    WHERE id = ?
  `;
  return new Promise((resolve, reject) => {
    pool.query(
      sql,
      [job_title, job_location, job_type, job_opening_number, salary, description, id],
      (err) => {
        if (err) return reject(err);
        resolve();
      }
    );
  });
};

// Delete job by ID
export const deleteJobById = (id) => {
  return new Promise((resolve, reject) => {
    pool.query("DELETE FROM job WHERE id = ?", [id], (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
};
