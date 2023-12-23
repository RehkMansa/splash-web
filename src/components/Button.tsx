import { cn } from "../utils";
import { FramerProps } from "./CircleIcon";
import { motion } from "framer-motion";

interface ButtonProps extends FramerProps {
  variant?: "outline" | "filled";
  autoWidth?: true;
}

export const Button = (props: ButtonProps) => {
  const { variant = "filled", className, children, autoWidth, ...rest } = props;

  return (
    <motion.div
      className={cn(
        "rounded-full px-4 py-2 text-center text-lg",
        variant === "outline" ? "border border-black text-black" : "bg-ttred text-white",
        !autoWidth && "w-full max-w-fit",
        className
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
