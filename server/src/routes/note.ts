import express from "express"
import NotesController from "../controllers/notes"

const router = express.Router()

router.get("/", NotesController.getAllNotes)

router.post("/", NotesController.createNote)

export { router as notesRouter } 

