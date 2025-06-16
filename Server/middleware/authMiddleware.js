import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { findUserById } from "../modulars/authModule.js";

dotenv.config();

// Middleware to authenticate JWT token
export const authenticate = async (req, res, next) => {
  try {
    // Get token from cookies or Authorization header
    let token = req.cookies?.token || 
                req.headers?.authorization?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required"
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Check if user still exists
    const user = await findUserById(decoded.id);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User no longer exists"
      });
    }

    // Attach user to request
    req.userId = user.user_id;
    req.user = {
      id: user.user_id,
      email: user.email,
      name: user.name
    };

    next();
  } catch (error) {
    console.error("Authentication error:", error);

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Session expired, please login again"
      });
    }

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        success: false,
        message: "Invalid token"
      });
    }

    return res.status(500).json({
      success: false,
      message: "Authentication failed"
    });
  }
};

// Middleware to check admin privileges
export const isAdmin = (req, res, next) => {
  // Implement your admin check logic here
  // Example: Check if user.role === 'admin' from database
  if (!req.user?.isAdmin) {
    return res.status(403).json({
      success: false,
      message: "Unauthorized access"
    });
  }
  next();
};

// Middleware to check if user is authenticated but not required
export const optionalAuth = async (req, res, next) => {
  try {
    const token = req.cookies?.token || 
                 req.headers?.authorization?.replace("Bearer ", "");

    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await findUserById(decoded.id);
      
      if (user) {
        req.userId = user.user_id;
        req.user = {
          id: user.user_id,
          email: user.email,
          name: user.name
        };
      }
    }
  } catch (error) {
    // Ignore errors for optional authentication
    console.error("Optional auth error:", error);
  }
  next();
};

// Middleware to check if user owns the resource
export const isOwner = (resourceUserId) => {
  return (req, res, next) => {
    if (req.userId !== resourceUserId && !req.user?.isAdmin) {
      return res.status(403).json({
        success: false,
        message: "You don't have permission to access this resource"
      });
    }
    next();
  };
};

// CSRF protection middleware
export const csrfProtection = (req, res, next) => {
  if (req.method === "GET" || req.method === "HEAD" || req.method === "OPTIONS") {
    return next();
  }

  const csrfToken = req.headers["x-csrf-token"] || req.body._csrf;
  if (!csrfToken || !req.session.csrfToken === csrfToken) {
    return res.status(403).json({
      success: false,
      message: "Invalid CSRF token"
    });
  }
  next();
};

// Rate limiting middleware (using express-rate-limit)
export const rateLimiter = (windowMs, max) => {
  return (req, res, next) => {
    // Implement your rate limiting logic here
    // Or better, use express-rate-limit package
    next();
  };
};