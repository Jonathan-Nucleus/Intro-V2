import { FC, useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import Label from "../../components/Label";
import { httpsCallable } from "firebase/functions";
import { auth, functions } from "../../firebaseConfig";
import { onAuthStateChanged } from "@firebase/auth";
import { CheckCircle, Eye } from "phosphor-react";
import { Controller, useFormContext } from "react-hook-form";
import Button from "../../components/Button";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

const PasswordPage: FC<FeatureProps> = ({ edit }) => {
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

  const onSubmit = (data: any) => {
    console.log(userID, "submit==============");
    editID({
      id: userID,
      userData: {
        fullName: data.fullName,
        hometown: data.hometown,
        highschool: data.highschool,
        class: data.class,
        sport: data.sport,
        birthDate: data.birthDate,
        clubTeam: data.clubTeam,
        position: data.position,
        height: data.height,
        weight: data.weight,
      },
    }).then((result: any) => {
      console.log(result.data, "result, ==================");
      setIdData(result.data);
    });
  };

  useEffect(() => {
    fetchID({ id: userID }).then((result: any) => {
      console.log(result.data);
      setIdData(result.data);
    });
  }, []);

  console.log(idData?.birthDate);

  return (
    <div className="flex flex-col justify-between items-between h-full w-full mb-20">
      <form
        className="flex flex-col justify-start h-full w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className={`mb-2 w-full ${
            edit ? "pointer-events-none" : "pointer-events-all"
          }`}
        >
          <Label htmlFor="lastName" className="text-md text-gray-700">
            Current Password
          </Label>
          <div className="flex items-center relative mt-2">
            <Input
              type="password"
              className="bg-gray-50 border-gray-400 placeholder-gray-600"
              hint={"xxxxxxxxxxxxxx"}
              style={{ letterSpacing: 2, fontSize: 12, fontWeight: "bold" }}
            />

            <Eye
              size={24}
              weight="regular"
              color="currentColor"
              className="text-primary absolute right-2"
            />
          </div>
        </div>
        <div
          className={`mb-2 w-full ${
            edit ? "pointer-events-none" : "pointer-events-all"
          }`}
        >
          <Label htmlFor="lastName" className="text-md text-gray-700">
            New Password
          </Label>
          <Input
            className="bg-gray-50 border-gray-400 placeholder-gray-600"
            hint={""}
            {...register("hometown")}
          />
        </div>
        <div
          className={`mb-2 w-full ${
            edit ? "pointer-events-none" : "pointer-events-all"
          }`}
        >
          <Label htmlFor="lastName" className="text-md text-gray-700">
            Confirm New Password
          </Label>
          <Input
            className="bg-gray-50 border-gray-400 placeholder-gray-600"
            hint={""}
            {...register("hometown")}
          />
        </div>
      </form>
    </div>
  );
};

export default PasswordPage;
