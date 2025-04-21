import {
  applyForJob,
  getUserApplications,
  getJobApplicants,
  updateAppStatus,
  removeApplication,
  getAllApplicantsWithJobs,
} from "../modulars/applicationModule.js";

// 🔹 Apply for a job
export const createApplication = async (req, res) => {
  try {
    const user_id = req.user_id;
    const { job_id } = req.body;

    const result = await applyForJob(user_id, job_id);
    res.json(result);
  } catch (error) {
    //Only log real internal errors
    if (error.message !== "Already applied to this job") {
      console.error("Application creation error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }

    // Return the specific error message
    res.status(400).json({ error: error.message });
  }
};

// 🔹 Fetch all applications by user
export const fetchUserApplications = async (req, res) => {
  try {
    const user_id = req.user_id;

    const result = await getUserApplications(user_id);
    res.json(result);
  } catch (error) {
    console.error("Fetch applications error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const fetchJobApplicants = async (req, res) => {
  try {
    const { job_title } = req.query; // using query param for search

    if (!job_title) {
      return res.status(400).json({ error: "Job title is required for search" });
    }

    const result = await getJobApplicants(job_title);
    res.json(result);
  } catch (error) {
    console.error("Fetch applicants error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// 🔹 Get All Applicants with Job Info
export const fetchAllApplicantsWithJobs = async (req, res) => {
  try {
    const result = await getAllApplicantsWithJobs();
    res.json(result);
  } catch (error) {
    console.error("Error fetching all applicants with jobs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


// 🔹 Update application status contoller
export const modifyApplicationStatus = async (req, res) => {
  try {
    const { application_id, status } = req.body;

    if (!application_id || !status) {
      return res.status(400).json({ error: "Application ID and status are required" });
    }

    const result = await updateAppStatus(application_id, status);
    res.json(result);
  } catch (error) {
    console.error("Update application status error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// 🔹 Delete application contoller
export const deleteApplication = async (req, res) => {
  try {
    const { application_id } = req.body;

    if (!application_id) {
      return res.status(400).json({ error: "Application ID is required" });
    }

    const result = await removeApplication(application_id);
    res.json(result);
  } catch (error) {
    console.error("Delete application error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
