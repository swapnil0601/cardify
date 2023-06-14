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


app.post("/api/auth/register", registerUser);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/deck", deckRoutes);
app.use("/api/flashcard", flashcardRoutes);

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
