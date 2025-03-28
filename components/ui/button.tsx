import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Softer gradient using opacity and lighter colors
        default: "bg-gradient-to-r from-primary/90 to-secondary/90 text-white hover:from-primary hover:to-secondary",
        destructive: "bg-destructive/90 text-destructive-foreground hover:bg-destructive",
        outline: "border border-input bg-background hover:bg-accent/50 hover:text-accent-foreground",
        secondary: "bg-secondary/90 text-secondary-foreground hover:bg-secondary",
        ghost: "hover:bg-accent/30 hover:text-accent-foreground",
        link: "text-primary/90 underline-offset-4 hover:text-primary hover:underline",
        custom: "",
      },
      size: {
        default: "h-10 px-6 py-3",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-lg px-8 ",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
  intensity?: number; // New prop to control color intensity (0-100)
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, gradientFrom, gradientTo, intensity = 90, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    // Apply gradient colors with intensity control
    const customStyle = variant === "custom" && gradientFrom && gradientTo 
      ? { 
          background: `linear-gradient(135deg, 
            ${adjustColorIntensity(gradientFrom, intensity)}, 
            ${adjustColorIntensity(gradientTo, intensity)})`,
          ...style 
        }
      : style;

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        style={customStyle}
        {...props}
      />
    );
  }
);

// Helper function to adjust color intensity
function adjustColorIntensity(color: string, intensity: number): string {
  if (color.startsWith('#')) {
    // Hex color manipulation
    return `${color}${Math.round(intensity * 2.55).toString(16).padStart(2, '0')}`;
  }
  if (color.startsWith('rgb')) {
    // RGB/RGBA color manipulation
    return color.replace(/rgb(a)?\(/, `rgba(`).replace(/\)$/, `, ${intensity/100})`);
  }
  return color;
}

Button.displayName = "Button";

export { Button, buttonVariants };