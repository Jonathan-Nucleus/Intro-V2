import { FC } from "react";
import Button from "../../components/Button";
import { useMediaQuery } from "react-responsive";

const Development: FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  return (
    <>
      {isMobile ? (
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-col h-full w-full">
            <div className="flex h-10 justify-center items-center w-full text-white bg-[#4F46E5]">
              Algorithmic Development
            </div>
            <div className="flex flex-col h-full justify-start pt-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
                Supervised Learning
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Unsupervised Learning
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Reinforcement Learning
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Transfer Learning
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Few-shot Learning
              </Button>
            </div>
          </div>
          <div className="flex flex-col h-full w-full">
            <div className="flex h-10 justify-center items-center w-full text-white bg-[#4F46E5]">
              Data Management
            </div>
            <div className="flex flex-col h-full justify-start pt-10 pb-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
              Data Collection
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Data Cleaning
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Preprocessing
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Data Augmentation
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Feature Engineering
              </Button>
            </div>
          </div>
          <div className="flex flex-col h-full w-full">
            <div className="flex h-10 justify-center items-center w-full text-white bg-[#4F46E5]">
            Environment & Tools
            </div>
            <div className="flex flex-col h-full justify-start pt-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
                Python
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Notebooks
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                PyTorch
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Tenserflow
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Sagemaker
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                VertexAI
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flx-row h-full w-full">
          <div className="flex flex-col h-full w-4/12 border-r border-[#4F46E5]">
            <div className="flex h-10 justify-center items-center w-full text-white bg-[#4F46E5]">
              Algorithmic Development
            </div>
            <div className="flex flex-col h-full justify-start pt-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
                Supervised Learning
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Unsupervised Learning
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Reinforcement Learning
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Transfer Learning
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Few-shot Learning
              </Button>
            </div>
          </div>
          <div className="flex flex-col h-full w-4/12 border-r border-[#4F46E5]">
            <div className="flex h-10 justify-center items-center w-full text-white bg-[#4F46E5]">
              Data Management
            </div>
            <div className="flex flex-col h-full justify-start pt-10 pb-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
              Data Collection
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Data Cleaning
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Preprocessing
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Data Augmentation
              </Button>
              <Button variant={"outline-primary"} className="w-full">
              Feature Engineering
              </Button>
            </div>
          </div>
          <div className="flex flex-col h-full w-4/12">
            <div className="flex h-10 justify-center items-center w-full text-white bg-[#4F46E5]">
            Environment & Tools
            </div>
            <div className="flex flex-col h-full justify-start pt-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
                Python
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Notebooks
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                PyTorch
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Tenserflow
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                DataBricks
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Sagemaker
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                VertexAI
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Development;
