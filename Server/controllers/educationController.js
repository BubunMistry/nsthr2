import {
    addEducation,
    getEducationByUserId,
    updateEducation,
    deleteEducation
  } from "../modulars/educationModule.js";
  
  // ✅ Create Education
  export const createEducation = async (req, res) => {
    try {
      const user_id = req.user_id; // Extract from token
      const educationData = req.body;
  
      const result = await addEducation(user_id, educationData);
      res.json(result);
    } catch (error) {
      console.error("Education creation error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  // ✅ Fetch Education for Logged-in User
  export const fetchEducation = async (req, res) => {
    try {
      const user_id = req.user_id; // Extract from token
  
      const result = await getEducationByUserId(user_id);
      res.json(result);
    } catch (error) {
      console.error("Education fetch error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  // ✅ Update Education
  export const modifyEducation = async (req, res) => {
    try {
      const { edu_id, institution, degree, start_year, end_year, description } = req.body;
  
      if (!edu_id) {
        return res.status(400).json({ error: "Education ID is required" });
      }
  
      const result = await updateEducation(edu_id, { institution, degree, start_year, end_year, description });
      res.json(result);
    } catch (error) {
      console.error("Education update error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  // ✅ Delete Education
  export const removeEducation = async (req, res) => {
    try {
      const { edu_id } = req.body;
  
      if (!edu_id) {
        return res.status(400).json({ error: "Education ID is required" });
      }
  
      const result = await deleteEducation(edu_id);
      res.json(result);
    } catch (error) {
      console.error("Education delete error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  