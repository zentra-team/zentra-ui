import { cn } from "@/utils/classes"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import "../../styles/globals.css" // Ensure global styles are imported
import { Ripple } from "./Ripple"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium duration-200 transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative overflow-hidden active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-white shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        texture:
          "bg-gradient-to-b border-[2px] border-blue-700/50 dark:border-blue-600 from-primary to-blue-800 text-white transition duration-300 ease-in-out hover:bg-gradient-to-b hover:from-blue-700 hover:to-primary/90 dark:hover:from-blue-600/70 dark:hover:to-primary/70 active:bg-gradient-to-b active:from-blue-600/80 active:to-primary/80 dark:active:from-blue-600 dark:active:to-primary"
      },
      size: {
        default: "h-9 px-[14px] py-2 has-[>svg]:px-3",
        xs: "h-7 px-2.5 has-[>svg]:px-2",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

/**
 * A customizable button component with various visual styles and sizes.
 * @name Button
 * @description A customizable button component with various visual styles and size
 * @category Components
 * @component Button
 * @param {ButtonVariant} [props.variant] - Visual style variant
 * @param {ButtonSize} [props.size] - Size variant
 * @param {boolean} [props.asChild=false] - Whether to render as child component using Slot
 * @param {boolean} [props.disableRipple=false] - Whether to disable ripple effect
 * @param {React.ComponentProps<'button'>} props - Additional button props
 * @returns {React.JSX.Element} A button element with ripple effect
 * @example
 * <Button variant="outline" size="sm">Click me</Button>
 */
function Button({
  className,
  variant,
  size,
  asChild = false,
  disableRipple = false,
  disableScale = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    disableRipple?: boolean
    disableScale?: boolean
  }): React.JSX.Element {
  const Comp = asChild ? Slot : "button"

  const buttonRef = React.useRef<HTMLButtonElement>(null)

  return (
    <Comp
      ref={buttonRef}
      className={cn(
        buttonVariants({ variant, size, className }),
        disableScale && "active:scale-100"
      )}
      {...props}
    >
      {props.children}
      {!disableRipple && <Ripple targetRef={buttonRef} color={"rgba(255, 255, 255, 0.3)"} />}
    </Comp>
  )
}

export { Button, buttonVariants }
