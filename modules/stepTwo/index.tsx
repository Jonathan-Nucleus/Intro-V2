import { FC, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useMediaQuery } from "react-responsive";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import Label from "../../components/Label";

interface FeatureProps {
  onSubmit: (data: any) => void;
  onPrev: VoidFunction;
  loadingVal: boolean;
}

const StepTwo: FC<FeatureProps> = ({ onPrev, loadingVal, onSubmit }) => {
  const { register, control, handleSubmit, formState: { isValid, errors } } = useFormContext();

  return (
    <div className="flex flex-col justify-between items-between h-full w-full relative">
      <form className="flex flex-col justify-between items-between h-full w-full relative" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2 relative mt-20">
          <Label htmlFor="lastName" className="text-md text-gray-700">
            Date of Birth
          </Label>
          <Input
            id="lastName"
            className="bg-gray-50 border-gray-400 text-sm"
            hint="MM/DD/YEAR"
            {...register("birthdate", { required: true })}
          />
        </div>
        <div className="mb-4 z-40 absolute flex flex-col w-full">
          <Label htmlFor="lastName" className="text-md text-gray-700">
            Sport
          </Label>
          <Controller
            name={"sport"}
            control={control}
            rules={{required: true}}
            render={({ field: { onChange, value } }) => (
              <Dropdown
                width={"w-full"}
                list={"sport"}
                hint="Choose One"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </div>

        <div className="mb-2 mt-0">
          <Label htmlFor="lastName" className="text-md text-gray-700">
            Club Team
          </Label>
          <Input
            id="lastName"
            className="bg-gray-50 border-gray-400 text-sm z-50"
            hint="Kingston Kings"
            {...register("team", { required: true })}
          />
        </div>
        <div className="mb-2">
          <Label htmlFor="lastName" className="text-md text-gray-700">
            Position
          </Label>
          <Input
            id="lastName"
            className="bg-gray-50 border-gray-400 text-sm z-50"
            hint="Point Guard (PG)"
            {...register("position", { required: true })}
          />
        </div>

        <div className="flex flex-col w-full h-full relative z-50 justify-between">
          <div className="flex flex-row justify-between items-start absolute mt-2 mb-[10px] h-full w-full">
            <div className="mb-2 mr-6 z-50 w-full">
              <Label htmlFor="lastName" className="text-md text-gray-700">
                Height
              </Label>
              <Controller
                name={"height"}
                control={control}
                rules={{required: true}}
                render={({ field: { onChange, value } }) => (
                  <Dropdown
                    width={"w-full"}
                    list={"height"}
                    hint="Choose One"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </div>
            <div className="mb-2 z-50 w-full">
              <Label htmlFor="lastName" className="text-md text-gray-700">
                Weight
              </Label>
              <Controller
                name={"weight"}
                control={control}
                rules={{required: true}}
                render={({ field: { onChange, value } }) => (
                  <Dropdown
                    width={"w-full"}
                    list={"weight"}
                    hint="Choose One"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </div>
          </div>
          <div className="flex flex-row h-full w-full justify-between items-end absolute mt-[0px]">
            <Button
              variant={"primary"}
              className={"bg-gray-300 h-[60px] rounded-xl w-full mr-6"}
              onClick={onPrev}
            >
              <p className="text-white text-sm font-sans">Back</p>
            </Button>
            <Button
              variant={"primary"}
              className={"bg-red-500 h-[60px] rounded-xl w-full"}
              loading={loadingVal}
              disabled={!isValid}
              type="submit"
            >
              <p className="text-white text-sm font-sans">
                SignUp and Generate
              </p>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
