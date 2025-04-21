import jwt from "jsonwebtoken";

export const verifyUser = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from "Bearer <token>"

  if (!token) {
    console.log("Error: No token provided");
    return res.status(401).json({ Error: "No token provided" });
  }

  const secretKey = process.env.JWT_SECRET || "default_secret_key"; // Use secret key from .env

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.log("Error: Invalid Token", err);
      return res.status(403).json({ Error: "Invalid Token!" });
    }

    console.log("Decoded Token:", decoded); // Debugging log
    req.user_id = decoded.id; // Attach user ID to request
    next();
  });
};
