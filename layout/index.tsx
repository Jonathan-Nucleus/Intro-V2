import { FC, PropsWithChildren } from "react";
import dynamic from "next/dynamic";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";
import { AppPageProps } from "../types/next-page";
import AuthLayout from "./AuthLayout";
import HomeLayout from "./HomeLayout";


type RootLayoutProps = PropsWithChildren<AppPageProps>;

const RootLayout: FC<RootLayoutProps> = ({
  layout,
  children,
}: RootLayoutProps) => {
  
  const appContent = (
    <>
      {layout == "auth" && <AuthLayout>{children}</AuthLayout>}
      {layout == "main" && (
        <HomeLayout fullHeight={false}>{children}</HomeLayout>
      )} 
      {layout == undefined && children}
    </>
  );

  return (
    <>
      <NextNProgress
        color="#F54543"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ easing: "ease", speed: 500, showSpinner: false }}
        nonce=""
      />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false}
        className="!w-auto !px-2 !top-8"
        toastClassName="!bg-transparent !mb-0 !p-0"
        bodyClassName="!my-0 !p-0"
      />
      <main>{appContent}</main>
    </>
  );
};

export default dynamic(() => Promise.resolve(RootLayout), { ssr: false });
