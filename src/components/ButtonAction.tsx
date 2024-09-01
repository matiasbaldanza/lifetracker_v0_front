import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

type ButtonActionProps = {
  activeTab: string
}

export function ButtonAction({
  activeTab
}: ButtonActionProps) {

  const handleClick = () => {
    console.log(`Action Button clicked. Tab: ${activeTab}`)
  }

  return (
    <Button
      variant="default"
      size="icon"
      className="absolute right-0 -translate-x-3 -translate-y-[125%] rounded-full shadow-lg w-14 h-14"
      onClick={handleClick}
    >
      <Plus className="w-6 h-6" />
      <span className="sr-only">Add</span>
    </Button>
  )
}