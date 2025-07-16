import mongoose from "mongoose";

const tableHistorySchema = new mongoose.Schema({
  reservationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Reservation",
    required: true,
  },
  tableId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Table",
    required: true,
  },
  assignedTime: {
    type: Date,
    default: Date.now,
  },
  assignedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  checkInTime: {
    type: Date,
    required: true,
  },
  expectedCheckOutTime: {
    type: Date,
  },
  tableStatus: {
    type: String,
    enum: ["Available", "Occupied", "Pending", "Unavailable"],
    default: "Available",
  },
  note: {
    type: String,
    default: "",
  },
});

const tableHistoryModel = mongoose.model("TableHistory", tableHistorySchema);
export default tableHistoryModel;
