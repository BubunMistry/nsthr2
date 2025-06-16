import { getAllUsers, getUserByEmail } from "../modulars/userModel.js";

export const fetchAllUsers = (req, res) => {
  const search = req.query.search || "";
  getAllUsers(search, (err, users) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Failed to fetch users",
        error: err.message,
      });
    }

    if (!users || users.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No users found",
      });
    }

    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  });
};

export const fetchUserByEmail = (req, res) => {
  const { email } = req.params;
  getUserByEmail(email, (err, user) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Error fetching user",
        error: err.message,
      });
    }

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  });
};
