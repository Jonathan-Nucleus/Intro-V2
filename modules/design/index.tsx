import { FC } from "react";
import Button from "../../components/Button";
import { useMediaQuery } from "react-responsive";

const Design: FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  return (
    <>
      {isMobile ? (
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-col h-full w-full">
            <div className="flex h-10 justify-center items-center w-full text-white bg-[#4F46E5]">
              Architectural Design
            </div>
            <div className="flex flex-col h-full justify-start pt-10 pb-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
                Neural Networks
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Knowledge-based Systems
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Evolutionary Algorithms
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Swarm Intelligence
              </Button>
            </div>
          </div>
          <div className="flex flex-col h-full w-full">
            <div className="flex h-10 justify-center items-center w-full text-white bg-[#4F46E5]">
              Application Design
            </div>
            <div className="flex flex-col h-full justify-start pt-10 pb-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
              Vision Systems
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Natural Language Processing
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Robotics and Automation
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Recommender Systems
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Personal Assistants
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Predictive Algorithms
              </Button>
            </div>
          </div>
          <div className="flex flex-col h-full w-full">
            <div className="flex h-10 justify-center items-center w-full text-white bg-[#4F46E5]">
              Ethical and User-Centric Design
            </div>
            <div className="flex flex-col h-full justify-start pt-10 pb-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
                Transparency and Explainability
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Privacy and Security
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Fairness and Bias Mitigation
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Human-AI Collaboration
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flx-row h-full w-full">
          <div className="flex flex-col h-full w-4/12 border-r border-[#4F46E5]">
          <div className="flex h-10 justify-center items-center w-full text-white bg-[#4F46E5]">
              Architectural Design
            </div>
            <div className="flex flex-col h-full justify-start pt-10 pb-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
                Neural Networks
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Knowledge-based Systems
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Evolutionary Algorithms
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Swarm Intelligence
              </Button>
            </div>
          </div>
          <div className="flex flex-col h-full w-4/12 border-r border-[#4F46E5]">
          <div className="flex h-10 justify-center items-center w-full text-white bg-[#4F46E5]">
              Application Design
            </div>
            <div className="flex flex-col h-full justify-start pt-10 pb-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
              Vision Systems
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Natural Language Processing
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Robotics and Automation
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Recommender Systems
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Personal Assistants
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Predictive Algorithms
              </Button>
            </div>
          </div>
          <div className="flex flex-col h-full w-4/12">
            <div className="flex h-10 justify-center items-center w-full text-white bg-[#4F46E5]">
              Ethical and User-Centric Design
            </div>
            <div className="flex flex-col h-full justify-start pt-10 pb-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
                Transparency and Explainability
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Privacy and Security
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Fairness and Bias Mitigation
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Human-AI Collaboration
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Design;
