import { Card, CardContent } from "@/components/ui/card"
import { Note } from "@/lib/types"

const NoteCard = ({ title, content }: Pick<Note, "title" | "content">) => {
  return (
    <Card className="border-white">
      <CardContent>
        <div>
          <h3 className=" font-bold text-2xl  mb-2">{title}</h3>
          <p className="text-lg">{content}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default NoteCard
