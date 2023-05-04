import { FC } from "react";
import Button from "../../components/Button";
import { useMediaQuery } from "react-responsive";

const WebMobile: FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  return (
    <>
      {isMobile ? (
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-row h-full w-full border-b border-[#4F46E5]">
            <div className="flex h-4/12 justify-center items-center w-3/12 shadow-md">
              Front End
            </div>
          </div>
          <div className="flex flex-row h-full w-full border-b border-[#4F46E5]">
            <div className="flex h-4/12 justify-center items-center w-3/12 shadow-md">
              Backend End
            </div>
          </div>
          <div className="flex flex-row h-full w-full">
            <div className="flex h-4/12 justify-center items-center w-3/12 shadow-md">
              Platform
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flx-row h-full w-full">
          <div className="flex flex-col h-full w-4/12 border-r border-[#4F46E5]">
            <div className="flex h-10 justify-center items-center w-full shadow-sm">
              Front End
            </div>
            <div className="flex flex-col h-full justify-start pt-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
                React
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                React Native
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Flutter
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                JavaScript
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                TypeScript
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Dart
              </Button>
            </div>
          </div>
          <div className="flex flex-col h-full w-4/12 border-r border-[#4F46E5]">
            <div className="flex h-10 justify-center items-center w-full shadow-sm">
              Backend End
            </div>
            <div className="flex flex-col h-full justify-start pt-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
                Nodejs
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Python
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                NoSQL DBs
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                GraphQL
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Containers
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Cloud Functions
              </Button>
            </div>
          </div>
          <div className="flex flex-col h-full w-4/12">
            <div className="flex h-10 justify-center items-center w-full shadow-sm">
              Platform
            </div>
            <div className="flex flex-col h-full justify-start pt-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
                AWS
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                GCP
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Azure
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Firebase
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Amplify
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Apollo
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WebMobile;
