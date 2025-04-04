import {
    addExperience,
    getExperienceByUserId,
    updateExperience,
    deleteExperience
  } from "../modulars/experienceModule.js";
  
  // ✅ Create Experience
  export const createExperience = async (req, res) => {
    try {
      const user_id = req.user_id; // Extract from token
      const experienceData = req.body;
  
      const result = await addExperience(user_id, experienceData);
      res.json(result);
    } catch (error) {
      console.error("Experience creation error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  // ✅ Fetch Experience for Logged-in User
  export const fetchExperience = async (req, res) => {
    try {
      const user_id = req.user_id; // Extract from token
  
      const result = await getExperienceByUserId(user_id);
      res.json(result);
    } catch (error) {
      console.error("Experience fetch error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  // ✅ Update Experience
  export const modifyExperience = async (req, res) => {
    try {
      const { exp_id, company, role, start_date, end_date, description } = req.body;
  
      if (!exp_id) {
        return res.status(400).json({ error: "Experience ID is required" });
      }
  
      const result = await updateExperience(exp_id, { company, role, start_date, end_date, description });
      res.json(result);
    } catch (error) {
      console.error("Experience update error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  // ✅ Delete Experience
  export const removeExperience = async (req, res) => {
    try {
      const { exp_id } = req.body;
  
      if (!exp_id) {
        return res.status(400).json({ error: "Experience ID is required" });
      }
  
      const result = await deleteExperience(exp_id);
      res.json(result);
    } catch (error) {
      console.error("Experience delete error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  