import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    customerPhone: {
      type: String, // do để number thì không lưu được số 0 đầu
      required: true,
    },
    customerEmail: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    checkInTime: {
      type: Date,
      required: true,
    },
    deposit: {
      type: mongoose.Schema.Types.Decimal128,
      default: 0.0,
    },
    status: {
      type: String,
      enum: ["Pending", "Arrived", "Cancelled"],
      default: "Pending",
    },
    statusHistory: [
      {
        status: {
          type: String,
          enum: ["Pending", "Arrived", "Cancelled"],
        },
        changedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    tableId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Table",
    },
    isWalkIn: {
      type: Boolean,
      default: false,
    },
    tableHistories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TableHistory",
      },
    ],
    note: { type: String, default: "" },
  },
  { timestamps: true }
);

// Create an index on status and checkInTime for auto-cancellation
reservationSchema.index({ status: 1, checkInTime: 1 });

const reservationModel = mongoose.model("Reservation", reservationSchema);

export default reservationModel;
