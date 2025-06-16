import {
  createJob,
  getAllJobs,
  updateJobById,
  deleteJobById,
} from "../modulars/jobModule.js";

// Create a new job
export const createJobController = async (req, res) => {
  try {
    const jobData = req.body;
    const result = await createJob(jobData);
    res.status(201).json({ status: "Job created successfully", job: result });
  } catch (err) {
    console.error("Create Job Error:", err);
    res.status(500).json({ error: "Failed to create job" });
  }
};

// Get all jobs with optional search
export const getAllJobsController = async (req, res) => {
  try {
    const { keyword = "", location = "" } = req.query;
    const jobs = await getAllJobs({ keyword, location });
    res.status(200).json(jobs);
  } catch (err) {
    console.error("Get Jobs Error:", err);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
};

// Update a job
export const updateJobController = async (req, res) => {
  try {
    const { id, ...updatedData } = req.body;
    if (!id) return res.status(400).json({ error: "Job ID is required" });

    await updateJobById(id, updatedData);
    res.status(200).json({ status: "Job updated successfully" });
  } catch (err) {
    console.error("Update Job Error:", err);
    res.status(500).json({ error: "Failed to update job" });
  }
};

// Delete a job
export const deleteJobController = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) return res.status(400).json({ error: "Job ID is required" });

    await deleteJobById(id);
    res.status(200).json({ status: "Job deleted successfully" });
  } catch (err) {
    console.error("Delete Job Error:", err);
    res.status(500).json({ error: "Failed to delete job" });
  }
};
