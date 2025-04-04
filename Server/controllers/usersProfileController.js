import { createUserProfile, deleteUserProfile, getUserProfile, updateUserProfile } from "../modulars/usersProfileModule.js";

// Create Profile controller
export const createProfile = async (req, res) => {
    try {
      console.log("Request Headers:", req.headers); // Debugging log
      console.log("Request Body:", req.body); // Debugging log
      console.log("Extracted user_id:", req.user_id); // Debugging log
  
      if (!req.user_id) {
        return res.status(401).json({ error: "Unauthorized: Invalid token" });
      }
  
      const user_id = req.user_id;
      const profileData = req.body;
  
      const result = await createUserProfile(user_id, profileData);
      res.json(result);
    } catch (error) {
      console.error("Profile creation error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

// Get Profile
export const fetchProfile = async (req, res) => {
  try {
    const user_id = req.user_id;
    const profile = await getUserProfile(user_id);

    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }
    res.json(profile);
  } catch (error) {
    console.error("Fetch profile error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update Profile
export const updateProfile = async (req, res) => {
  try {
    const user_id = req.user_id;
    const profileData = req.body;

    const result = await updateUserProfile(user_id, profileData);
    res.json(result);
  } catch (error) {
    console.error("Profile update error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete Profile
export const removeProfile = async (req, res) => {
  try {
    const user_id = req.user_id;
    const result = await deleteUserProfile(user_id);
    res.json(result);
  } catch (error) {
    console.error("Profile deletion error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
