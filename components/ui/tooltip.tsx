"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "@/lib/utils"

// Radix-based components
const TooltipProvider = TooltipPrimitive.Provider
const TooltipRoot = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

// Your custom Tooltip component
interface TooltipProps {
  text: string
  children: React.ReactNode
  position: 'left' | 'right'
}

function Tooltip({ text, children, position }: TooltipProps) {
  const tooltipSide = position === 'left' ? 'right' : 'left'

  return (
    <div className="relative group flex items-center">
      {children}
      <div
        className={`absolute z-50 hidden group-hover:flex px-3 py-1 text-xs text-white bg-[--primary] rounded shadow-md whitespace-nowrap transition-all duration-300
          ${tooltipSide === 'right' ? 'left-full ml-2' : 'right-full mr-2'}
        `}
      >
        {text}
        {/* Arrow */}
        {tooltipSide === 'right' && (
          <div className="absolute right-full top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-[--primary]" />
        )}
        {tooltipSide === 'left' && (
          <div className="absolute left-full top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-[--primary]" />
        )}
      </div>
    </div>
  )
}

// Export both implementations
export { 
  TooltipRoot, 
  TooltipTrigger, 
  TooltipContent, 
  TooltipProvider,
  Tooltip as default // This makes Tooltip available as default export
}