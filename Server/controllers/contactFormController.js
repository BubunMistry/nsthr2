import { pool } from "../utils/db.js";

export const submitContactForm = (req, res) => {
  console.log('Form submission received:', req.body);

  const { first_name, last_name, email, mobile, company, purpose, message } = req.body;

  const query = `
    INSERT INTO clients_data (first_name, last_name, email, mobile, company, purpose, message)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [first_name, last_name, email, mobile, company, purpose, message];

  pool.query(query, values, (err, result) => {
    if (err) {
      console.error('DB error:', err);
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

export const deleteContactForm = (req, res) => {
  const { id } = req.params;
  
  pool.query('DELETE FROM clients_data WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('DB error:', err);
      return res.status(500).json({ message: 'Deletion failed', error: err });
    }
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'No contact form found with that ID' });
    }
    
    res.status(200).json({ message: 'Contact form deleted successfully' });
  });
};