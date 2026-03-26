import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

// Extending standard button attributes so onClick, disabled, etc., work natively
interface AppleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: ButtonVariant;
}

export const AppleButton = ({
  label,
  variant = "primary",
  disabled,
  className = "",
  ...props
}: AppleButtonProps) => {
  const baseStyles =
    "w-full py-3.5 px-6 rounded-full font-medium text-[15px] transition-all duration-200 ease-out active:scale-[0.97] flex justify-center items-center";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-black text-white hover:bg-gray-800 shadow-sm",
    secondary: "bg-gray-100 text-black hover:bg-gray-200",
  };

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed active:scale-100"
    : "cursor-pointer";

  return (
    <button
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabledStyles} ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};
