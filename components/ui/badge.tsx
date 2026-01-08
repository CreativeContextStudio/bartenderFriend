import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center border px-3 py-1.5 text-sm font-bold transition-brutal focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-brutal-sm bg-primary text-primary-foreground shadow-brutal-sm hover:bg-primary/90",
        secondary:
          "border-brutal-sm bg-secondary text-secondary-foreground shadow-brutal-sm hover:bg-secondary/90",
        destructive:
          "border-brutal-sm bg-destructive text-destructive-foreground shadow-brutal-sm hover:bg-destructive/90",
        outline: "border-brutal-sm text-foreground bg-background shadow-brutal-sm hover:bg-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
