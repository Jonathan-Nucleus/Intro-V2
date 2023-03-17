import { ReactElement, HTMLProps } from "react";
import {
  FieldValues,
  Path,
} from "react-hook-form";

interface LabelProps<TFieldValues> extends HTMLProps<HTMLLabelElement> {
  name?: Path<TFieldValues>;
}

function Label<TFieldValues = FieldValues>({
  name,
  ...props
}: LabelProps<TFieldValues>): ReactElement {

  return (
    <label
      {...props}
      className={`leading-6 text-black text-sm font-medium tracking-wide
      ${props.htmlFor ? "cursor-pointer" : ""} ${props.className ?? ""}`}
    >
      {props.children}
    </label>
  );
}

export default Label;
