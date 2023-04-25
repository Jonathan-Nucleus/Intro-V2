import Head from "next/head";
import { TwitterLogo, LinkedinLogo, GithubLogo } from "phosphor-react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import CircularButton from "../components/Circular";
import Button from "../components/Button";
import Image from "next/image";
import Card from "../components/Card";
import Feature from "../modules/feature";
import Accordion from "../modules/accordion";
import {
  accordionData,
  blockchain,
  briefBio,
  coreAreasOfService,
  instructions,
  notice,
  service,
} from "../constants";
import { NextPageWithLayout } from "../types/next-page";

const Home: NextPageWithLayout = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  const cardRef: any = useRef();

  const handleGetStarted = () => {
    if (cardRef && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const firstSection = coreAreasOfService.slice(0, 3);
  const secondSection = coreAreasOfService.slice(3, 6);
  const thirdSection = coreAreasOfService.slice(6, 9);

  return (
    <>
      <Head>
        <title>Jonathan - Senior Fintech Engineer</title>
        <meta
          name="description"
          content="Jonathan Daniels: Senior Fintech Engineer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <main className="h-100 w-100 bg-gray-50">
        <div
          className={`h-28 bg-black flex flex-row justify-between items-center ${
            isTabletOrMobile ? "px-8" : "px-28"
          }`}
        >
          <Image
            height={50}
            width={50}
            className="rounded-full"
            src={"jd.png"}
            alt={"logo"}
            placeholder="blur"
            blurDataURL={"jd.png"}
          />
          <div>
            <Button
              variant={"primary"}
              onClick={handleGetStarted}
              className={"bg-white h-10 rounded-xl w-[200px] text-gray-900"}
            >
              <p className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-900 text-sm font-sans font-bold">
                Jonathan Daniels
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
              isTabletOrMobile ? "mb-10 w-10/12" : "mb-2 w-full"
            }`}
          >
            <p className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-900 text-sm font-sans">
              Empowered 25+ Companies with my Expertise
            </p>
          </Button>
          <div className="flex flex-col justify-center items-center leading-tight">
            <p
              className={`text-white font-sans font-extrabold ${
                isTabletOrMobile ? "text-[30px]" : "text-[50px]"
              }`}
            >
              Senior Fintech
            </p>
            <p
              className={`text-white font-sans font-extrabold mb-8 ${
                isTabletOrMobile ? "text-[30px]" : "text-[50px]"
              }`}
            >
              Engineer
            </p>
          </div>
          <div className={isTabletOrMobile ? "w-10/12 mt-6" : "w-5/12"}>
            <p
              className={`text-zinc-400 font-sans font-normal ${
                isTabletOrMobile ? "text-justify text-[15px]" : "text-justify text-[16px]"
              }`}
            >
              {briefBio}
            </p>
          </div>
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
            <Card
              className={` ${
                isMobile ? "h-[650px]" : "h-[750px]"
              } w-10/12 roundedXl flex flex-col justify-around items-left bg-white absolute top-[50px] z-0`}
            >
              <div
                className={`h-full w-full  flex flex-col justify-between items-left ${
                  isTabletOrMobile ? "mb-6" : isMobile ? "" : ""
                } z-0`}
              >
                <div className="w-full">
                  <a
                    href="https://clients.multivurse.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card
                      className={`h-[75px] bg-[#4F46E5] w-full roundedXl flex flex-row justify-around items-center mb-2`}
                    >
                      <p className="text-white text-lg font-sans font-bold">
                        Clients
                      </p>
                    </Card>
                  </a>
                  <a
                    href="https://professionals.multivurse.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card
                      className={`h-[75px] bg-[#4F46E5] w-full roundedXl flex flex-row justify-around items-center mb-2`}
                    >
                      <p className="text-white text-lg font-sans font-bold">
                        Professionals
                      </p>
                    </Card>
                  </a>
                  <a
                    href="https://management.multivurse.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card
                      className={`h-[75px] bg-[#4F46E5] w-full roundedXl flex flex-row justify-around items-center`}
                    >
                      <p className="text-white text-lg font-sans font-bold">
                        Management
                      </p>
                    </Card>
                  </a>
                </div>
              </div>
              <video
                className="rounded-xl"
                height={"full"}
                style={{
                  objectFit: "cover",
                  height: isTabletOrMobile ? 450 : 400,
                }}
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
                  <a
                    href="https://clients.multivurse.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card className="h-[100px] w-full roundedXl flex flex-row justify-around items-center bg-white mb-5 drop-shadow-sm border border-indigo-500 cursor-pointer">
                      <p className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-900 text-lg font-sans font-extrabold">
                        Clients
                      </p>
                    </Card>
                  </a>
                  <a
                    href="https://professionals.multivurse.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card className="h-[100px] w-full roundedXl flex flex-row justify-around items-center bg-white mb-5 drop-shadow-sm border border-indigo-500 cursor-pointer">
                      <p className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-900 text-lg font-sans font-extrabold">
                        Professionals
                      </p>
                    </Card>
                  </a>
                  <a
                    href="https://management.multivurse.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card className="h-[100px] w-full roundedXl flex flex-row justify-around items-center bg-white drop-shadow-sm border border-indigo-500 cursor-pointer">
                      <p className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-900 text-lg font-sans font-extrabold">
                        Management
                      </p>
                    </Card>
                  </a>
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
            isMobile ? "mt-[0px]" : "mt-[100px]"
          }`}
        >
          <div className="flex flex-col justify-center items-center leading-tight">
            <p className="text-black text-[30px] font-sans font-extrabold mb-8 text-center">
              Built on Enterprise Blockchain Technology
            </p>
          </div>
          <div
            className={`mb-[50px] ${isDesktopOrLaptop ? "w-7/12" : "w-11/12"}`}
          >
            <p className="text-zinc-500 text-[16px] font-sans font-normal text-center">
              {blockchain}
            </p>
          </div>
          <Image
            height={isMobile ? 250 : 400}
            width={isMobile ? 250 : 400}
            src={"blockchain.png"}
            alt={"blockchain"}
            placeholder="blur"
            blurDataURL={"blockchain.png"}
          />
        </div>
        <div
          className={`flex flex-col justify-center items-center ${
            isMobile ? "mt-[50px]" : "mt-[50px]"
          }`}
        >
          <div className="flex flex-col justify-center items-center leading-tight">
            <p className="text-black text-[30px] font-sans font-extrabold mb-8 text-center">
              Projects Portfolio
            </p>
          </div>
          <div className={`${isDesktopOrLaptop ? "w-7/12" : "w-11/12"}`}>
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
          {firstSection.map((service, index) => (
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
          className={`flex justify-center items-center w-full bg-gray-50 ${
            isDesktopOrLaptop ? "flex-row mt-10 mb-10" : "flex-col"
          }`}
        >
          {secondSection.map((service, index) => (
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
          className={`flex justify-center items-center w-full mb-10 bg-gray-50 ${
            isDesktopOrLaptop ? "flex-row" : "flex-col"
          }`}
        >
          {thirdSection.map((service, index) => (
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
              {isTabletOrMobile ? "Summary" : "Brief Summary"}
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-20 mb-20 justify-center items-center bg-gray-50">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} key={title} />
          ))}
        </div>
        <div className="h-[150px] w-full bg-gray-100 flex flex-col justify-center items-center">
          <div className={`flex flex-row mb-4 w-[250px] justify-around px-6`}>
            <a
              href="https://github.com/Jonathan-Multivurse"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CircularButton
                icon={
                  <GithubLogo size={25} color={"#f3f4f6"} weight={"fill"} />
                }
                onPressed={() => {}}
                bgColor={"red"}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/j2daniels/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CircularButton
                icon={
                  <LinkedinLogo size={28} color={"#f3f4f6"} weight={"fill"} />
                }
                onPressed={() => {}}
                bgColor={"red"}
              />
            </a>
            <a
              href="https://twitter.com/multivurse_ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CircularButton
                icon={
                  <TwitterLogo size={25} color={"#f3f4f6"} weight={"fill"} />
                }
                onPressed={() => {}}
                bgColor={"red"}
              />
            </a>
          </div>
          <p className="text-gray-500 text-sm font-sans">
            Multivurse Ⓒ 2023. All rights reserved
          </p>
        </div>
      </main>
    </>
  );
};

Home.layout = "landing";

export default Home;
