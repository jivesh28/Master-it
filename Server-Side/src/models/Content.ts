import mongoose, { Document, Schema } from "mongoose";
import { INiche } from "./Niche";

export interface IContent extends Document {
  title: string;
  description?: string;
  type: "text" | "image" | "video";
  fileUrl?: string; // for images/videos
  niche: INiche["_id"];
}

const ContentSchema: Schema = new Schema<IContent>(
  {
    title: { type: String, required: true },
    description: { type: String },
    type: {
      type: String,
      enum: ["text", "image", "video"],
      default: "text",
    },
    fileUrl: { type: String },
    niche: { type: Schema.Types.ObjectId, ref: "Niche", required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IContent>("Content", ContentSchema);