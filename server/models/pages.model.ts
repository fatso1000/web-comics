import { Schema, model } from "mongoose";

const PageSchema = new Schema({
  imageUrl: String,
  chapters: {
    type: Schema.Types.ObjectId,
    ref: "Chapter",
  },
});

export const Page = model("Page", PageSchema);
