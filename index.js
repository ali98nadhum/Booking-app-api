import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";
import usersRoute from "./routes/usersRoute.js";
import roomsRoute from "./routes/roomsRoute.js";
import hotelsRoute from "./routes/hotelsRoute.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log("Connected to DB (:")
    } catch (error) {
        throw error;
    }
}

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth" , authRoute);
app.use("/api/users" , usersRoute);
app.use("/api/hotels" , hotelsRoute);
app.use("/api/rooms" , roomsRoute);

app.use((err ,req , res , next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something is wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(8800, () => {
    connect();
  console.log("Connected on port 8800");
});
