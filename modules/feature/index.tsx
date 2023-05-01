import { FC, ReactElement } from "react";
import Button from "../../components/Button";
import { useMediaQuery } from "react-responsive";

interface FeatureProps {
  link: string;
  title: string;
  subtitle: string;
}

const Feature: FC<FeatureProps> = ({ link, title, subtitle }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  return (
    <div className="flex flex-col justify-start items-between h-full w-full rounded-full">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant={"outline-primary"}
          className={`bg-white border border-[#4F46E5] h-[30px] ${
            isMobile ? "w-full" : "w-8/12"
          } text-[#4F46E5] mt-2 mr-2 mb-8`}
        >
          Preview
        </Button>
      </a>

      <div className="flex flex-col w-full justify-between">
        <p className="text-black text-xl font-sans font-semibold mb-4">
          {title}
        </p>
        <p className="text-zinc-500 text-[14px] font-sans font-normal text-left">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Feature;
