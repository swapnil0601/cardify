import express from 'express';
import {
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from '../controllers/userController';

const router = express.Router();

import { verifyToken } from '../middleware/auth.js';

router.route('/').get(getUsers);
router.route('/:id').get(getUserById).put(verifyToken, updateUser).delete(verifyToken, deleteUser); 

export default router;
