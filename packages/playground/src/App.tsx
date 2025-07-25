import { Button } from "../../core/src/components/Button/Button"
function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center-safe gap-10">
      <Button variant={"texture"}>Click me!</Button>
      <Button>Click me!</Button>
    </div>
  )
}

export default App
