import express from "express";
import { registerUser, loginUser } from "../controllers/auth.js";

const router = express.Router();

// Login user
router.post("/login", loginUser);

export default router;
