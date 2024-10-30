import { Schema, model } from "mongoose";

const ChapterSchema = new Schema({
  title: String,
  description: String,
  thumbnail: String,
  number: Number,
  pagesCount: Number,
});

export const Chapter = model("Chapter", ChapterSchema);
