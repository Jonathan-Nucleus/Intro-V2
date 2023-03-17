import { FC, ReactElement } from "react";

interface FeatureProps {
  icon: ReactElement;
  title: string;
  subtitle: string;
}

const Feature: FC<FeatureProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="flex flex-col justify-start items-start h-[200px] w-60 rounded-full">
      <div className="mb-8">{icon}</div>
      <p className="text-black text-xl font-sans font-semibold mb-4">{title}</p>
      <p className="text-zinc-500 text-[14px] font-sans font-normal text-left">
        {subtitle}
      </p>
    </div>
  );
};

export default Feature;
