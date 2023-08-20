import { FC } from "react";
import Button from "../../components/Button";
import { useMediaQuery } from "react-responsive";

const Deploy: FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  return (
    <>
      {isMobile ? (
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-col h-full w-full">
            <div className="flex h-10 justify-center items-center w-full text-white bg-[#4F46E5]">
            Scalability & Integration
            </div>
            <div className="flex flex-col h-full justify-start pt-10 pb-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
              Model Serving
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              API Creation
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Cloud Deployment
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Edge Deployment
              </Button>
            </div>
          </div>
          <div className="flex flex-col h-full w-full">
            <div className="flex h-10 justify-center items-center w-full text-white bg-[#4F46E5]">
            Monitoring & Maintenance
            </div>
            <div className="flex flex-col h-full justify-start pt-10 pb-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
              Model Monitoring
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Continuous Learning
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Error Analysis
              </Button>
            </div>
          </div>
          <div className="flex flex-col h-full w-full">
            <div className="flex h-10 justify-center items-center w-full text-white bg-[#4F46E5]">
            Security & Compliance
            </div>
            <div className="flex flex-col h-full justify-start pt-10 pb-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
              Adversarial Attacks
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Data Privacy & GDPR
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Model Encryption
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flx-row h-full w-full">
          <div className="flex flex-col h-full w-4/12 border-r border-[#4F46E5]">
          <div className="flex h-10 justify-center items-center w-full text-white bg-[#4F46E5]">
            Scalability & Integration
            </div>
            <div className="flex flex-col h-full justify-start pt-10 pb-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
              Model Serving
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              API Creation
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Cloud Deployment
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Edge Deployment
              </Button>
            </div>
          </div>
          <div className="flex flex-col h-full w-4/12 border-r border-[#4F46E5]">
          <div className="flex h-10 justify-center items-center w-full text-white bg-[#4F46E5]">
            Monitoring & Maintenance
            </div>
            <div className="flex flex-col h-full justify-start pt-10 pb-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
              Model Monitoring
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Continuous Learning
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Error Analysis
              </Button>
            </div>
          </div>
          <div className="flex flex-col h-full w-4/12">
          <div className="flex h-10 justify-center items-center w-full text-white bg-[#4F46E5]">
            Security & Compliance
            </div>
            <div className="flex flex-col h-full justify-start pt-10 pb-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
              Adversarial Attacks
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Data Privacy & GDPR
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Model Encryption
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Deploy;
