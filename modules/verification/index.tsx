import Card from "../../components/Card";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Alert from "../../components/Alert";
import {
  WarningCircle,
} from "phosphor-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FC, useState } from "react";
import OtpInput from "react-otp-input";

export type FormValues = {
  code: string;
};

const schema = yup
  .object({
    email: yup.string().email("Must be a valid email").required("Required"),
  })
  .required();

interface Props {
  onResend: VoidFunction;
  onVerify: VoidFunction;
  otpCode: string;
  loadingVal: boolean;
}

const VerifyForm: FC<Props> = ({ onResend, onVerify, otpCode, loadingVal}) => {
  const [error, setError] = useState("");
  const [otp, setOtp] = useState<string>();
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid, errors },
  } = useForm<yup.InferType<typeof schema>>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onChange = (otp: string) => setOtp(otp);

  return (
    <>
      <p className="text-gray-400 text-sm text-start font-normal mt-4 w-80">
        We have sent a code to your account
      </p>
      <div className="flex flex-col justify-start items-center w-full rounded-full">
        <div className="my-2">
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

        <div className="w-12/12 h-full flex flex-row justify-center items-center mb-2 ">
          <OtpInput
            value={otp}
            onChange={onChange}
            numInputs={4}
            className="p"
            focusStyle={{border: "1px solid #19e14b"}}
            inputStyle={ otp === otpCode ? {
              height: 80,
              width: 80,
              border: "1px solid #19e14b",
              borderRadius: 10,
              marginRight: 10,
              fontSize: 75,
              fontWeight: "bold",
              textAlign: "center",
            } :  {
              height: 80,
              width: 80,
              border: "1px solid #e01414",
              borderRadius: 10,
              marginRight: 10,
              fontSize: 75,
              fontWeight: "bold",
              textAlign: "center",
            }}
          />
        </div>
        <div className="flex flex-row justify-center items-center mt-2 mb-2">
          <span className="text-sm text-gray-900 ">Didn’t get a code ?</span>
          <button onClick={onResend}>
            <span className="text-[10px] font-bold ml-2 text-red-500">
              Click to resend
            </span>
          </button>
        </div>
        <div className="flex w-full flex-row justify-between items-center mt-2 relative mb-2">
          <Button
            variant={"primary"}
            className={"bg-gray-300 h-[60px] rounded-xl w-full mr-6"}
            onClick={() => {}}
          >
            <p className="text-black text-sm font-sans">Cancel</p>
          </Button>
          <Button
            variant={"primary"}
            loading={loadingVal}
            disabled={otp === otpCode ? false : true}
            className={"bg-red-500 h-[60px] rounded-xl w-full"}
            onClick={onVerify}
          >
            <p className="text-white text-sm font-sans">Proceed</p>
          </Button>
        </div>
      </div>
    </>
  );
};

export default VerifyForm;
