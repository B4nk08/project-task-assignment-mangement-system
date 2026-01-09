import { Button } from "../ui/button";
import Posttion from "./Position";

const PositionsCard = () => {
  return (

    <div className="flex items-center justify-center min-h-screen p-4">

      <div className="relative w-[900px] h-[520px] bg-[#203959] rounded-[40px] shadow-2xl overflow-hidden">
 
        <div className="absolute right-0 top-0 h-full w-2/3 bg-white rounded-l-[50px] flex flex-col items-center justify-center px-12 py-8 shadow-[-10px_0_30px_rgba(0,0,0,0.1)]">

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#1a2b4b]">Job Position</h1>
          </div>
          <div className=" flex flex-grow h-full w-full items-center justify-center ">
            <div className="w-full max-w-md ">
              <Posttion />
            </div>
          </div>
          <div className="flex flex-col items-center w-full mt-6 ">
            <Button
              variant={"outline"}
              className="bg-[#203595] text-white w-40 h-11 px-0 py-0 text-sm font-medium rounded-md leading-none transition-all duration-200"
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PositionsCard;
