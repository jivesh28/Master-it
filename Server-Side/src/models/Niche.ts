import mongoose, { Document, Schema } from "mongoose";
import { IField } from './Fields'

export interface INiche extends Document {
  name: string;
  description?: string;
  field: IField["_id"];
}

const NicheSchema: Schema = new Schema<INiche>(
  {
    name: { type: String, required: true },
    description: { type: String },
    field: { type: Schema.Types.ObjectId, ref: "Field", required: true },
  },
  { timestamps: true }
);

export default mongoose.model<INiche>("Niche", NicheSchema);