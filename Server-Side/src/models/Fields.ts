import mongoose, { Document, Schema } from "mongoose";

export interface IField extends Document {
  name: string;
  description?: string;
}

const FieldSchema: Schema = new Schema<IField>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IField>("Field", FieldSchema);