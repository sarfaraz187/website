import { Slot } from "@radix-ui/react-slot";
import { cn } from "@src/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "text-nightRider bg-transparent border border-nightRider font-sem rounded-2xl hover:rounded-full hover:text-white dark:bg-teaGreen hover:bg-nightRider hover:dark:bg-teaGreen dark:hover:text-nightRider group",
        outline:
          "border border-input bg-seaShell hover:bg-accent hover:text-accent-foreground dark:bg-nightRider dark:border-seaShell",
        default: "",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        rounded: "text-nightRider border border-nightRider rounded-full",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "relative pb-2 overflow-hidden after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-nightRider after:transition-all after:duration-300 hover:after:w-full",
      },
      size: {
        default: "text-lg h-10 px-7 py-6",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
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
