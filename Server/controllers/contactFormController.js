// import  from '../utils/db.js';

import { pool } from "../utils/db.js";

export const submitContactForm = (req, res) => {
  console.log('Form submission received:', req.body); // Add this

  const { first_name, last_name, email, mobile, company, purpose, message } = req.body;

  const query = `
    INSERT INTO clients_data (first_name, last_name, email, mobile, company, purpose, message)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [first_name, last_name, email, mobile, company, purpose, message];

  pool.query(query, values, (err, result) => {
    if (err) {
      console.error('DB error:', err); // Add this
      return res.status(500).json({ message: 'Submission failed', error: err });
    }
    res.status(201).json({ message: 'Form submitted successfully' });
  });
};


export const getAllContactForms = (req, res) => {
  pool.query('SELECT * FROM clients_data ORDER BY submitted_at DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json(results);
  });
};
