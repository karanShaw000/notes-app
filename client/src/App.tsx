import NotesList from "./components/NoteList"
import { Toaster } from "@/components/ui/sonner"
import { Note } from "./lib/types"
import NoteSkeleton from "./components/NoteSkeleton"
import { useEffect, useState } from "react"
import { getAllNotes } from "./api/note"
function App() {
  const [notes, setNotes] = useState<Note[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setIsLoading(true)
    const fetchNotes = async () => {
      try {
        const res = await getAllNotes()
        setNotes(res?.data?.notes as Note[])
      } catch (err: any) {
        const message = err.message ?? "Something went wrong"
        setError(message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchNotes()
  }, [])
  return (
    <>
      <section className="h-screen max-w-3xl mx-auto p-6 flex flex-col gap-6">
        <NotesList initialNotes={notes} />
        {isLoading && <div>
          <NoteSkeleton />
          <NoteSkeleton />
          <NoteSkeleton />
        </div>}
        {
          error && <div className="text-destructive">{error}</div>
        }
      </section>
      <Toaster position='top-center' richColors />
    </>
  )
}

export default App
