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
  areaofinterest,
  bio,
  briefBio,
  coreAreasOfService,
  expertise,
  portfolio,
} from "../constants";
import { NextPageWithLayout } from "../types/next-page";
import HeadlessTab from "../components/HeadlessTab";
import WebMobile from "../modules/design";
import Blockchain from "../modules/dev";
import AI from "../modules/deploy";
import Lottie from "lottie-react";
import animationData from "../public/landingai.json";
import Design from "../modules/design";

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
        <title>Jonathan Daniels</title>
        <meta
          name="description"
          content="Senior Artificial Intelligence Engineer - Vancouver, Canada"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <main className="h-100 w-100 bg-gray-50">
        <div className={`h-28 w-full bg-gray-50 flex justify-center`}>
          <div
            className={`flex flex-row ${
              isMobile ? "w-11/12" : "w-8/12"
            } justify-between items-center`}
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
                variant={"outline-primary"}
                onClick={handleGetStarted}
                className={
                  "bg-transparent border border-[#4F46E5] h-10 rounded-xl w-[200px] text-gray-900"
                }
              >
                <p className="text-[#4F46E5] font-sans font-bold">
                  Jonathan Daniels
                </p>
              </Button>
            </div>
          </div>
        </div>
        <div
          className={`w-100 bg-gray-50 flex flex-col justify-start items-center pt-20 ${
            isTabletOrMobile ? "h-[800px]" : "h-[800px]"
          }`}
        >
          <Button
            variant={"primary"}
            className={`bg-transparent h-10 rounded-xl ${
              isTabletOrMobile ? "mb-10 w-10/12" : "mb-2 w-full"
            }`}
          >
            <p className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-900 text-sm font-sans">
              Collaborated with 30+ Companies
            </p>
          </Button>
          <div className="flex flex-col justify-center items-center leading-tight">
            <p
              className={`text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-900 font-sans font-extrabold ${
                isTabletOrMobile ? "text-[30px]" : "text-[50px]"
              }`}
            >
              Senior Software
            </p>
            <p
              className={`text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-900 font-sans font-extrabold mb-8 ${
                isTabletOrMobile ? "text-[30px]" : "text-[50px]"
              }`}
            >
              Engineer
            </p>
          </div>

          <div
            className={` ${
              isDesktopOrLaptop ? "w-6/12" : "w-9/12"
            } h-20 w-80 flex justify-center items-center mt-24 mb-2 rounded-full`}
          >
            <Lottie animationData={animationData} loop={true} autoplay={true} />
          </div>

          <div
            className={`flex ${
              isTabletOrMobile
                ? "flex-col h-full w-11/12 items-center justify-center"
                : "flex-row w-8/12 justify-between items-center mt-32 px-4"
            }`}
          >
            <a
              href="https://firebasestorage.googleapis.com/v0/b/site-360ad.appspot.com/o/Resume%20(1).pdf?alt=media&token=d683df68-cc68-4db1-a8a0-d279d7dcbdc5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant={"outline-primary"}
                className={`border border-[#4F46E5] h-10 rounded-xl w-[200px] text-gray-900 ${
                  isTabletOrMobile ? "mb-2" : ""
                }`}
              >
                <p className="text-[#4F46E5] text-sm font-sans font-bold">
                  Resume
                </p>
              </Button>
            </a>
            <a
              href="https://nucleusinstitute.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant={"outline-primary"}
                className={`border border-[#4F46E5] h-10 rounded-xl w-[200px] text-gray-900 ${
                  isTabletOrMobile ? "mb-2" : ""
                }`}
              >
                <p className="text-[#4F46E5] text-sm font-sans font-bold">
                  Latest Project
                </p>
              </Button>
            </a>
            <a
              href="https://www.upwork.com/freelancers/~0144e39f7980edb847"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant={"outline-primary"}
                className={`border border-[#4F46E5] h-10 rounded-xl w-[200px] text-gray-900 ${
                  isTabletOrMobile ? "mb-2" : ""
                }`}
              >
                <p className="text-[#4F46E5] text-sm font-sans font-bold">
                  Freelance Work
                </p>
              </Button>
            </a>
            <a
              href="https://www.upwork.com/agencies/1388543012695896064/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant={"outline-primary"}
                className={
                  "border border-[#4F46E5] h-10 rounded-xl w-[200px] text-gray-900"
                }
              >
                <p className="text-[#4F46E5] text-sm font-sans font-bold">
                  Studio
                </p>
              </Button>
            </a>
          </div>
          <div ref={isDesktopOrLaptop ? cardRef : null}></div>
        </div>
        <div
          className={`w-100 bg-gray-50 flex justify-center items-center relative ${
            isTabletOrMobile || isMobile ? "h-[650px]" : "h-[600px]"
          }`}
        >
          {isTabletOrMobile ? (
            <Card
              className={` ${
                isMobile ? "w-11/12" : "w-10/12"
              } h-[650px] roundedXl flex flex-col justify-around items-left bg-white absolute top-[50px] z-0`}
            >
              <div
                className={`h-full w-full  flex flex-col justify-between items-left ${
                  isTabletOrMobile ? "mb-6" : isMobile ? "pt-4" : ""
                } z-0`}
              >
                <div className="h-full w-full">
                  <p className="text-black text-lg font-sans font-extrabold mb-4 text-left">
                    Bio
                  </p>
                  <p className="text-gray-800 text-md font-sans text-justify mb-6">
                    {bio}
                  </p>
                </div>
                <div className="h-full w-full">
                  <p className="text-black text-lg font-sans font-extrabold mb-4 text-left">
                    Areas of Interest
                  </p>
                  <p className="text-gray-800 text-md font-sans text-justify mb-6">
                    {areaofinterest}
                  </p>
                </div>
              </div>
            </Card>
          ) : (
            <Card className="h-[600px] w-8/12 roundedXl flex flex-row justify-around items-left bg-white absolute bottom-[50px] z-0">
              <div className="h-full w-6/12  flex flex-col justify-between items-left mr-4 z-0">
                <div className="h-full w-full">
                  <p className="text-black text-lg font-sans font-extrabold mb-4 text-left">
                    Bio
                  </p>
                  <p className="text-gray-800 text-md font-sans text-justify mb-6">
                    {bio}
                  </p>
                </div>
                <div className="h-full w-full">
                  <p className="text-black text-lg font-sans font-extrabold mb-4 text-left">
                    Areas of Interest
                  </p>
                  <p className="text-gray-800 text-md font-sans text-justify mb-6">
                    {areaofinterest}
                  </p>
                </div>
              </div>

              <Image
                height={350}
                width={500}
                className="rounded-xl"
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
              className="h-[400px] mt-4 mb-4  w-11/12 bg-transparent flex rounded-3xl justify-center items-center"
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
            isMobile ? "mt-[0px]" : "mt-[0px]"
          }`}
          ref={skillRef}
        >
          <div className="flex flex-col justify-center items-center leading-tight">
            <p className="text-black text-[30px] font-sans font-extrabold mt-16 mb-4 text-center">
              Technical Expertise
            </p>
          </div>
          <div
            className={`mb-[25px] ${isDesktopOrLaptop ? "w-7/12" : "w-11/12"}`}
          >
            <p className="text-zinc-500 text-[16px] font-sans font-normal text-center">
              {expertise}
            </p>
          </div>
          <HeadlessTab
            tabTitles={["Design", "Development", "Deployment"]}
            content={[
              <div className={isDesktopOrLaptop ? "h-[600px]" : "h-full"}>
                <Design />
              </div>,
              <div className={isDesktopOrLaptop ? "h-[600px]" : "h-full"}>
                <Blockchain />
              </div>,
              <div className={isDesktopOrLaptop ? "h-[600px]" : "h-full"}>
                <AI />
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
            <p className="text-black text-[30px] font-sans font-extrabold mb-4 text-center">
              Projects Portfolio
            </p>
          </div>
          <div className={`${isDesktopOrLaptop ? "w-7/12" : "w-11/12"}`}>
            <p className="text-zinc-500 text-[16px] font-sans font-normal text-center">
              {portfolio}
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
        <div className="h-[150px] w-full bg-white flex flex-col justify-center items-center">
          <div className={`flex flex-row mb-4 w-[250px] justify-around px-6`}>
            <a
              href="https://github.com/Jonathan-Nucleus"
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
              href="https://www.linkedin.com/in/mind4machine/"
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
              href="https://twitter.com/mind4machine"
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
            Vancouver, British Columbia, Canada
          </p>
        </div>
      </main>
    </>
  );
};

Home.layout = "landing";

export default Home;
