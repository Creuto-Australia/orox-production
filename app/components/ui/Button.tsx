import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`
        rounded-full px-8 py-3 font-medium transition-all
        ${
          variant === "primary"
            ? "bg-[#293483] text-white hover:bg-[#293492]/90"
            : "bg-gray-100 text-[#19191B] hover:bg-gray-200"
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
