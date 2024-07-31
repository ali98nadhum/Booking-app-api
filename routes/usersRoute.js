import express from "express";
import { deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();




router.put("/:id", verifyUser , updateUser);
router.delete("/:id", verifyUser ,deleteUser);
router.get("/" ,verifyAdmin, getAllUsers);
router.get("/:id", verifyUser , getUserById)

export default router;