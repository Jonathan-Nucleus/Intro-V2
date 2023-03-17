import Card from "../../components/Card";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Alert from "../../components/Alert";
import {
  CheckCircle,
  WarningCircle,
  GoogleLogo,
  AppleLogo,
} from "phosphor-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FC, MouseEvent, useState } from "react";
import Label from "../../components/Label";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { browserSessionPersistence, createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import Image from "next/image";
import CircularButton from "../../components/Circular";

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

export type FormValues = {
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
  onSignin: VoidFunction;
  onReset: VoidFunction;
}

const LoginForm: FC<Props> = ({ onSignin, onReset }) => {
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
  const router = useRouter();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setLoading(true);
    setPersistence(auth, browserSessionPersistence)
  .then(() => {
    return signInWithEmailAndPassword(auth, data.email, data.password)
    .then(async () => {
      setLoading(false);
      await router.replace("/id");
    })
    .catch((err) => {
      console.log(err);
      setError(err.message);
      setLoading(false);
    });
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const passwordField = watch("password");
  return (
    <div className="flex flex-col justify-start items-start h-[200px] w-full rounded-full">
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
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              autoComplete="email"
              {...register("email")}
              className="mt-2 border-gray-400"
            />
          </div>
          <div className="mt-2 mb-2">
            <div className="flex flex-row justify-between items-center">
              <Label htmlFor="password">Password</Label>

              <div className="text-red-500 text-sm font-normal cursor-pointer" onClick={onReset}>
                Forgot
              </div>
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
          <div className="mt-4">
            <Button
              type="submit"
              variant="primary"
              className="w-full pt-2 mt-2 mb-2 text-md text-white bg-red-500 hover:bg-red-500 disabled:bg-gray-400 disabled:pointer-events-none px-4 py-2"
              disabled={false}
              loading={loading}
            >
              Sign In
            </Button>
          </div>
          <div className="flex flex-row justify-center items-center mt-2">
            <span className="text-sm text-gray-900 ">
              Don't have an account,
            </span>
            <button onClick={onSignin}>
              <span className="text-[10px] font-bold ml-2 text-red-500">
                get started
              </span>
            </button>
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

export default LoginForm;
