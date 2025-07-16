import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  capacity: {
    type: Number,
    required: true,
    min: 1,
  },
  type: {
    type: String,
    enum: ["Normal", "VIP"],
    default: "Normal",
  },
  historyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TableHistory",
    required: true,
  },
});

const tableModel = mongoose.model("Table", tableSchema);

export default tableModel;
