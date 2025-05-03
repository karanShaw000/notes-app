import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "./ui/textarea"
import { FormEvent, useEffect, useState } from "react"
import { Note } from "@/lib/types"
import { createNote } from "@/api/note"
import { toast } from "sonner"
import NoteCard from "./NoteCard"

type NotesListProps = {
  initialNotes: Note[]
}
export default function NotesList({ initialNotes }: NotesListProps) {
  const [notes, setNotes] = useState(initialNotes)

  useEffect(() => {
    setNotes(initialNotes)
  }, [initialNotes])

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [error, setError] = useState(false)
  const [isPending, setIsPending] = useState(false)

  const submitNoteHandler = async (e: FormEvent) => {
    e.preventDefault()
    setIsPending(true)
    if (title.trim() === "" || content.trim() === "") {
      setError(true)
      setIsPending(false)
      return
    }

    try {
      const res = await createNote({ title, content })
      if (res) {
        setNotes(prev => [res?.data?.note as Note, ...prev])
        toast.success(res.message)
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to create a note")
    }
    setTitle("")
    setContent("")
    setIsPending(false)
  }
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardContent>
          <form onSubmit={submitNoteHandler}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Enter Title"
                  required
                  value={title}
                  onChange={(e) => {
                    if (e.target.value.trim() === "") {
                      setError(true)
                    } else {
                      setError(false)
                    }
                    setTitle(e.target.value)
                  }}
                />
                {error && <Label className="text-destructive">Title Required</Label>}
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="content">Content</Label>
                </div>
                <Textarea
                  placeholder="Enter content"
                  className="h-20"
                  required
                  value={content}
                  onChange={(e) => {
                    if (e.target.value.trim() === "") {
                      setError(true)
                    } else {
                      setError(false)
                    }
                    setContent(e.target.value)
                  }}
                />
                {error && <Label className="text-destructive">Content Required</Label>}
              </div>
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <ul className="flex flex-col gap-6">
        {
          notes.map(note => <NoteCard key={note._id} title={note.title} content={note.content} />)
        }
      </ul>


    </div>
  )
}

