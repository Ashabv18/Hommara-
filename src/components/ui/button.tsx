import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 shadow-md",
  {
    variants: {
      variant: {
        default:
          "bg-[#103948] text-white hover:bg-[#0c2d39] shadow-md",
        destructive:
          "bg-red-500 text-neutral-50 shadow-sm hover:bg-red-600",
        outline:
          "border border-[#103948]/20 bg-white shadow-sm hover:bg-[#103948]/5 hover:text-[#103948]",
        secondary:
          "bg-[#ebeced] text-[#103948] shadow-sm hover:bg-[#d5d8da]",
        ghost: "hover:bg-[#103948]/5 hover:text-[#103948] shadow-none",
        link: "text-[#103948] underline-offset-4 hover:underline shadow-none",
        accent:
          "bg-[#bc5631] text-white hover:bg-[#a64a2a] shadow-md",
      },
      size: {
        default: "h-10 px-6 py-2 rounded-full",
        sm: "h-8 px-4 text-xs rounded-full",
        lg: "h-12 px-8 text-base rounded-full",
        xl: "h-14 px-10 text-base rounded-full",
        icon: "h-9 w-9 rounded-full",
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
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };