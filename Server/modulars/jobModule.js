import { pool } from "../utils/db.js";

// Create
export const createJob = (job) => {
  const {
    job_title,
    job_location,
    job_type,
    job_opening_number,
    salary,
    description
  } = job;

  const sql = `
    INSERT INTO job (job_title, job_location, job_type, job_opening_number, salary, description)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  return new Promise((resolve, reject) => {
    pool.query(sql, [job_title, job_location, job_type, job_opening_number, salary, description], (err, result) => {
      if (err) return reject(err);
      resolve({ id: result.insertId, ...job });
    });
  });
};

// Read
export const getAllJobs = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM job", (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

// Update
export const updateJobById = (id, job) => {
  const {
    job_title,
    job_location,
    job_type,
    job_opening_number,
    salary,
    description
  } = job;

  const sql = `
    UPDATE job
    SET job_title = ?, job_location = ?, job_type = ?, job_opening_number = ?, salary = ?, description = ?
    WHERE id = ?
  `;
  return new Promise((resolve, reject) => {
    pool.query(sql, [job_title, job_location, job_type, job_opening_number, salary, description, id], (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
};

// Delete
export const deleteJobById = (id) => {
  return new Promise((resolve, reject) => {
    pool.query("DELETE FROM job WHERE id = ?", [id], (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
};
