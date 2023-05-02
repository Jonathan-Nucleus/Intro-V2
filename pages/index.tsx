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
  service,
  shortInfo,
} from "../constants";
import { NextPageWithLayout } from "../types/next-page";
import HeadlessTab from "../components/HeadlessTab";

const Home: NextPageWithLayout = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  const cardRef: any = useRef();
  const skillRef: any = useRef();

  const handleGetStarted = () => {
    if (cardRef && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSkills = () => {
    if (skillRef && skillRef.current) {
      skillRef.current.scrollIntoView({ behavior: "smooth" });
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
                isTabletOrMobile
                  ? "text-justify text-[15px]"
                  : "text-justify text-[16px]"
              }`}
            >
              {briefBio}
            </p>
          </div>
          <div ref={isDesktopOrLaptop ? cardRef : null}></div>
        </div>
        <div
          className={`w-100 bg-gray-50 flex justify-center items-center relative ${
            isTabletOrMobile || isMobile ? "h-[750px]" : "h-[600px]"
          }`}
        >
          {isTabletOrMobile ? (
            <Card
              className={` ${
                isMobile || isTabletOrMobile ? "h-full" : "h-[750px]"
              } w-11/12 roundedXl flex flex-col justify-around items-left bg-white absolute top-[50px] z-0`}
            >
              <div
                className={`h-full w-full  flex flex-col justify-between items-left ${
                  isTabletOrMobile ? "mb-6" : isMobile ? "pt-4" : ""
                } z-0`}
              >
                <div className="w-full" onClick={handleSkills}>
                  <Card
                    className={`h-[65px] bg-[#4F46E5] w-full roundedXl flex flex-row justify-around items-center mb-2`}
                  >
                    <p className="text-white text-lg font-sans font-bold">
                      Web & Mobile
                    </p>
                  </Card>

                  <Card
                    className={`h-[65px] bg-[#4F46E5] w-full roundedXl flex flex-row justify-around items-center mb-2`}
                  >
                    <p className="text-white text-lg font-sans font-bold">
                      Blockchain
                    </p>
                  </Card>

                  <Card
                    className={`h-[65px] bg-[#4F46E5] w-full roundedXl flex flex-row justify-around items-center`}
                  >
                    <p className="text-white text-lg font-sans font-bold">
                      Machine Learning
                    </p>
                  </Card>
                </div>
              </div>
              <p className="text-gray-800 text-md font-sans text-justify mb-6">
                {shortInfo}
              </p>
            </Card>
          ) : (
            <Card className="h-[700px] w-10/12 roundedXl flex flex-row justify-around items-left bg-white absolute bottom-[100px] z-0">
              <div className="h-full w-6/12  flex flex-col justify-between items-left mr-4 z-0">
                <div className="w-full" onClick={handleSkills}>
                  <Card className="h-[80px] w-full roundedXl flex flex-row justify-around items-center bg-white mb-5 drop-shadow-sm border border-indigo-500 cursor-pointer">
                    <p className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-900 text-lg font-sans font-extrabold">
                      Web & Mobile
                    </p>
                  </Card>

                  <Card className="h-[80px] w-full roundedXl flex flex-row justify-around items-center bg-white mb-5 drop-shadow-sm border border-indigo-500 cursor-pointer">
                    <p className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-900 text-lg font-sans font-extrabold">
                      Blockchain
                    </p>
                  </Card>

                  <Card className="h-[80px] w-full roundedXl flex flex-row justify-around items-center bg-white drop-shadow-sm border border-indigo-500 cursor-pointer">
                    <p className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-900 text-lg font-sans font-extrabold">
                      Machine Learning
                    </p>
                  </Card>
                </div>
                <div className="w-full">
                  <p className="text-black text-lg font-sans font-extrabold mb-4 text-left">
                    Core Technologies
                  </p>
                  <p className="text-gray-800 text-md font-sans text-justify mb-6">
                    {shortInfo}
                  </p>
                </div>
              </div>

              <Image
                height={350}
                width={550}
                className="rounded-3xl"
                src={"jonathan.png"}
                alt={"jonathan"}
                placeholder="blur"
                blurDataURL={"jonathan.png"}
              />
            </Card>
          )}
        </div>
        <div
          className={`flex flex-col justify-center items-center ${
            isMobile ? "mt-[100px]" : "mt-[0px]"
          }`}
        >
          {isMobile ? (
            <div
              className="h-[400px] mt-10  w-11/12 bg-transparent flex rounded-3xl justify-center items-center"
              ref={isTabletOrMobile ? cardRef : null}
            >
              <Image
                height={400}
                width={500}
                className="rounded-xl"
                src={"jonathan.png"}
                alt={"jonathan"}
                placeholder="blur"
                blurDataURL={"jonathan.png"}
              />
            </div>
          ) : null}
        </div>
        <div
          className={`flex flex-col justify-center items-center ${
            isMobile ? "mt-[100px]" : "mt-[0px]"
          }`}
          ref={skillRef}
        >
          <div className="flex flex-col justify-center items-center leading-tight">
            <p className="text-black text-[30px] font-sans font-extrabold mb-8 text-center">
              Technical Expertise
            </p>
          </div>
          <div
            className={`mb-[50px] ${isDesktopOrLaptop ? "w-7/12" : "w-11/12"}`}
          >
            <p className="text-zinc-500 text-[16px] font-sans font-normal text-center">
              {blockchain}
            </p>
          </div>
          <HeadlessTab
            tabTitles={[
              "Web & Mobile",
              "Blockchain",
              isDesktopOrLaptop ? "Machine Learning" : "ML",
            ]}
            content={[
              <div className="h-[600px]">
                {isDesktopOrLaptop ? (
                  <div className="flex flx-row h-full w-full">
                    <div className="flex flex-col h-full w-4/12 border-r border-[#4F46E5]">
                      <div className="flex h-10 justify-center items-center w-full shadow-sm">
                        Front End
                      </div>
                      <div className="flex flex-col h-full justify-start pt-10 items-center w-full px-2 gap-4">
                        <Button variant={"outline-primary"} className="w-full">
                          React
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          React Native
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Flutter
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          JavaScript
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          TypeScript
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Dart
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col h-full w-4/12 border-r border-[#4F46E5]">
                      <div className="flex h-10 justify-center items-center w-full shadow-sm">
                        Backend End
                      </div>
                      <div className="flex flex-col h-full justify-start pt-10 items-center w-full px-2 gap-4">
                        <Button variant={"outline-primary"} className="w-full">
                          Nodejs
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Python
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          NoSQL DBs
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          GraphQL
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Containers
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Cloud Functions
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col h-full w-4/12">
                      <div className="flex h-10 justify-center items-center w-full shadow-sm">
                        Platform
                      </div>
                      <div className="flex flex-col h-full justify-start pt-10 items-center w-full px-2 gap-4">
                        <Button variant={"outline-primary"} className="w-full">
                          AWS
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          GCP
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Azure
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Firebase
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Amplify
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Apollo
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col h-full w-full">
                    <div className="flex flex-row h-full w-full border-b border-[#4F46E5]">
                      <div className="flex h-4/12 justify-center items-center w-3/12 shadow-md">
                        Front End
                      </div>
                    </div>
                    <div className="flex flex-row h-full w-full border-b border-[#4F46E5]">
                      <div className="flex h-4/12 justify-center items-center w-3/12 shadow-md">
                        Backend End
                      </div>
                    </div>
                    <div className="flex flex-row h-full w-full">
                      <div className="flex h-4/12 justify-center items-center w-3/12 shadow-md">
                        Platform
                      </div>
                    </div>
                  </div>
                )}
              </div>,
              <div className="h-[600px]">
                {isDesktopOrLaptop ? (
                  <div className="flex flx-row h-full w-full">
                    <div className="flex flex-col h-full w-4/12 border-r border-[#4F46E5]">
                      <div className="flex h-10 justify-center items-center w-full shadow-sm">
                        Front End
                      </div>
                      <div className="flex flex-col h-full justify-start pt-10 items-center w-full px-2 gap-4">
                        <Button variant={"outline-primary"} className="w-full">
                          React
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          React Native
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Flutter
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          JavaScript
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          TypeScript
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Dart
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col h-full w-4/12 border-r border-[#4F46E5]">
                      <div className="flex h-10 justify-center items-center w-full shadow-sm">
                        Backend End
                      </div>
                      <div className="flex flex-col h-full justify-start pt-10 items-center w-full px-2 gap-4">
                        <Button variant={"outline-primary"} className="w-full">
                          Nodejs
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Python
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          NoSQL DBs
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          GraphQL
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Containers
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Cloud Functions
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col h-full w-4/12">
                      <div className="flex h-10 justify-center items-center w-full shadow-sm">
                        Platform
                      </div>
                      <div className="flex flex-col h-full justify-start pt-10 items-center w-full px-2 gap-4">
                        <Button variant={"outline-primary"} className="w-full">
                          AWS
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          GCP
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Azure
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Firebase
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Amplify
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Apollo
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col h-full w-full">
                    <div className="flex flex-row h-full w-full border-b border-[#4F46E5]">
                      <div className="flex h-4/12 justify-center items-center w-3/12 shadow-md">
                        Front End
                      </div>
                    </div>
                    <div className="flex flex-row h-full w-full border-b border-[#4F46E5]">
                      <div className="flex h-4/12 justify-center items-center w-3/12 shadow-md">
                        Backend End
                      </div>
                    </div>
                    <div className="flex flex-row h-full w-full">
                      <div className="flex h-4/12 justify-center items-center w-3/12 shadow-md">
                        Platform
                      </div>
                    </div>
                  </div>
                )}
              </div>,
              <div className="h-[600px]">
                {isDesktopOrLaptop ? (
                  <div className="flex flx-row h-full w-full">
                    <div className="flex flex-col h-full w-4/12 border-r border-[#4F46E5]">
                      <div className="flex h-10 justify-center items-center w-full shadow-sm">
                        Front End
                      </div>
                      <div className="flex flex-col h-full justify-start pt-10 items-center w-full px-2 gap-4">
                        <Button variant={"outline-primary"} className="w-full">
                          React
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          React Native
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Flutter
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          JavaScript
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          TypeScript
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Dart
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col h-full w-4/12 border-r border-[#4F46E5]">
                      <div className="flex h-10 justify-center items-center w-full shadow-sm">
                        Backend End
                      </div>
                      <div className="flex flex-col h-full justify-start pt-10 items-center w-full px-2 gap-4">
                        <Button variant={"outline-primary"} className="w-full">
                          Nodejs
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Python
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          NoSQL DBs
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          GraphQL
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Containers
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Cloud Functions
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col h-full w-4/12">
                      <div className="flex h-10 justify-center items-center w-full shadow-sm">
                        Platform
                      </div>
                      <div className="flex flex-col h-full justify-start pt-10 items-center w-full px-2 gap-4">
                        <Button variant={"outline-primary"} className="w-full">
                          AWS
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          GCP
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Azure
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Firebase
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Amplify
                        </Button>
                        <Button variant={"outline-primary"} className="w-full">
                          Apollo
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col h-full w-full">
                    <div className="flex flex-row h-full w-full border-b border-[#4F46E5]">
                      <div className="flex h-4/12 justify-center items-center w-3/12 shadow-md">
                        Front End
                      </div>
                    </div>
                    <div className="flex flex-row h-full w-full border-b border-[#4F46E5]">
                      <div className="flex h-4/12 justify-center items-center w-3/12 shadow-md">
                        Backend End
                      </div>
                    </div>
                    <div className="flex flex-row h-full w-full">
                      <div className="flex h-4/12 justify-center items-center w-3/12 shadow-md">
                        Platform
                      </div>
                    </div>
                  </div>
                )}
              </div>,
            ]}
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
                link={service.link}
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
                link={service.link}
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
                link={service.link}
                title={service.title}
                subtitle={service.subtitle}
              />
            </Card>
          ))}
        </div>
        <div className="flex flex-col mt-30 justify-center items-center bg-gray-50">
          <div className="flex flex-col justify-center items-center leading-tight">
            <p className="text-black text-[30px] font-sans font-extrabold mt-4 mb-2">
              {"In a Nutshell"}
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
              href="https://twitter.com/jonathanvurse"
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
