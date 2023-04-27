import { FC, ReactElement } from "react";
import Button from "../../components/Button";

interface FeatureProps {
  icon: ReactElement;
  title: string;
  subtitle: string;
}

const Feature: FC<FeatureProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="flex flex-col justify-start items-start h-auto w-full rounded-full">
      <div className="flex flex-row w-full justify-between">
        <div className="mb-8">{icon}</div>
        <Button
            variant={"outline-primary"}
            className="bg-white border border-[#4F46E5] h-[30px] text-[#4F46E5] mt-2 mr-2 mb-2"
          >
            Preview
          </Button>
      </div>

      <p className="text-black text-xl font-sans font-semibold mb-4">{title}</p>
      <p className="text-zinc-500 text-[14px] font-sans font-normal text-left">
        {subtitle}
      </p>
    </div>
  );
};

export default Feature;
