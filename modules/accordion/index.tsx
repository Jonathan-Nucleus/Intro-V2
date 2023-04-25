import { FC, useState } from "react";
import { CaretCircleDown, CaretCircleUp } from "phosphor-react";
import "animate.css";
import Card from "../../components/Card";
import { useMediaQuery } from "react-responsive";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: FC<AccordionProps> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(true);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });

  return (
    <Card className={`mb-4 bg-white drop-shadow-sm rounded-xl cursor-pointer ${isDesktopOrLaptop ? "w-8/12" : "w-10/12"}`}>
      <div
        className="min-h-20 rounded-xl flex flex-row items-center justify-between"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="text-lg font-semibold">{title}</div>
        <div>{isActive ? <CaretCircleUp size={25} /> : <CaretCircleDown size={25} />}</div>
      </div>
      {isActive && (
        <div className="mt-4 animate__animated animate__fadeIn">{content}</div>
      )}
    </Card>
  );
};
export default Accordion;
