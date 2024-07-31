import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        requirred: true
    },
    type: {
        type: String,
        requirred: true
    },
    city: {
        type: String,
        requirred: true
    },
    address: {
        type: String,
        requirred: true
    },
    distance: {
        type: String,
        requirred: true
    },
    photos: {
        type: [String],
    },
    title: {
        type: String,
        requirred: true
    },
    desc: {
        type: String,
        requirred: true
    },
    rating: {
        type: Number,
        min:0,
        max:5
    },
    rooms: {
        type: [String],
    },
    cheapestPrice: {
        type: Number,
        requirred: true
    },
    featured: {
        type: Boolean,
        default: false
    },

} , {timestamps: true})



export default mongoose.model("Hotel" , HotelSchema)