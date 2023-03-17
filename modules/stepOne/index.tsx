import { FC, useContext, useState } from "react";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Image from "next/image";
import { Controller, useFormContext } from "react-hook-form";
import Alert from "../../components/Alert";
import { WarningCircle } from "phosphor-react";

interface Props {
  onSubmit: (data: any) => void;
}

const StepOne: FC<Props> = ({ onSubmit }) => {
  const [file, setFile] = useState<any>(null);
  const { register, control, handleSubmit, formState: { isValid, errors }} = useFormContext();

  const fileField = register('file', { required: true })

  function handleChange(e: any) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="flex flex-col justify-between items-between h-full w-full">
      <form
        className="flex flex-col justify-between items-between h-full w-full relative"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-2">
          <Label htmlFor="lastName" className="text-md text-gray-700">
            Profile Picture
          </Label>
          <div className="h-40 w-full bg-gray-50 border border-dotted border-gray-300 rounded-xl flex flex-row justify-between items-center pl-2 pr-6">
            <div className="h-full w-full flex flex-row justify-start items-center p-4">
              <Image
                src={file ?? "/placeholder.png"}
                height={100}
                width={file ? 150 : 150}
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
            <label className="h-10 w-32 bg-gray-200 rounded p-4 flex justify-center items-center text-gray-600 cursor-pointer mr-6">
              Browse
              <input
                id="fgf"
                type="file"
                className="h-20 w-40"
                style={{ display: "none" }}
                {...fileField}
                onChange={(e) => {
                  fileField.onChange(e);
                  handleChange(e);
                }}
              />
            </label>
          </div>
        </div>
        <div className="mb-2">
          <Label htmlFor="lastName" className="text-md text-gray-700">
            Full Name
          </Label>
          <Input
            className="bg-gray-50 border-gray-400 text-sm"
            hint="John Doe"
            {...register("name", { required: true } )}
          />
        </div>
        <div className="mb-2">
          <Label htmlFor="lastName" className="text-md text-gray-700">
            Home Town
          </Label>
          <Input
            className="bg-gray-50 border-gray-400 text-sm"
            hint="Los Angeles, CA"
            {...register("hometown", { required: true })}
          />
        </div>
        <div className="mb-2">
          <Label htmlFor="lastName" className="text-md text-gray-700">
            HighSchool Name
          </Label>
          <Input
            className="bg-gray-50 border-gray-400 text-sm"
            hint="Sierra Canyon"
            {...register("highschool", { required: true })}
          />
        </div>
        <div className="mb-2">
          <Label htmlFor="lastName" className="text-md text-gray-700">
            Graduating Class
          </Label>
          <Controller
            name={"class"}
            rules={{ required: true }}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Dropdown
                width={"w-full"}
                list={"grad"}
                hint="Choose One"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </div>
        <div className="mt-16"></div>
        <Button
          variant={"primary"}
          type="submit"
          className={"bg-red-500 rounded-xl w-full"}
          disabled={!isValid}
        >
          <p className="text-white text-sm font-sans">Continue</p>
        </Button>
      </form>
    </div>
  );
};

export default StepOne;
