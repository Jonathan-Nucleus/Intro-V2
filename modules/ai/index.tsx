import { FC } from "react";
import Button from "../../components/Button";
import { useMediaQuery } from "react-responsive";

const AI: FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  return (
    <>
      {isMobile ? (
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-col h-full w-full">
            <div className="flex h-10 justify-center items-center w-full text-white bg-[#4F46E5]">
              Data Science
            </div>
            <div className="flex flex-col h-full justify-start pt-10 pb-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
                DataBricks
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                SQL
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                NumPy
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Pandas
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Matplotlib
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Koalas
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Scrapy
              </Button>
            </div>
          </div>
          <div className="flex flex-col h-full w-full">
            <div className="flex h-10 justify-center items-center w-full text-white bg-[#4F46E5]">
              Machine Learning
            </div>
            <div className="flex flex-col h-full justify-start pt-10 pb-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
                Scikit
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Keras
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                PyTorch
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                TenserFlow
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                VertexAI
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Sagemaker
              </Button>
            </div>
          </div>
          <div className="flex flex-col h-full w-full">
            <div className="flex h-10 justify-center items-center w-full text-white bg-[#4F46E5]">
              Generative AI
            </div>
            <div className="flex flex-col h-full justify-start pt-10 pb-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
                OpenAI
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                GPT-4
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                LangChain
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flx-row h-full w-full">
          <div className="flex flex-col h-full w-4/12 border-r border-[#4F46E5]">
            <div className="flex h-10 justify-center items-center w-full shadow-sm">
              Data Science
            </div>
            <div className="flex flex-col h-full justify-start pt-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
                DataBricks
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                SQL
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                NumPy
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Pandas
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Matplotlib
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Koalas
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Scrapy
              </Button>
            </div>
          </div>
          <div className="flex flex-col h-full w-4/12 border-r border-[#4F46E5]">
            <div className="flex h-10 justify-center items-center w-full shadow-sm">
              Machine Learning
            </div>
            <div className="flex flex-col h-full justify-start pt-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
                Scikit
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Keras
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                PyTorch
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                TenserFlow
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                VertexAI
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Sagemaker
              </Button>
            </div>
          </div>
          <div className="flex flex-col h-full w-4/12">
            <div className="flex h-10 justify-center items-center w-full shadow-sm">
              Generative AI
            </div>
            <div className="flex flex-col h-full justify-start pt-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
                OpenAI
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                GPT-4
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                LangChain
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AI;
