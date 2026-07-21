import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        "rounded-xl font-medium transition-all duration-200",
        "disabled:opacity-50 disabled:cursor-not-allowed",

        {
          "bg-black text-white hover:bg-neutral-800":
            variant === "primary",

          "bg-neutral-100 hover:bg-neutral-200":
            variant === "secondary",

          "border border-neutral-300 hover:bg-neutral-100":
            variant === "outline",

          "px-3 py-2 text-sm":
            size === "sm",

          "px-5 py-3":
            size === "md",

          "px-7 py-4 text-lg":
            size === "lg",
        },

        className
      )}
      {...props}
    />
  );
}