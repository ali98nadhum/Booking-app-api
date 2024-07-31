import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      requirred: true,
    },
    price: {
      type: Number,
      requirred: true,
    },
    maxPeople: {
      type: Number,
      requirred: true,
    },
    desc: {
      type: String,
      requirred: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: [{ type: [Date] }] }],
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
