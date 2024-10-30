import { Schema, model } from "mongoose";

const TagSchema = new Schema({
  name: String,
  created_at: Date,
  contents: {
    type: Schema.Types.ObjectId,
    ref: "Content",
  },
});

export const Tag = model("Tag", TagSchema);
