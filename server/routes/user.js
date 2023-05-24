import express from "express";
import {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/user.js";

const router = express.Router();

import { verifyToken } from "../middleware/auth.js";

router.route("/").get(getUsers);
router
  .route("/:id")
  .get(getUserById)
  .patch(verifyToken, updateUser)
  .delete(verifyToken, deleteUser);

export default router;
