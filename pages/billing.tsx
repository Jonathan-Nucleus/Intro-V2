import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";
import Alert from "../components/Alert";
import {
  InstagramLogo,
  PencilCircle,
  TwitterLogo,
  WarningCircle,
  YoutubeLogo,
} from "phosphor-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MouseEvent, useState } from "react";
import Label from "../components/Label";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Image from "next/image";
import CircularButton from "../components/Circular";
import { NextPageWithLayout } from "../types/next-page";
import SocialsPage from "../modules/socialsPage";
import BillingPage from "../modules/billingPage";

const Billing: NextPageWithLayout = () => {
  const [btn, setBtn] = useState(true);

  return (
    <>
      <Head>
        <title>TPC - Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-full w-full bg-gray-50 justify-start items-start rounded-3xl mt-5 pl-10 pr-10">
        <div className="flex flex-row w-full justify-between items-center mb-4">
          <p className="text-2xl text-black ml-0 mt-4">Billing Details</p>
          <div className="flex w-3/12 flex-row items-center justify-start mt-4">
            <PencilCircle size={25} color={"#111"} />
            <button className="ml-2" onClick={() => {}}>
              {" "}
              {"Edit Information"}
            </button>
          </div>
        </div>
        <BillingPage edit={btn}  />
      </div>
    </>
  );
}

Billing.layout = "main";
Billing.background = "default";

export default Billing;