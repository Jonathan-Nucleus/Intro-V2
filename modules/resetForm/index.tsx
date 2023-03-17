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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import Link from "next/link";
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
};

const schema = yup
  .object({
    email: yup.string().email("Must be a valid email").required("Required"),
  })
  .required();

interface Props {
  onSignin: VoidFunction;
}

const ResetForm: FC<Props> = ({ onSignin }) => {
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
    createUserWithEmailAndPassword(auth, data.email, '')
      .then(async (res) => {
        setLoading(false);
        console.log(res);
        await router.replace("/home");
      })
      .catch((err) => {
        console.log(err);
        setError("Your email and/or password are incorrect.");
      });
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <div className="flex flex-col justify-start items-start w-full rounded-full">
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
          <div className="mt-4">
            <Button
              type="submit"
              variant="primary"
              className="w-full pt-2 mt-2 mb-2 text-md text-white bg-red-500 hover:bg-red-500 disabled:bg-gray-400 disabled:pointer-events-none px-4 py-2"
              disabled={false}
              loading={loading}
            >
              Reset
            </Button>
          </div>
          <div className="flex flex-row justify-center items-center mt-2">
            <span className="text-sm text-gray-900 ">
              Return to,
            </span>
            <button onClick={onSignin}>
              <span className="text-[10px] font-bold ml-2 text-red-500">
                sign in
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetForm;
