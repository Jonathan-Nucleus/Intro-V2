import { FC, useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import Label from "../../components/Label";
import { httpsCallable } from "firebase/functions";
import { auth, functions } from "../../firebaseConfig";
import { onAuthStateChanged } from "@firebase/auth";
import { PencilCircle } from "phosphor-react";
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

const IdPage: FC<FeatureProps> = ({ edit }) => {
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
      setIdData(result.data);
    });
  };


  return (
    <div className="flex flex-col justify-between items-between h-full w-full mb-20">
      <form
        className="flex flex-col justify-start h-full w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-2">
          <Label htmlFor="lastName" className="text-md text-gray-700">
            Profile Picture
          </Label>
          <div className="h-40 w-full bg-gray-50 border border-dashed border-gray-900 rounded-xl flex flex-row justify-between items-center pl-2 pr-6">
           
            <div className="h-full w-full flex flex-row justify-start items-center p-4">
              <Image
                src={idData?.profilePhoto ?? "/placeholder.png"}
                height={100}
                width={150}
                alt={"profile-image"}
                style={{
                  objectFit: "cover",
                  cursor: "pointer",
                  borderRadius: 10,
                  minHeight: 120,
                  maxHeight: 120
                }}
              />
           
            </div>
          </div>
        </div>
        <div
          className={`mb-2 ${
            edit ? "pointer-events-none" : "pointer-events-all"
          }`}
        >
          <Label htmlFor="lastName" className="text-md text-gray-700">
            Full Name
          </Label>
          <Input
            className="bg-gray-50 border-gray-400 placeholder-gray-600"
            hint={idData?.fullName}
            {...register("fullName")}
          />
        </div>
        <div
          className={`mb-2 ${
            edit ? "pointer-events-none" : "pointer-events-all"
          }`}
        >
          <Label htmlFor="lastName" className="text-md text-gray-700">
            Home Town
          </Label>
          <Input
            className="bg-gray-50 border-gray-400 placeholder-gray-600"
            hint={idData?.hometown}
            {...register("hometown")}
          />
        </div>
        <div
          className={`mb-2 ${
            edit ? "pointer-events-none" : "pointer-events-all"
          }`}
        >
          <Label htmlFor="lastName" className="text-md text-gray-700">
            HighSchool Name
          </Label>
          <Input
            className="bg-gray-50 border-gray-400 placeholder-gray-600"
            hint={idData?.highschool}
            {...register("highschool")}
          />
        </div>
        <div
          className={`mb-2 ${
            edit ? "pointer-events-none" : "pointer-events-all"
          }`}
        >
          <Label htmlFor="lastName" className="text-md text-gray-700">
            Graduating Class
          </Label>
          <Controller
            name={"class"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Dropdown
                width={"w-full"}
                list={"grad"}
                hint={idData?.class}
                value={value!}
                onChange={onChange}
              />
            )}
          />
        </div>
        <div
          className={`mb-2 ${
            edit ? "pointer-events-none" : "pointer-events-all"
          }`}
        >
          <Label htmlFor="lastName" className="text-md text-gray-700">
            Date of Birth
          </Label>
          <Input
            className="bg-gray-50 border-gray-400 placeholder-gray-600"
            hint={idData?.birthDate}
            {...register("birthDate")}
          />
        </div>
        <div
          className={`mb-2 ${
            edit ? "pointer-events-none" : "pointer-events-all"
          }`}
        >
          <Label htmlFor="lastName" className="text-md text-gray-700">
            Sport
          </Label>
          <Controller
            key={1}
            name={"sport"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Dropdown
                width={"w-full"}
                list={"sport"}
                hint={idData?.class}
                value={value!}
                onChange={onChange}
              />
            )}
          />
        </div>
        <div
          className={`mb-2 ${
            edit ? "pointer-events-none" : "pointer-events-all"
          }`}
        >
          <Label htmlFor="lastName" className="text-md text-gray-700">
            Club Team
          </Label>
          <Input
            className="bg-gray-50 border-gray-400 placeholder-gray-600"
            hint={idData?.clubTeam}
            {...register("clubTeam")}
          />
        </div>
        <div
          className={`mb-2 ${
            edit ? "pointer-events-none" : "pointer-events-all"
          }`}
        >
          <Label htmlFor="lastName" className="text-md text-gray-700">
            Position
          </Label>
          <Input
            className="bg-gray-50 border-gray-400 placeholder-gray-600"
            hint={idData?.position}
            {...register("position")}
          />
        </div>
        <div className="flex flex-row justify-between items-start mt-2 mb-[10px] h-full w-full">
          <div
            className={`mb-2 mr-6 z-40 w-full ${
              edit ? "pointer-events-none" : "pointer-events-all"
            }`}
          >
            <Label htmlFor="lastName" className="text-md text-gray-700">
              Height
            </Label>
            <Controller
              key={1}
              name={"height"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Dropdown
                  width={"w-full"}
                  list={"height"}
                  hint={idData?.height}
                  value={value!}
                  onChange={onChange}
                />
              )}
            />
          </div>
          <div
            className={`mb-2 z-40 w-full ${
              edit ? "pointer-events-none" : "pointer-events-all"
            }`}
          >
            <Label htmlFor="lastName" className="text-md text-gray-700">
              Weight
            </Label>
            <Controller
              name={"weight"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Dropdown
                  width={"w-full"}
                  list={"weight"}
                  hint={idData?.weight}
                  value={value!}
                  onChange={onChange}
                />
              )}
            />
          </div>
        </div>
        {/* <Button
          variant={"primary"}
          type="submit"
          className={"bg-red-500 rounded-xl w-full mt-6"}
        >
          <p className="text-white text-sm font-sans">Save</p>
        </Button> */}
      </form>
    </div>
  );
};

export default IdPage;
