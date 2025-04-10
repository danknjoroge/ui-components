import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"

export default function Home() {
  return (
    <main className="p-10 space-y-4">
      <h1 className="text-2xl font-bold">UI Library Preview</h1>
      <Input placeholder="Enter text here" />
      <div className="flex gap-2">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </main>
  )
}
