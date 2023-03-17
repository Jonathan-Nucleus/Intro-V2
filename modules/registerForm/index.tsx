import Card from "../../components/Card";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Alert from "../../components/Alert";
import {
  CheckCircle,
  WarningCircle,
  GoogleLogo,
  AppleLogo,
  Users,
} from "phosphor-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FC, useState } from "react";
import Label from "../../components/Label";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, functions } from "../../firebaseConfig";
import Image from "next/image";
import CircularButton from "../../components/Circular";
import { httpsCallable } from "firebase/functions";

import { storage } from "../../firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const passwordRequirements = [
  {
    label: "Upper and lower case",
    pattern: /(?=.*[a-z])(?=.*[A-Z])/,
  },
  {
    label: "Numbers",
    pattern: /(?=.*\d)/,
  },
  {
    label: "Special characters (ex: @$!%*?&.^#)",
    pattern: /(?=.*[@$!%*?&.^#])/,
  },
  {
    label: "8+ characters",
    pattern: /.{8,}/,
  },
];

const PASSWORD_PATTERN = new RegExp(
  `^${passwordRequirements
    .map((requirement) => requirement.pattern.source)
    .join("")}$`
);

type FormValues = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().email("Must be a valid email").required("Required"),
    password: yup
      .string()
      .matches(PASSWORD_PATTERN, "Invalid Password")
      .required("Required"),
  })
  .required();

interface Props {
  formOne: any;
  formTwo: any;
  onSignin: VoidFunction;
  onSignup: VoidFunction;
  imgURL: any;
}

const RegisterForm: FC<Props> = ({ onSignin, onSignup, formOne, formTwo, imgURL }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid, errors },
  } = useForm<yup.InferType<typeof schema>>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });


  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setLoading(true);
    console.log(data, formOne, formTwo);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (res) => {
        const user = res.user;
        const createID = httpsCallable(functions, "createID");
        await createID({
          userData: {
            id: user.uid,
            email: data.email,
            password: data.password,
            fullName: formOne.name,
            hometown: formOne.hometown,
            highschool: formOne.highschool,
            class: formOne.class.value,
            sport: formTwo.sport.value,
            birthDate: formTwo.birthdate,
            clubTeam: formTwo.team,
            position: formTwo.position,
            height: formTwo.height.value,
            weight: formTwo.weight.value,
            profilePhoto: imgURL,
          },
          userId: user.uid,
        });
        setLoading(false);
        onSignup();
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setLoading(false);
      });
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const passwordField = watch("password");
  return (
    <div className="flex flex-col justify-start items-start h-[200px] w-full rounded-full">
      <div className="text-gray-400 text-sm font-normal mt-4 w-80">
        By continuing you agree to our terms of service and privacy policy.
      </div>

      <div className="w-full">
        <div className="my-6">
          <div className={error ? "block bg-gray-900 rounded-lg" : "hidden"}>
            <Alert variant="error">
              <div className="flex flex-row">
                <div className="flex-shrink-0 text-error">
                  <WarningCircle size={24} weight="bold" color="#fff" />
                </div>
                <div className="text-white ml-3">{error}</div>
              </div>
            </Alert>
          </div>
        </div>
        <form method="post" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-8">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              autoComplete="email"
              {...register("email")}
              className="mt-2 border-gray-400"
            />
          </div>
          <div className="mt-2 mb-2">
            <div className="flex flex-row justify-between">
              <Label htmlFor="password">Create a password</Label>
              <a
                className="text-sm text-primary cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </a>
            </div>
            <div className="flex items-center relative mt-2">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                className="border-gray-400"
                {...register("password")}
              />
              {passwordField?.match(PASSWORD_PATTERN) && (
                <CheckCircle
                  size={24}
                  weight="fill"
                  color="currentColor"
                  className="text-primary absolute right-2"
                />
              )}
            </div>
          </div>
          <p className="text-gray-400 text-sm font-normal mt-4 w-80">
            Include uppercase, lowercase, numbers, symbols
          </p>
          <div className="mt-4">
            <Button
              type="submit"
              variant="primary"
              className="w-full pt-2 mt-2 mb-2 text-md text-white bg-red-500 hover:bg-red-500 disabled:bg-gray-400 disabled:pointer-events-none px-4 py-2"
              disabled={false}
              loading={loading}
            >
              Sign Up
            </Button>
          </div>

          <div className="flex flex-row justify-between items-center">
            <div className="h-0.5 bg-gray-200 w-full"></div>
            <span className="text-lg text-red-200 px-4">or</span>
            <div className="h-0.5 bg-gray-200 w-full"></div>
          </div>
          <div className="mt-6">
            <Button
              type="submit"
              variant="primary"
              className="w-full pt-2 mt-2 mb-2 text-sm text-gray-500 bg-transparent border border-gray-200 disabled:bg-gray-400 disabled:pointer-events-none px-4 py-2"
              disabled={false}
              alignmentClass="justify-start"
            >
              <div className="ml-2 mr-4">
                <CircularButton
                  bgColor="gray2"
                  icon={
                    <Image
                      src={"/google.png"}
                      height={20}
                      width={20}
                      alt={"Icon"}
                    />
                  }
                  onPressed={() => {}}
                />
              </div>

              <p>Continue with Google </p>
            </Button>
          </div>
          <div className="mt-2">
            <Button
              type="submit"
              variant="primary"
              className="w-full pt-2 mt-2 mb-2 text-sm text-gray-500 bg-transparent border border-gray-200 disabled:bg-gray-400 disabled:pointer-events-none px-4 py-2"
              disabled={false}
              alignmentClass="justify-start"
            >
              <div className="ml-2 mr-4">
                <CircularButton
                  bgColor="gray2"
                  icon={
                    <Image
                      src={"/apple.png"}
                      height={20}
                      width={20}
                      alt={"Icon"}
                    />
                  }
                  onPressed={() => {}}
                />
              </div>
              <p>Continue with Apple</p>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
