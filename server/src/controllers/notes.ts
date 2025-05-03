import { Request, Response } from "express";
import asyncCatch from "../utils/asyncCatch";
import ExpressError from "../utils/expressError";
import { Note } from "../models/note";

class NotesController {
  static createNote = asyncCatch(async (req: Request, res: Response) => {
    const { title, content } = req.body;
    if (!title || !content || title.trim().length === 0 || content.trim().length === 0) throw new ExpressError("Enter title or content", 400)

    const note = new Note({ title, content })

    await note.save()

    res.status(200).json({ message: "Note created successfully", data: { note } });
  })

  static getAllNotes = asyncCatch(async (_: Request, res: Response) => {

    const notes = await Note.find().sort({ createdAt: -1 })

    res.status(200).json({
      message: "Notes",
      data: { notes }
    })
  })

}

export default NotesController
