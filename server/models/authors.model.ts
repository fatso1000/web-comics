import { Schema, model } from "mongoose";

const AuthorSchema = new Schema({
  fullName: String,
  description: String,
  thumbnail: String,
  created_at: Date,
  dateOfBirth: Date,
  nationality: String,
  contents: {
    type: Schema.Types.ObjectId,
    ref: "Content",
  },
});

export const Author = model("Author", AuthorSchema);
