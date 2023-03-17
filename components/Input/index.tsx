import { forwardRef, HTMLProps } from "react";

export interface InputProps extends HTMLProps<HTMLInputElement> {
  isInvalid?: boolean;
  height?: string;
  hint?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isInvalid, height, hint, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        placeholder={hint}
        className={`${
          props.disabled ? "bg-gray-100 text-gray-700" : "bg-white text-black"
        } bg-opacity-95 rounded-lg leading-7 border border-gray-700 focus:border-1
          focus:border-gray-400 focus-visible:outline-none px-2 py-1
          ${height ?? "h-12" } w-full ${props.className ?? ""} ${
          isInvalid ? "bg-red-200 border-error border" : ""
        }`}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
