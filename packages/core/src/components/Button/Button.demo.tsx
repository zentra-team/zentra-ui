import { cn } from "@/utils/classes"
import { HeadingContainer } from "@/utils/heading-container"
import { SparkleIcon } from "lucide-react"
import { Button } from "./Button"

const Demo = ({ isDark }: { isDark: boolean }) => {
  return (
    <section className={cn("flex flex-col gap-8", isDark ? "dark" : "")}>
      <HeadingContainer title="Variant">
        <Button>Click me</Button>
        <Button variant="texture">Click me</Button>
        <Button variant="outline">Click me</Button>
        <Button variant="destructive">Click me</Button>
        <Button variant="secondary">Click me</Button>
        <Button variant="ghost">Click me</Button>
      </HeadingContainer>
      <HeadingContainer className="items-end" title="Size">
        <Button size="xs">Click me</Button>
        <Button size="sm">Click me</Button>
        <Button size="icon">
          <SparkleIcon />
        </Button>
        <Button size="default">Click me</Button>
        <Button size="lg">Click me</Button>
      </HeadingContainer>
      <HeadingContainer title="Disable ripple effect">
        <Button disableRipple>Click me</Button>
      </HeadingContainer>
      <HeadingContainer title="Disable scale effect">
        <Button disableScale>Click me</Button>
      </HeadingContainer>
      <HeadingContainer title="Default button">
        <Button disableScale disableRipple>
          Click me
        </Button>
      </HeadingContainer>
    </section>
  )
}

export default Demo
