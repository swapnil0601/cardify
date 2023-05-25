import express from "express";
const router = express.Router();

import { verifyToken } from "../middleware/auth.js";

import {
  getAllFlashcards,
  getFlashcardbyID,
  createFlashcard,
  editFlashcard,
  deleteFlashcard,
  updateFlashcard,
} from "../controllers/flashcard.js";

router.use(verifyToken);

router.route("/").get(getAllFlashcards).post(createFlashcard);
router
  .route("/:id")
  .get(getFlashcardbyID)
  .patch(editFlashcard)
  .delete(deleteFlashcard);
router.route("/review/:id").patch(updateFlashcard);

export default router;
