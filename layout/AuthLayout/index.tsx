import { FC, PropsWithChildren } from "react";

type AuthLayoutProps = PropsWithChildren<unknown>;

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="h-full w-full">
      {children}
    </div>
  );
};

export default AuthLayout;
