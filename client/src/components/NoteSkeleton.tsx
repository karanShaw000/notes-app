import { Skeleton } from "@/components/ui/skeleton"

const NoteSkeleton = () => {
  return (
    <div className="border-2 rounded-[0.625rem] p-4 border-white h-[100px] space-y-2 mb-6">
      <Skeleton className="h-[20px] w-full" />
      <Skeleton className="h-[40px] w-full" />
    </div>
  )
}

export default NoteSkeleton

