import express from "express";
import {
  creteHotel,
  deleteHotel,
  getAllHotel,
  getHotelById,
  updateHotel,
} from "../controllers/hotelController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();


// Routes
router.get("/", getAllHotel);
router.get("/:id", getHotelById);
router.post("/",verifyAdmin , creteHotel);
router.put("/:id", verifyAdmin, updateHotel);
router.delete("/:id", verifyAdmin, deleteHotel);





export default router;
