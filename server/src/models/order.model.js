import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    items: {
      type: Object,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    address: {
      type: Object,
      default: {},
    },
    status: {
      type: String,
      default: "Processing",
    },
    date: {
      type: Date,
      default: Date.now,
    },
    payment: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
