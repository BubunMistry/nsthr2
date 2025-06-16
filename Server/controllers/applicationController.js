import Application from "../modulars/applicationModel.js";

export const createApplication = (req, res) => {
  const {
    job_id,
    name,
    phone,
    email,
    designation,
    experience,
    skills,
  } = req.body;

  const cv = req.file?.filename || null;

  if (!job_id || !name || !email || !cv) {
    return res.status(400).json({
      message: "Required fields are missing (job_id, name, email, cv)",
    });
  }

  const newApplication = {
    job_id,
    name,
    phone,
    email,
    designation,
    experience,
    skills,
    cv,
  };

  Application.create(newApplication, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "DB error", error: err });
    }
    res.status(201).json({
      message: "Application submitted successfully",
      id: result.insertId,
    });
  });
};

export const getAllApplications = (req, res) => {
  Application.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ message: "DB error", error: err });
    }
    res.json(results);
  });
};

export const getApplicationById = (req, res) => {
  Application.getById(req.params.id, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "DB error", error: err });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: "Application not found" });
    }
    res.json(result[0]);
  });
};

export const updateApplication = (req, res) => {
  Application.update(req.params.id, req.body, (err) => {
    if (err) {
      return res.status(500).json({ message: "DB error", error: err });
    }
    res.json({ message: "Application updated successfully" });
  });
};

export const deleteApplication = (req, res) => {
  Application.delete(req.params.id, (err) => {
    if (err) {
      return res.status(500).json({ message: "DB error", error: err });
    }
    res.json({ message: "Application deleted successfully" });
  });
};

export const searchApplications = (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ message: "Search query is required" });
  }

  Application.search(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "DB error", error: err });
    }
    res.json(results);
  });
};

export const updateApplicationStatus = (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  const allowedStatuses = ["Pending", "Selected", "Rejected"];

  if (!allowedStatuses.includes(status)) {
    return res.status(400).json({ 
      message: "Invalid status value",
      allowedStatuses
    });
  }

  Application.updateStatus(id, status, (err) => {
    if (err) {
      return res.status(500).json({ message: "DB error", error: err });
    }
    res.json({ message: "Application status updated successfully" });
  });
};