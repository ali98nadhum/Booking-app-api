
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        requirred: true,
        unique: true
    },
    email: {
        type: String,
        requirred: true,
        unique: true
    },
    password: {
        type: String,
        requirred: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
} , {timestamps: true})



export default mongoose.model("User" , UserSchema)