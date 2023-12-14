import mongoose from "mongoose";
const HomeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    phonenumber: {
      type: String,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    }
  
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("contact", HomeSchema);