import { FC, PropsWithChildren } from "react";

type LandingLayoutProps = PropsWithChildren<unknown>;

const LandingLayout: FC<LandingLayoutProps> = ({ children }) => {
  return (
    <div className="h-full w-full">
      {children}
    </div>
  );
};

export default LandingLayout;
