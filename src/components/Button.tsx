import { cn } from "../utils";

interface ButtonProps extends IProps {
  variant?: "outline" | "filled";
  autoWidth?: true;
}

export const Button = (props: ButtonProps) => {
  const { variant = "filled", className, children, autoWidth } = props;

  return (
    <div
      className={cn(
        "rounded-full px-4 py-2 text-center text-lg",
        variant === "outline" ? "border border-black text-black" : "bg-ttred text-white",
        !autoWidth && "w-full max-w-fit",
        className
      )}
    >
      {children}
    </div>
  );
};
