import { Schema, model } from "mongoose";

const ContentSchema = new Schema({
  title: String,
  description: String,
  thumbnail: String,
  bgColor: String,
  textColor: String,
  mainCategory: String,
  created_at: Date,
  type: String,
  language: String,
  authors: {
    type: Schema.Types.ObjectId,
    ref: "Author",
  },
  //   categories: []
  //   chapters: []
});

export const Content = model("Content", ContentSchema);
