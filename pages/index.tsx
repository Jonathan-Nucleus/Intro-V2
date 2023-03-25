import Head from "next/head";
import {
  TwitterLogo,
  LinkedinLogo,
} from "phosphor-react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import CircularButton from "../components/Circular";
import Button from "../components/Button";
import Image from "next/image";
import Card from "../components/Card";
import Feature from "../modules/feature";
import Accordion from "../modules/accordion";
import { accordionData, coreAreasOfService, instructions, notice, service } from "../constants";
import { NextPageWithLayout } from "../types/next-page";

const Home: NextPageWithLayout = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  const cardRef:any = useRef();

  const handleGetStarted = () => {
    if (cardRef && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const firstHalf = coreAreasOfService.slice(0, 3);
  const secondHalf = coreAreasOfService.slice(3, 6);

  return (
    <>
      <Head>
        <title>Multivurse - Wealth Management Redefined</title>
        <meta name="description" content="Multivurse - Wealth Management Redefined" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <main className="h-100 w-100 bg-gray-50">
        <div
          className={`h-28 bg-black flex flex-row justify-between items-center ${
            isTabletOrMobile ? "px-8" : "px-28"
          }`}
        >
          <Image height={100} width={100} src={"logo.png"} alt={"logo"} placeholder="blur" blurDataURL={"logo.png"}/>
          <div>
            <Button
              variant={"primary"}
              onClick={handleGetStarted}
              className={"bg-white h-10 rounded-xl w-[200px] text-gray-900"}
            >
              <p className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-900 text-sm font-sans font-bold">
                Get Started
              </p>
            </Button>
          </div>
        </div>
        <div
          className={`h-[800px] w-100 bg-black flex flex-col justify-start items-center pt-20 ${
            isTabletOrMobile ? "h-[700px]" : "h-[800px]"
          }`}
        >
          <Button
            variant={"primary"}
            className={`bg-transparent h-10 rounded-xl ${
              isTabletOrMobile ? "mb-10" : "mb-2"
            }`}
          >
            <p className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-900 text-sm font-sans">
              Empowering 2,904 clients with our innovative solutions
            </p>
          </Button>
          <div className="flex flex-col justify-center items-center leading-tight">
            <p
              className={`text-white font-sans font-extrabold ${
                isTabletOrMobile ? "text-[30px]" : "text-[50px]"
              }`}
            >
              Wealth Management
            </p>
            <p
              className={`text-white font-sans font-extrabold mb-8 ${
                isTabletOrMobile ? "text-[30px]" : "text-[50px]"
              }`}
            >
              {isTabletOrMobile ? "Redefined" : "Redefined"}
            </p>
          </div>
          <div className={isTabletOrMobile ? "w-10/12 mt-6" : "w-6/12"}>
            <p
              className={`text-zinc-400 text-[18px] font-sans font-normal ${
                isTabletOrMobile ? "text-center" : "text-center"
              }`}
            >
              Maximize Wealth, Minimize Effort: Streamlined Wealth Management
              for Tomorrow
            </p>
          </div>
          {isTabletOrMobile ? (
            <div className="mt-16">
              {instructions.map((val, index) => {
                return (
                  <div className="flex flex-row items-center justify-start mb-4">
                    <CircularButton
                      icon={
                        <p className="text-white font-bold text-md">
                          {index + 1}
                        </p>
                      }
                      onPressed={() => {}}
                      bgColor={"red"}
                    />
                    <p className="text-zinc-200 text-md font-sans ml-4">
                      {val}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div  ref={ isDesktopOrLaptop ? cardRef : null} className="w-7/12 flex flex-row justify-around items-baseline mt-32">
              {instructions.map((val, index) => {
                return (
                  <div className="flex flex-row items-center justify-start mb-4">
                    <CircularButton
                      icon={
                        <p className="text-white font-bold text-md">
                          {index + 1}
                        </p>
                      }
                      onPressed={() => {}}
                      bgColor={"red"}
                    />
                    <p className="text-zinc-200 text-md font-sans ml-4">
                      {val}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div
          ref={isTabletOrMobile ? cardRef : null}
          className={`w-100 bg-gray-50 flex justify-center items-center relative ${
            isTabletOrMobile
              ? "h-[750px]"
              : isTabletOrMobile
              ? "h-[250px]"
              : "h-[600px]"
          }`}
        >
          {isTabletOrMobile ? (
            <Card className={` ${isMobile ? "h-[600px]" : "h-[700px]"} w-10/12 roundedXl flex flex-col justify-around items-left bg-white absolute top-[50px] z-0`}>
              <div className={`h-full w-full  flex flex-col justify-between items-left ${isTabletOrMobile ? "mb-6" : isMobile ? "" : ""} z-0`}>
                <div className="w-full">
                  <Card className={`h-[75px] w-full roundedXl flex flex-row justify-around items-center  mb-5 ${isTabletOrMobile ? " bg-gradient-to-br from-purple-500 via-indigo-500 to-purple-900" : "bg-white drop-shadow-sm border border-indigo-500" }`}>
                    <p className="text-white text-lg font-sans font-extrabold">
                      Clients
                    </p>
                  </Card>
                  <Card className={`h-[75px] w-full roundedXl flex flex-row justify-around items-center  ${isTabletOrMobile ? " bg-gradient-to-br from-purple-500 via-indigo-500 to-purple-900" : " bg-white drop-shadow-sm border border-indigo-500" }`}>
                    <p className="text-white text-lg font-sans font-extrabold">
                      Management
                    </p>
                  </Card>
                </div>
              </div>
              <video
                className="rounded-xl"
                height={"full"}
                style={{ objectFit: "cover", height: isTabletOrMobile ? 450 : 400 }}
                src={"couple.mp4"}
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline
              />
            </Card>
          ) : (
            <Card
              ref={cardRef}
              className="h-[700px] w-10/12 roundedXl flex flex-row justify-around items-left bg-white absolute bottom-[100px] z-0"
            >
              <div className="h-full w-6/12  flex flex-col justify-between items-left mr-4 z-0">
                <div className="w-full">
                  <Card className="h-[100px] w-full roundedXl flex flex-row justify-around items-center bg-white mb-5 drop-shadow-sm border border-indigo-500 cursor-pointer">
                    <p className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-900 text-lg font-sans font-extrabold">
                      Clients
                    </p>
                  </Card>
                  <Card className="h-[100px] w-full roundedXl flex flex-row justify-around items-center bg-white drop-shadow-sm border border-indigo-500 cursor-pointer">
                    <p className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-900 text-lg font-sans font-extrabold">
                      Management
                    </p>
                  </Card>
                </div>
                <div className="w-full">
                  <p className="text-black text-lg font-sans font-extrabold mb-4 text-left">
                    Notice
                  </p>
                  <p className="text-gray-800 text-md font-sans text-justify">
                    {notice}
                  </p>
                </div>
              </div>

              <div className="h-[650px] w-6/12 bg-gray-100 flex rounded-3xl justify-center items-center">
                <video
                  className="rounded-xl"
                  height={"full"}
                  style={{ objectFit: "cover", height: 660 }}
                  src={"couple.mp4"}
                  autoPlay={true}
                  muted={true}
                  loop={true}
                />
              </div>
            </Card>
          )}
        </div>
        <div
          className={`flex flex-col justify-center items-center ${
            isMobile ? "mt-[0px]" :  "mt-[100px]"
          }`}
        >
          <div className="flex flex-col justify-center items-center leading-tight">
            <p className="text-black text-[30px] font-sans font-extrabold mb-8 text-center">
              {isTabletOrMobile
                ? "Core Areas of Service"
                : "Core Areas of Service"}
            </p>
          </div>
          <div className={ isDesktopOrLaptop ? "w-8/12" : "w-10/12"}>
            <p className="text-zinc-500 text-[16px] font-sans font-normal text-center">
              {service}
            </p>
          </div>
        </div>
        <div
          className={`flex justify-center items-center w-full  mt-20 bg-gray-50 ${
            isDesktopOrLaptop ? "flex-row mb-10" : "flex-col"
          }`}
        >
          {firstHalf.map((service, index) => (
            <Card
              className={`bg-white h-[275px] ${
                isDesktopOrLaptop ? "mr-4 w-80" : "mt-4 w-10/12"
              }`}
              key={index}
            >
              <Feature
                icon={service.icon}
                title={service.title}
                subtitle={service.subtitle}
              />
            </Card>
          ))}
        </div>
        <div
          className={`flex justify-center items-center w-full mb-20 bg-gray-50 ${
            isDesktopOrLaptop ? "flex-row mt-10" : "flex-col"
          }`}
        >
          {secondHalf.map((service, index) => (
            <Card
              className={`bg-white h-[275px] ${
                isDesktopOrLaptop ? "mr-4 w-80" : "mt-4 w-10/12"
              }`}
              key={index}
            >
              <Feature
                icon={service.icon}
                title={service.title}
                subtitle={service.subtitle}
              />
            </Card>
          ))}
        </div>
        <div className="flex flex-col mt-30 justify-center items-center bg-gray-50">
          <div className="flex flex-col justify-center items-center leading-tight">
            <p className="text-black text-[30px] font-sans font-extrabold mb-4">
              {isTabletOrMobile ? "FAQs" : "Frequently Asked Questions"}
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-20 mb-20 justify-center items-center bg-gray-50">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} key={title} />
          ))}
        </div>
        <div className="h-[150px] w-50 bg-gray-100 flex flex-col justify-center items-center">
          <div className="flex flex-row mb-4 w-40 justify-around px-6">
            <CircularButton
              icon={<TwitterLogo size={25} color={"#f3f4f6"} weight={"fill"} />}
              onPressed={() => {}}
              bgColor={"red"}
            />
            <CircularButton
              icon={
                <LinkedinLogo size={28} color={"#f3f4f6"} weight={"fill"} />
              }
              onPressed={() => {}}
              bgColor={"red"}
            />
          </div>
          <p className="text-gray-500 text-sm font-sans">
            Multivurse Ⓒ 2023. All rights reserved
          </p>
        </div>
      </main>
    </>
  );
};

Home.layout = "auth";

export default Home;
