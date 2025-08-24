import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

export function Button({
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "p3 text-white rounded-xl font-bold whitespace-nowrap hover:opacity-95 disabled:opacity-70",
        {
          "bg-accent-purple": variant === "primary",
          "bg-background-tertiary": variant === "secondary",
          "border-border-primary": variant === "ghost",
        },
        props.className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
