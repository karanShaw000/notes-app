import mongoose, { Document, Schema } from "mongoose";

export interface INote extends Document {
  title: string,
  content: string,
  createdAt: Date,
}

const noteSchema = new Schema<INote>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

export const Note = mongoose.model("note", noteSchema)  
