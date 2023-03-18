import Head from "next/head";
import {
  TwitterLogo,
  PaperPlaneTilt,
  NotePencil,
  DeviceMobileCamera,
  LinkedinLogo,
} from "phosphor-react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import CircularButton from "../components/Circular";
import Button from "../components/Button";
import Image from "next/image";
import Card from "../components/Card";
import Feature from "../modules/feature";
import Accordion from "../modules/accordion";
import { accordionData } from "../constants";
import ModalDialog from "../components/ModalDialog";
import RegisterForm from "../modules/registerForm";
import LoginForm from "../modules/loginForm";
import ResetForm from "../modules/resetForm";
import VerifyForm from "../modules/verification";
import StepOne from "../modules/stepOne";
import StepTwo from "../modules/stepTwo";
import { getFunctions, httpsCallable } from "firebase/functions";
import RedirectModal from "../modules/redirect";
import { NextPageWithLayout } from "../types/next-page";
import { FormProvider, useForm } from "react-hook-form";
import Logo from "../public/logo.png";

import { storage } from "../firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { uuid } from "uuidv4";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../assistants/query";

const Home: NextPageWithLayout = () => {
  const [xloading, setXLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [getStarted, setGetStarted] = useState(false);
  const [flowStep, setFlowStep] = useState("one");
  const [stepOneData, setStepOneData] = useState<any>({});
  const [stepTwoData, setStepTwoData] = useState<any>({});
  const [modal, setModal] = useState(false);
  const [authstep, setAuthStep] = useState("register");
  const [otp, setOtp] = useState<string>();

  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);

  const methods = useForm({});
  const router = useRouter();
  const functions = getFunctions();
  const sendCode = httpsCallable(functions, "sendCode");

  const randomCode = Math.floor(1000 + Math.random() * 9000).toString();

  const uploadPhoto = () => {
    const file = stepOneData!.file[0];

    if (!file) return;

    const storageRef = ref(storage, `profilePhotos/${file.name + uuid()}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL: any) => {
          setImgUrl(downloadURL);
        });
      }
    );
  };

  const onSubmitStepOne = (data: any) => {
    console.log(data);
    setStepOneData(data);
    setFlowStep("two");
  };

  const onSubmitStepTwo = (data: any) => {
    console.log(data);
    setStepTwoData(data);
    uploadPhoto();
    setFlowStep("three");
    setAuthStep("register");
    setModal(true);
  };

  const onVerify = () => {
    setXLoading(true);
    setOtp(randomCode);
    sendCode({ code: randomCode })
      .then(() => {
        setXLoading(false);
      })
      .catch((error) => {
        setXLoading(false);
        console.log(
          error,
          "Network Error",
          "Please check your network connection and try again."
        );
      });
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  const instructions = [
    "Enter your information",
    "Sign up and generate your card",
    "Add card to your mobile wallet",
  ];

  return (
    <>
      <ModalDialog
        title={
          authstep === "register"
            ? "Create an Account to access your ID"
            : authstep === "login"
            ? "Welcome Back"
            : authstep === "reset"
            ? "Password Reset"
            : authstep === "redirect"
            ? "Let's get started"
            : "Please check your email"
        }
        show={modal}
        onClose={() => setModal(false)}
        className={`shadow-lg rounded-3xl h-full ${
          isDesktopOrLaptop ? "w-4/12" : "w-full"
        }`}
      >
        {authstep === "register" ? (
          <RegisterForm
            formOne={stepOneData}
            formTwo={stepTwoData}
            onSignin={() => setAuthStep("login")}
            onSignup={() => {
              onVerify();
              setAuthStep("verify");
            }}
            imgURL={imgUrl}
          />
        ) : authstep === "login" ? (
          <LoginForm
            onSignin={() => setAuthStep("redirect")}
            onReset={() => setAuthStep("reset")}
          />
        ) : authstep === "reset" ? (
          <ResetForm onSignin={() => setAuthStep("login")} />
        ) : authstep === "redirect" ? (
          <RedirectModal onSignin={() => setAuthStep("login")} />
        ) : (
          <VerifyForm
            onResend={() => setAuthStep("login")}
            onVerify={() => {
              setVerifyLoading(true);
              router.push("/id");
            }}
            otpCode={otp!}
            loadingVal={verifyLoading}
          />
        )}
      </ModalDialog>
      <Head>
        <title>Multivurse - Welcome</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-100 w-100 bg-gray-50">
        <div
          className={`h-28 bg-black flex flex-row justify-between items-center ${
            isTabletOrMobile ? "px-8" : "px-28"
          }`}
        >
          <Image height={100} width={100} src={"/logo.png"} alt={"Logo"} />
          <div>
            <Button
              variant={"primary"}
              onClick={() => {
                // setAuthStep("login");
                // setModal(true);
              }}
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
          <div className={isTabletOrMobile ? "w-8/12 mt-6" : "w-6/12"}>
            <p
              className={`text-zinc-200 text-[18px] font-sans font-normal ${
                isTabletOrMobile ? "text-center" : "text-center"
              }`}
            >
              Maximize Wealth, Minimize Effort: Streamlined Wealth Management
              for Tomorrow
            </p>
          </div>
          {isTabletOrMobile ? (
            ""
          ) : (
            <div className="w-7/12 flex flex-row justify-around items-baseline mt-32">
              <div className="flex flex-row items-center justify-center">
                <CircularButton
                  icon={<p className="text-white font-bold text-md">1</p>}
                  onPressed={() => {}}
                  bgColor={"red"}
                />
                <p className="text-white text-sm font-sans ml-4">
                  Select Option
                </p>
              </div>

              <div className="flex flex-row items-center justify-center">
                <CircularButton
                  icon={<p className="text-white font-bold text-md">2</p>}
                  onPressed={() => {}}
                  bgColor={"red"}
                />
                <p className="text-white text-sm font-sans ml-4">
                  Complete Onboarding
                </p>
              </div>
              <div className="flex flex-row items-center justify-center">
                <CircularButton
                  icon={<p className="text-white font-bold text-md">3</p>}
                  onPressed={() => {}}
                  bgColor={"red"}
                />
                <p className="text-white text-sm font-sans ml-4">
                  Access Service
                </p>
              </div>
            </div>
          )}
        </div>
        <div
          className={`w-100 bg-gray-50 flex justify-center items-center relative ${
            isTabletOrMobile && getStarted === true
              ? "h-[750px]"
              : isTabletOrMobile && getStarted === false
              ? "h-[250px]"
              : "h-[600px]"
          }`}
        >
          {isTabletOrMobile && getStarted === false ? (
            <Card className="h-[400px] w-10/12 roundedXl flex flex-col justify-center items-center bg-white absolute bottom-[0px]">
              {instructions.map((val, index) => {
                return (
                  <Card className="h-16 w-10/12 bg-gray-100 my-2">
                    <div className="flex flex-row items-center justify-start">
                      <CircularButton
                        icon={
                          <p className="text-white font-bold text-md">
                            {index + 1}
                          </p>
                        }
                        onPressed={() => {}}
                        bgColor={"red"}
                      />
                      <p className="text-gray-900 text-md font-sans ml-4">
                        {val}
                      </p>
                    </div>
                  </Card>
                );
              })}
              <Button
                variant={"primary"}
                className={"bg-red-500 h-[65px] rounded-[15px] w-10/12 my-2"}
                onClick={() => setGetStarted(true)}
              >
                <p className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-900 text-sm font-sans font-bold">
                      Clients
                    </p>
              </Button>
            </Card>
          ) : isTabletOrMobile && getStarted === true ? (
            <Card className="h-[900px] w-10/12 roundedXl flex flex-col justify-center items-center bg-white absolute bottom-[0px]">
              {flowStep === "one" ? (
                <div className="w-full h-full">
                  <StepOne onSubmit={onSubmitStepOne} />
                </div>
              ) : (
                <div className="w-full h-full">
                  <StepTwo
                    onSubmit={onSubmitStepTwo}
                    onPrev={() => setFlowStep("one")}
                    loadingVal={xloading}
                  />
                </div>
              )}
            </Card>
          ) : (
            <Card className="h-[700px] w-10/12 roundedXl flex flex-row justify-around items-left bg-white absolute bottom-[100px] z-0">
              <div className="h-full w-6/12  flex flex-col justify-between items-left mr-4 z-0">
                <div className="w-full">
                  <Card className="h-[100px] w-full roundedXl flex flex-row justify-around items-center bg-white mb-5 drop-shadow-sm border border-indigo-500">
                    <p className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-900 text-lg font-sans font-extrabold">
                      Clients
                    </p>
                  </Card>
                  <Card className="h-[100px] w-full roundedXl flex flex-row justify-around items-center bg-white drop-shadow-sm border border-indigo-500">
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
                    Dear valued customers, we would like to inform you that our
                    service is currently under active development and will be
                    available soon. Our team is working tirelessly to ensure
                    that we provide you with the best possible service. We
                    apologize for any inconvenience this may cause and
                    appreciate your patience during this time. Rest assured that
                    we are doing everything we can to make the service available
                    to you as soon as possible.
                  </p>
                </div>
              </div>

              <div className="h-[650px] w-6/12 bg-gray-100 flex rounded-3xl justify-center items-center">
                <video
                  className="rounded-xl"
                  height={"full"}
                  style={{ objectFit: "cover", height: 660 }}
                  src={"/couple.mp4"}
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
            isTabletOrMobile ? "mt-[100px]" : "mt-[0px]"
          }`}
        >
          <div className="flex flex-col justify-center items-center leading-tight">
            <p className="text-black text-[30px] font-sans font-extrabold mb-8 text-center">
              {isTabletOrMobile
                ? "Why a Digital ID ?"
                : "Core Areas of Service ?"}
            </p>
          </div>
          <div className="w-8/12">
            <p className="text-zinc-500 text-[16px] font-sans font-normal text-center">
              As the first step in every player's recruitment, identification is
              crucial. Our digital ID is a secure and convenient card that can
              be stored in your mobile wallet that can easily shared.
            </p>
          </div>
        </div>
        <div
          className={`flex justify-center mt-20 mb-20 bg-gray-50 ${
            isTabletOrMobile ? "flex-col items-center" : "flex-row"
          }`}
        >
          <Card
            className={`bg-white h-52 w-80 ${
              isTabletOrMobile ? "mb-8" : "mr-6"
            }`}
          >
            <Feature
              icon={<PaperPlaneTilt size={40} color={"#4F46E5"} />}
              title={"Easy to Share"}
              subtitle={"Seamlessly share Player ID via text or email"}
            />
          </Card>
          <Card
            className={`bg-white h-52 w-80 ${
              isTabletOrMobile ? "mb-8" : "mr-6"
            }`}
          >
            <Feature
              icon={<NotePencil size={40} color="#4F46E5" />}
              title={"Fully Editable"}
              subtitle={"Edit and update Player ID with change notifications"}
            />
          </Card>
          <Card
            className={`bg-white h-52 w-80 ${
              isTabletOrMobile ? "mb-8" : "mr-6"
            }`}
          >
            <Feature
              icon={<DeviceMobileCamera size={40} color={"#4F46E5"} />}
              title={"Mobile Wallet Enabled"}
              subtitle={
                "Conveniently store Player ID on iPhone and Android (Coming Soon)"
              }
            />
          </Card>
        </div>
        <div
          className={`flex justify-center mt-20 mb-20 bg-gray-50 ${
            isTabletOrMobile ? "flex-col items-center" : "flex-row"
          }`}
        >
          <Card
            className={`bg-white h-52 w-80 ${
              isTabletOrMobile ? "mb-8" : "mr-6"
            }`}
          >
            <Feature
              icon={<PaperPlaneTilt size={40} color={"#4F46E5"} />}
              title={"Easy to Share"}
              subtitle={"Seamlessly share Player ID via text or email"}
            />
          </Card>
          <Card
            className={`bg-white h-52 w-80 ${
              isTabletOrMobile ? "mb-8" : "mr-6"
            }`}
          >
            <Feature
              icon={<NotePencil size={40} color={"#4F46E5"} />}
              title={"Fully Editable"}
              subtitle={"Edit and update Player ID with change notifications"}
            />
          </Card>
          <Card
            className={`bg-white h-52 w-80 ${
              isTabletOrMobile ? "mb-8" : "mr-6"
            }`}
          >
            <Feature
              icon={<DeviceMobileCamera size={40} color={"#4F46E5"} />}
              title={"Mobile Wallet Enabled"}
              subtitle={
                "Conveniently store Player ID on iPhone and Android (Coming Soon)"
              }
            />
          </Card>
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
          <div className="flex flex-row mb-4 w-40 justify-around">
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
