import express from "express";
import { createRoom, deleteRoom, getAllRoom, getRoomById, updateRoom } from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();


router.get("/" , getAllRoom);
router.get("/:id" , getRoomById);
router.post("/:hotelId" , verifyAdmin , createRoom);
router.put("/:id" , verifyAdmin , updateRoom);
router.delete("/:id/:hotelId" , verifyAdmin , deleteRoom);

export default router;