import { cn } from "./classes"

interface HeadingContainerProps {
  title: string
  children?: React.ReactNode
  className?: string
}

const HeadingContainer = ({ title, children, className }: HeadingContainerProps) => {
  return (
    <div className="flex flex-col gap-4">
      {title && <div className="text-lg ml-2 font-semibold">{title}</div>}
      <div className={cn("flex flex-wrap gap-4", className)}>{children}</div>
    </div>
  )
}

export { HeadingContainer }
