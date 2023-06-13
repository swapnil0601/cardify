import { registerUser } from "./controllers/auth.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import deckRoutes from "./routes/deck.js";
import flashcardRoutes from "./routes/flashcard.js";
// import { verifyToken } from "./middleware/auth.js";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
app.use(express.json());

import morgan from "morgan";
app.use(morgan("common"));

import bodyParser from "body-parser";
app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));

import cors from "cors";
app.use(cors());

import multer from "multer";

const upload = multer({
  dest: "uploads/",
  limits: {
    fileSize: 50 * 1024 * 1024,
  },
  allowed: ["image/jpeg", "image/png", "image/gif", "image/svg+xml"],
});
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// ROUTES WITH FILES
app.post("/auth/register", upload.single("profileImg"), registerUser);
app.use("/auth", authRoutes);

// ROUTES WITHOUT FILES
app.use("/user", userRoutes);
app.use("/deck", deckRoutes);
app.use("/flashcard", flashcardRoutes);
/* MONGOOSE SETUP */
import mongoose from "mongoose";
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
