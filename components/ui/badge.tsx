import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center border px-3 py-1.5 text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-2 border-black bg-black text-white shadow-neo-sm hover:bg-black/80",
        secondary:
          "border-2 border-black bg-[#ffd60a] text-black shadow-neo-sm hover:bg-[#ffd60a]/80",
        destructive:
          "border-2 border-black bg-[#ff5400] text-white shadow-neo-sm hover:bg-[#ff5400]/80",
        outline: "border-2 border-black text-black bg-white shadow-neo-sm hover:bg-gray-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
