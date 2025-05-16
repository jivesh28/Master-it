import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: "SP" | "L" | "S" | "R" | "CC";
}

const UserSchema: Schema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["SP", "L", "S", "R", "CC"],
      default: "L",
    },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);