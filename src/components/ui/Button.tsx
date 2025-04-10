import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "px-4 py-2 rounded-md font-medium transition-colors focus:outline-none",
          variant === "default" && "bg-black text-white hover:bg-gray-800",
          variant === "outline" && "border border-gray-300 text-gray-800 hover:bg-gray-100",
          variant === "ghost" && "text-gray-600 hover:bg-gray-100",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
