import { FC, HTMLProps } from "react";

interface CardProps extends HTMLProps<HTMLDivElement> {}

const Card: FC<CardProps> = (props) => {
  return (
    <div
      {...props}
      className={
        "bg-background-card rounded-2xl drop-shadow-sm p-4 overflow-hidden " +
        (props.className ?? "")
      }
    >
      {props.children}
    </div>
  );
};

export default Card;
