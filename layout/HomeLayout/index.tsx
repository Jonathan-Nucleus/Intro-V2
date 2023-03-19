import { FC, PropsWithChildren, useState } from "react";
import CircularButton from "../../components/Circular";
import NavMenu from "../NavMenu";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import {
  InstagramLogo,
  TwitterLogo,
  WarningCircle,
  YoutubeLogo,
} from "phosphor-react";
import Alert from "../../components/Alert";
import Button from "../../components/Button";
import ModalDialog from "../../components/ModalDialog";
import router from "next/router";

type MainLayoutProps = PropsWithChildren<unknown> & {
  fullHeight: boolean;
};

const HomeLayout: FC<MainLayoutProps> = ({ children }: MainLayoutProps) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });
  return (
    <>
      <div className="flex flex-col h-full w-full">
        <div
          className={
            "h-[250px] w-full bg-black flex flex-col justify-between items-center"
          }
        >
          <div className="flex flex-row justify-between items-center w-8/12 mt-6">
            <Image
              height={60}
              width={60}
              src={"/tpc.svg"}
              alt={"Logo"}
              className="cursor-pointer"
            />
            <div>
              <CircularButton
                icon={<p className="text-white font-semibold">JD</p>}
                onPressed={() => router.push("/public")}
                bgColor={"red"}
              />
            </div>
          </div>
          <div className="flex flex-row w-8/12 justify-between items-end">
            <div className="flex flex-col justify-start items-start w-8/12 mb-6">
              <p className="text-[30px] text-white font-extrabold">
                My Account
              </p>
              <p className="text-md text-gray-500 font-normal">
                Manage your events and account settings
              </p>
            </div>
            <Button
              variant={"primary"}
              className="bg-white text-gray-900 mb-6"
            >
              Generate Pass
            </Button>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className={"block bg-black rounded-2xl w-8/12 mt-4 mb-2"}>
            <Alert variant="error">
              <div className="flex flex-row">
                <div className="flex-shrink-0 text-error">
                  <WarningCircle size={24} weight="bold" color="#fff" />
                </div>
                <div className="flex flex-col w-full items-start justify-start">
                  <p className="text-white text-md ml-3">{"Paid Feature"}</p>
                  <p className="text-gray-500 text-sm ml-3">
                    {
                      "To edit, update or view analytics for your TPC Player ID, opt into our paid feature for only $20 a year!"
                    }
                  </p>
                </div>
                <Button
                  variant={"primary"}
                  className="bg-white text-gray-900 text-transform: uppercase"
                >
                  opt in
                </Button>
              </div>
            </Alert>
          </div>
        </div>
        <div
          className={`w-full flex flex-row justify-center items-start ${
            isTabletOrMobile ? "px-8 pt-4" : "px-20 pt-6"
          }`}
        >
          <NavMenu />
          <div className="flex h-full w-7/12 bg-gray-600">{children}</div>
        </div>
        <div className="h-[150px] w-100 bg-gray-100 flex flex-col justify-center items-center">
          <div className="flex flex-row mb-4 w-40 justify-between">
            <CircularButton
              icon={<TwitterLogo size={25} color={"#f3f4f6"} weight={"fill"} />}
              onPressed={() => {}}
              bgColor={"gray"}
            />
            <CircularButton
              icon={
                <InstagramLogo size={25} color={"#f3f4f6"} weight={"fill"} />
              }
              onPressed={() => {}}
              bgColor={"gray"}
            />
            <CircularButton
              icon={<YoutubeLogo size={25} color={"#f3f4f6"} weight={"fill"} />}
              onPressed={() => {}}
              bgColor={"gray"}
            />
          </div>
          <p className="text-gray-500 text-sm font-sans">
            Copyright 2022. The Players Circle{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
