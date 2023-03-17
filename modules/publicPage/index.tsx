import { FC, useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import Label from "../../components/Label";
import { httpsCallable } from "firebase/functions";
import { auth, functions } from "../../firebaseConfig";
import { onAuthStateChanged } from "@firebase/auth";
import {
  InstagramLogo,
  ArrowUpRight,
  TwitterLogo,
  TiktokLogo,
  YoutubeLogo,
} from "phosphor-react";
import { Controller, useFormContext } from "react-hook-form";
import Button from "../../components/Button";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Alert from "../../components/Alert";
import { useMediaQuery } from "react-responsive";
import CircularButton from "../../components/Circular";
import router, { Router } from "next/router";

interface FeatureProps {
  edit: boolean;
}

interface ID {
  birthDate: string;
  class: string;
  clubTeam: string;
  fullName: string;
  height: string;
  highschool: string;
  hometown: string;
  position: string;
  sport: string;
  weight: string;
  profilePhoto: string;
}

const schema = yup
  .object({
    birthDate: yup.string(),
    class: yup.array(yup.string().required()),
    clubTeam: yup.string(),
    fullName: yup.string(),
    height: yup.array(yup.string().required()),
    highschool: yup.string(),
    hometown: yup.string(),
    position: yup.string(),
    sport: yup.array(yup.string().required()),
    weight: yup.array(yup.string().required()),
  })
  .required();

const PublicPage: FC<FeatureProps> = ({ edit }) => {
  const [idData, setIdData] = useState<ID>();
  const fetchID = httpsCallable(functions, "fetchID");
  const editID = httpsCallable(functions, "editID");
  const userID = auth.currentUser?.uid;

  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm<yup.InferType<typeof schema>>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  console.log(control._formValues);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 600px)" });

  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <div
      className={`flex flex-col justify-between items-between bg-black w-full ${
          isMobile ? "h-[1000px]" : "h-screen"
      }`}
    >
      <div
        className={`h-28 bg-black flex flex-row justify-between items-center ${
          isDesktopOrLaptop ? "px-20" : "px-2"
        }`}
      >
        <Image
          height={60}
          width={60}
          src={"/tpc.svg"}
          alt={"Logo"}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <div>
          <Button
            variant={"primary"}
            onClick={() => router.push("/")}
            className={`bg-gray-900 h-10 rounded-xl ${
              isTabletOrMobile ? "mr-0" : "mr-2"
            }`}
          >
            Get your player ID{" "}
            <ArrowUpRight
              size={25}
              color={"#f3f4f6"}
              weight={"fill"}
              style={{ marginLeft: 10 }}
            />
          </Button>
        </div>
      </div>
      <div className="flex flex-row h-full w-full bg-slate-500 justify-center items-center p-4">
        <div
          className={`flex flex-col justify-center items-center ${
            isDesktopOrLaptop ? "w-3/12" : "w-full"
          } `}
        >
          <div
            className={`flex flex-col rounded-xl bg-red-500 ${
              isDesktopOrLaptop
                ? "w-full mr-4"
                : isTabletOrMobile
                ? "w-6/12 mb-10"
                : "w-full mb-10"
            }`}
            style={{ height: 500 }}
          >
            <div
              className="bg-red-500 pr-2 rounded-xl"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: 75,
                width: "100%",
              }}
            >
              <div
                className="flex flex-row items-center"
                style={{ width: "50%" }}
              >
                <div
                  className="p-4 mt-2 ml-2 rounded-lg bg-red-200"
                  style={{ width: 70 }}
                >
                  <Image
                    height={50}
                    width={50}
                    src={"/tpc.svg"}
                    alt={"Logo"}
                    onClick={() => router.push("/")}
                    className="cursor-pointer"
                  />
                </div>
                <p className="ml-4 text-white">Player ID</p>
              </div>
              <div
                className="flex flex-col justify-center items-end mr-2"
                style={{ width: "50%" }}
              >
                <p className="ml-4 text-sm text-white">Class of 2023</p>
                <p
                  className="ml-4 text-md text-white font-bold"
                  style={{ letterSpacing: 1.15 }}
                >
                  Basketball
                </p>
              </div>
            </div>
            <div
              className="bg-red-500 pr-2"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: 100,
                width: "100%",
              }}
            >
              <div
                className="flex flex-col justify-center items-start"
                style={{ width: "50%" }}
              >
                <p className="ml-4 text-sm text-white">NAME</p>
                <p
                  className="ml-4 text-xl text-white font-bold"
                  style={{ letterSpacing: 1.15 }}
                >
                  Chris Mitchell
                </p>
              </div>
              <div className="mr-2 mt-2" style={{ width: 100 }}>
                <Image
                  height={100}
                  width={100}
                  src={"/placeholder.png"}
                  alt={"Logo"}
                  onClick={() => router.push("/")}
                  className="cursor-pointer"
                  style={{ borderRadius: 10 }}
                />
              </div>
            </div>
            <div
              className="bg-red-500 pr-4"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: 75,
                width: "100%",
              }}
            >
              <div
                className="flex flex-col justify-center items-start"
                style={{ width: "50%" }}
              >
                <p className="ml-4 text-sm text-white">DOB</p>
                <p className="ml-4 text-sm text-white font-bold" style={{}}>
                  11/05/07
                </p>
              </div>
              <div
                className="flex flex-col justify-center items-start"
                style={{ width: "50%" }}
              >
                <p className="ml-4 text-sm text-white">SCHOOL</p>
                <p className="ml-4 text-sm text-white font-bold" style={{}}>
                  Sierra Canyon
                </p>
              </div>
              <div
                className="flex flex-col justify-center items-start"
                style={{ width: "50%" }}
              >
                <p className="ml-4 text-sm text-white">HOMETOWN</p>
                <p className="ml-4 text-sm text-white font-bold" style={{}}>
                  L.A. California
                </p>
              </div>
            </div>
            <div
              className="bg-red-500 pr-4"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: 50,
                width: "100%",
              }}
            >
              <div
                className="flex flex-col justify-center items-start"
                style={{ width: "50%" }}
              >
                <p className="ml-4 text-sm text-white">TEAM</p>
                <p className="ml-4 text-sm text-white font-bold" style={{}}>
                  Hawks
                </p>
              </div>
              <div
                className="flex flex-col justify-center items-start"
                style={{ width: "50%" }}
              >
                <p className="ml-4 text-sm text-white">HEIGHT</p>
                <p className="ml-4 text-sm text-white font-bold" style={{}}>
                  6'3
                </p>
              </div>
              <div
                className="flex flex-col justify-center items-start"
                style={{ width: "50%" }}
              >
                <p className="ml-4 text-sm text-white">WEIGHT</p>
                <p className="ml-4 text-sm text-white font-bold" style={{}}>
                  190
                </p>
              </div>
              <div
                className="flex flex-col justify-center items-start"
                style={{ width: "50%" }}
              >
                <p className="ml-4 text-sm text-white">POSITION</p>
                <p className="ml-4 text-sm text-white font-bold" style={{}}>
                  CG
                </p>
              </div>
            </div>

            <div
              className="bg-red-500 pr-4"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: 50,
                width: "100%",
              }}
            >
              <div
                className="flex flex-col justify-center items-start"
                style={{ width: "50%" }}
              >
                <p className="ml-4 text-sm text-white">SECONDARY SPORT</p>
                <p className="ml-4 text-sm text-white font-bold" style={{}}>
                  Volleyball
                </p>
              </div>
            </div>
            <div
              className="bg-red-500 pr-4"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "end",
                height: 140,
                width: "100%",
              }}
            >
              <div
                className="flex flex-col justify-center mt-4 items-start"
                style={{ width: "50%" }}
              >
                <p className="ml-4 text-sm text-white">SOCIALS</p>
                <div className="flex flex-row mb-4 ml-3 mt-2 w-40 justify-between">
                  <CircularButton
                    icon={
                      <TwitterLogo
                        size={25}
                        color={"#f24a4a"}
                        weight={"fill"}
                      />
                    }
                    onPressed={() => {}}
                    bgColor={"gray2"}
                  />
                  <CircularButton
                    icon={
                      <InstagramLogo
                        size={25}
                        color={"#f24a4a"}
                        weight={"fill"}
                      />
                    }
                    onPressed={() => {}}
                    bgColor={"gray2"}
                  />
                  <CircularButton
                    icon={
                      <TiktokLogo size={25} color={"#f24a4a"} weight={"fill"} />
                    }
                    onPressed={() => {}}
                    bgColor={"gray2"}
                  />
                  <CircularButton
                    icon={
                      <YoutubeLogo
                        size={25}
                        color={"#f24a4a"}
                        weight={"fill"}
                      />
                    }
                    onPressed={() => {}}
                    bgColor={"gray2"}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 125,
                  width: 125,
                  borderRadius: 10,
                  backgroundColor: "#fff",
                  padding: 10,
                }}
              >
                <Image
                  height={120}
                  width={120}
                  src={"/qrcode.png"}
                  alt={"Logo"}
                  onClick={() => router.push("/")}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          {isDesktopOrLaptop ? null : (
            <Button
              type="submit"
              variant="primary"
              className={`pt-2 mt-2 mb-2 text-md text-gray-200 border border-gray-200 bg-black disabled:bg-gray-400 disabled:pointer-events-none px-4 py-2 ${
                isTabletOrMobile ? "w-6/12" : "w-full"
              } `}
              disabled={false}
            >
              Add to Wallet
            </Button>
          )}
        </div>

        {isDesktopOrLaptop ? (
          <video
            className="rounded-xl"
            style={{ height: 500 }}
            src={"/reel.mp4"}
            autoPlay={true}
            muted={true}
            loop={true}
          />
        ) : null}
      </div>
      <div className="flex w-full mb-10 justify-center items-center">
        {!isDesktopOrLaptop ? (
          <video
            className="w-full rounded-xl"
            style={{ width: 350, backgroundColor: "#000" }}
            src={"/reel.mp4"}
            autoPlay={true}
            muted={true}
            loop={true}
          />
        ) : null}
      </div>

      <div className="h-[160px] w-full bg-black mb-10 flex flex-col justify-center items-center">
        <div className="flex flex-row mb-4 w-40 justify-between">
          <CircularButton
            icon={<TwitterLogo size={25} color={"#f3f4f6"} weight={"fill"} />}
            onPressed={() => {}}
            bgColor={"red"}
          />
          <CircularButton
            icon={<InstagramLogo size={25} color={"#f3f4f6"} weight={"fill"} />}
            onPressed={() => {}}
            bgColor={"red"}
          />
          <CircularButton
            icon={<YoutubeLogo size={25} color={"#f3f4f6"} weight={"fill"} />}
            onPressed={() => {}}
            bgColor={"red"}
          />
        </div>
        <p className="text-gray-400 text-sm font-sans">
          Copyright 2022. The Players Circle{" "}
        </p>
      </div>
    </div>
  );
};

export default PublicPage;
