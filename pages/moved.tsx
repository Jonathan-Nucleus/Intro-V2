import Head from "next/head";
import {
  TwitterLogo,
  InstagramLogo,
  YoutubeLogo,
  PaperPlaneTilt,
  NotePencil,
  DeviceMobileCamera,
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

  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  
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
        <title>TPC - Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-100 w-100 bg-gray-50">
        <div
          className={`h-28 bg-black flex flex-row justify-between items-center ${
            isTabletOrMobile ? "px-8" : "px-20"
          }`}
        >
          <Image height={60} width={60} src={"/tpc.svg"} alt={"Logo"} />
          <div>
            <Button
              variant={"primary"}
              onClick={() => {
                setAuthStep("login");
                setModal(true);
              }}
              className={`bg-gray-900 h-10 rounded-xl ${
                isTabletOrMobile ? "mr-0" : "mr-4"
              }`}
            >
              Signin
            </Button>
            {isTabletOrMobile ? (
              ""
            ) : (
              <Button
                variant={"primary"}
                onClick={() => {
                  setAuthStep("redirect");
                  setModal(true);
                }}
                className="bg-red-600 h-10 rounded-xl"
              >
                Signup
              </Button>
            )}
          </div>
        </div>
        <div
          className={`h-[800px] w-100 bg-black flex flex-col justify-start items-center pt-20 ${
            isTabletOrMobile ? "h-[700px]" : "h-[800px]"
          }`}
        >
          <Button
            variant={"primary"}
            className={`bg-red-600/[.16] h-10 rounded-xl ${
              isTabletOrMobile ? "mb-10" : "mb-6"
            }`}
          >
            <p className="text-red-500 text-sm font-sans">
              42,904 Digital IDs Generated
            </p>
            <p>
              {data.users.map((user: any) => (
                <li key={user.id}>
                  {user.name} - {user.email}
                </li>
              ))}
            </p>
          </Button>
          <div className="flex flex-col justify-center items-center leading-tight">
            <p
              className={`text-white font-sans font-extrabold ${
                isTabletOrMobile ? "text-[30px]" : "text-[50px]"
              }`}
            >
              Generate and Share
            </p>
            <p
              className={`text-white font-sans font-extrabold mb-8 ${
                isTabletOrMobile ? "text-[30px]" : "text-[50px]"
              }`}
            >
              {isTabletOrMobile
                ? "your Player ID"
                : "your Player ID in seconds"}
            </p>
          </div>
          <div className={isTabletOrMobile ? "w-8/12 mt-6" : "w-6/12"}>
            <p
              className={`text-zinc-500 text-[18px] font-sans font-normal ${
                isTabletOrMobile ? "text-center" : "text-center"
              }`}
            >
              Streamline the recruitment process and revolutionize how you share
              your vital information with scouts and coaches through your mobile
              wallet.
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
                  Enter your <br /> information
                </p>
              </div>

              <div className="flex flex-row items-center justify-center">
                <CircularButton
                  icon={<p className="text-white font-bold text-md">2</p>}
                  onPressed={() => {}}
                  bgColor={"red"}
                />
                <p className="text-white text-sm font-sans ml-4">
                  Sign up and <br /> generate your card
                </p>
              </div>
              <div className="flex flex-row items-center justify-center">
                <CircularButton
                  icon={<p className="text-white font-bold text-md">3</p>}
                  onPressed={() => {}}
                  bgColor={"red"}
                />
                <p className="text-white text-sm font-sans ml-4">
                  Add card to your <br /> mobile wallet
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
                <p className="text-white text-sm font-sans">Get Started</p>
              </Button>
            </Card>
          ) : isTabletOrMobile && getStarted === true ? (
            <Card className="h-[900px] w-10/12 roundedXl flex flex-col justify-center items-center bg-white absolute bottom-[0px]">
              <div className="flex w-full flex-row px-0 justify-start items-start mb-6">
                <div className="bg-red-500 h-[8px] w-4/12 rounded-3xl mr-6"></div>
                <div
                  className={`h-[8px] w-4/12 rounded-3xl mr-6 ${
                    flowStep === "two" || flowStep === "three"
                      ? "bg-red-500"
                      : "bg-gray-300"
                  }`}
                ></div>
                <div
                  className={`h-[8px] w-4/12 rounded-3xl ${
                    flowStep === "three" ? "bg-red-500" : "bg-gray-300"
                  } `}
                ></div>
              </div>
              {flowStep === "one" ? (
                <div className="w-full h-full">
                  <StepOne onSubmit={onSubmitStepOne} />
                </div>
              ) : (
                <div className="w-full h-full">
                  <StepTwo
                    onSubmit={onSubmitStepTwo}
                    onPrev={() => setFlowStep("one")}
                    loadingVal={loading}
                  />
                </div>
              )}
            </Card>
          ) : (
            <Card className="h-[700px] w-10/12 roundedXl flex flex-row justify-around items-center bg-white absolute bottom-[100px] z-0">
              <div className="h-full w-6/12  flex flex-col justify-start items-start mr-4 z-0">
                <div className="flex w-full flex-row px-0 justify-start items-start mb-6">
                  <div className="bg-red-500 h-[8px] w-4/12 rounded-3xl mr-6"></div>
                  <div
                    className={`h-[8px] w-4/12 rounded-3xl mr-6 ${
                      flowStep === "two" || flowStep === "three"
                        ? "bg-red-500"
                        : "bg-gray-300"
                    }`}
                  ></div>
                  <div
                    className={`h-[8px] w-4/12 rounded-3xl ${
                      flowStep === "three" ? "bg-red-500" : "bg-gray-300"
                    } `}
                  ></div>
                </div>
                <FormProvider {...methods}>
                  {flowStep === "one" ? (
                    <div className="w-full h-full">
                      <StepOne onSubmit={onSubmitStepOne} />
                    </div>
                  ) : (
                    <div className="mr-10 w-full h-full">
                      <StepTwo
                        onSubmit={onSubmitStepTwo}
                        onPrev={() => setFlowStep("one")}
                        loadingVal={loading}
                      />
                    </div>
                  )}
                </FormProvider>
              </div>

              <div className="h-full w-6/12 bg-gray-100 flex rounded-3xl justify-center items-end">
                <Image
                  height={400}
                  width={325}
                  src={"/phone.png"}
                  alt={"Phone"}
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
                : "Tired of getting overlooked by recruiters ?"}
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
              icon={<PaperPlaneTilt size={40} color={"#F54543"} />}
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
              icon={<NotePencil size={40} color={"#F54543"} />}
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
              icon={<DeviceMobileCamera size={40} color={"#F54543"} />}
              title={"Mobile Wallet Enabled"}
              subtitle={
                "Conveniently store Player ID on iPhone and Android (Coming Soon)"
              }
            />
          </Card>
        </div>
        <div className="flex flex-col mt-30 justify-center items-center bg-gray-50">
          <div className="flex flex-col justify-center items-center leading-tight">
            <p className="text-black text-[30px] font-sans font-extrabold mb-8">
              {isTabletOrMobile ? "FAQs" : "Frequently Asked Questions"}
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
        <div className="flex flex-col mt-20 mb-20 justify-center items-center bg-gray-50">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} key={title} />
          ))}
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
      </main>
    </>
  );
};

Home.layout = "auth";

export default Home;
