import { FC, ReactElement } from "react";

type VF = () => void;

interface TabButtonProps {
  icon: ReactElement;
  onPressed: (event: React.MouseEvent<HTMLElement>) => void
  bgColor?: string;
}

const CircularButton: FC<TabButtonProps> = ({ onPressed, icon, bgColor }) => {
  const greyStyle =
    "h-[35px] w-[35px] bg-zinc-500 p-2 rounded-full flex justify-center items-center";
  const greyStyle2 =
    "h-[35px] w-[35px] bg-gray-100 p-2 rounded-full flex justify-center items-center";
  const redStyle =
    "h-[35px] w-[35px]  bg-gradient-to-br from-purple-500 via-indigo-500 to-purple-900 p-2 rounded-full flex justify-center items-center";
  const defaultStyle =
    "h-[40px] w-[40px] bg-gray-100 p-2 rounded-full flex justify-center items-center";
  
  return (
    <button
      className={bgColor === "gray" ? greyStyle : bgColor === "red" ? redStyle : bgColor === "gray2" ? greyStyle2 : defaultStyle}
      type="button"
      onClick={onPressed}
    >
      {icon}
    </button>
  );
};

export default CircularButton;
