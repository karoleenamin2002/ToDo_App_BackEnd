import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minLength: [3, "title must be more than 3 chars"],
      // unique:truu
    },
    status: {
      type: String,
      enum: ["To-Do", "In-progress", "Done"],
      default: "To-Do",
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const todoModel = mongoose.model("Todo", todoSchema);
export default todoModel;
