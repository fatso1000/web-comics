import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
  name: String,
  created_at: Date,
  contents: {
    type: Schema.Types.ObjectId,
    ref: "Content",
  },
});

export const Category = model("Category", CategorySchema);
