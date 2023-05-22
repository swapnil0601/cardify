import express from 'express';
const router = express.Router();

import { verifyToken } from '../middleware/auth.js';

import {
  getAllFlashcards,
  getFlashcardById,
  createFlashcard,
  editFlashcard,
  deleteFlashcard,
  updateFlashcard
} from '../controllers/flashcardController.js';

router.use(verifyToken);

router.route('/').get(getAllFlashcards).post(createFlashcard);
router.route('/:id').get(getFlashcardById).put(editFlashcard).delete(deleteFlashcard);
router.route('/review/:id').put(updateFlashcard);

export default router;