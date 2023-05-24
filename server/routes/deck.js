import express from "express";
const router = express.Router();

import { verifyToken } from "../middleware/auth.js";

import {
  getAllDecks,
  getDeckById,
  createDeck,
  updateDeck,
  deleteDeck,
} from "../controllers/deck.js";

router.use(verifyToken);

router.route("/").get(getAllDecks).post(createDeck);
router.route("/:id").get(getDeckById).put(updateDeck).delete(deleteDeck);

export default router;
