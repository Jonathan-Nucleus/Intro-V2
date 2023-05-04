import { FC } from "react";
import Button from "../../components/Button";
import { useMediaQuery } from "react-responsive";

const Blockchain: FC = () => {
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
              Smart Contracts
            </div>
            <div className="flex flex-col h-full justify-start pt-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
                Solidity
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Truffle
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Remix
              </Button>
            </div>
          </div>
          <div className="flex flex-col h-full w-4/12 border-r border-[#4F46E5]">
            <div className="flex h-10 justify-center items-center w-full shadow-sm">
              Dev Tools
            </div>
            <div className="flex flex-col h-full justify-start pt-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
                IPFS
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Metamask
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Moralis
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Chainlink
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Kaleido
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                AWS Managed Blockchain
              </Button>
            </div>
          </div>
          <div className="flex flex-col h-full w-4/12">
            <div className="flex h-10 justify-center items-center w-full shadow-sm">
              Platform
            </div>
            <div className="flex flex-col h-full justify-start pt-10 items-center w-full px-2 gap-4">
              <Button variant={"outline-primary"} className="w-full">
                Ethereum
              </Button>
              <Button variant={"outline-primary"} className="w-full">
                Hyperledger Fabric
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blockchain;
