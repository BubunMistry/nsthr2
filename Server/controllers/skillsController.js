import {
  addSkill,
  getSkillsByUserId,
  deleteSkill,
} from "../modulars/skillsModule.js";

// Check if the skill already exists for the logged-in user
export const checkDuplicateSkill = async (req, res, next) => {
  try {
    const user_id = req.user_id; // Extracted from token
    const { skill_name } = req.body;

    if (!skill_name) {
      return res.status(400).json({ error: "Skill name is required" });
    }

    // Fetch skills for the user to check for duplication
    const existingSkills = await getSkillsByUserId(user_id);
    
    const skillExists = existingSkills.some(skill => skill.skill_name.toLowerCase() === skill_name.toLowerCase());
    
    if (skillExists) {
      return res.status(400).json({ error: "Skill already added" });
    }

    // If no duplicate skill, proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Error checking for duplicate skill:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create Skill
export const createSkill = async (req, res) => {
  try {
    const user_id = req.user_id; // Extract from token
    const skillData = req.body;

    const result = await addSkill(user_id, skillData);
    res.json(result);
  } catch (error) {
    console.error("Skill creation error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Fetch Skills for Logged-in User
export const fetchSkills = async (req, res) => {
  try {
    const user_id = req.user_id; // Extracted from verifyUser middleware

    const skills = await getSkillsByUserId(user_id);

    res.json({ skills }); // ✅ Wrap in { skills: [...] }
  } catch (error) {
    console.error("Skill fetch error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete Skill
export const removeSkill = async (req, res) => {
  try {
    const { skill_id } = req.body;

    if (!skill_id) {
      return res.status(400).json({ error: "Skill ID is required" });
    }

    const result = await deleteSkill(skill_id);
    res.json(result);
  } catch (error) {
    console.error("Skill delete error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
