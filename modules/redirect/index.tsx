import Card from "../../components/Card";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Alert from "../../components/Alert";
import {
  CheckSquareOffset
} from "phosphor-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FC, MouseEvent, useState } from "react";
import Label from "../../components/Label";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import Link from "next/link";
import CircularButton from "../../components/Circular";

export type FormValues = {
  email: string;
};

const schema = yup
  .object({
    email: yup.string().email("Must be a valid email").required("Required"),
  })
  .required();

interface Props {
  onSignin: VoidFunction;
}

const RedirectModal: FC<Props> = ({ onSignin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <div className="flex flex-col justify-center items-center h-40  w-full rounded-full">
      <CheckSquareOffset size={125} color={"#333"}/>
      <p className="text-gray-600 text-md font-normal mt-4 mb-4 w-9/12">
        Begin by Filling out the form on the page
      </p>
    </div>
  );
};

export default RedirectModal;
