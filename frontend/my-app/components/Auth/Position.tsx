import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { PositionSeclect } from "./PositionSelect";

const Posttion = () => {
  return (
    <div className="flex flex-col gap-4 w-full justify-center px-4">
      <div className="relative grid w-full items-center gap-2.5 py-2">
        <PositionSeclect />
      </div>

      <div className=" relative grid w-full items-center gap-1.5">
        <Label
          htmlFor="skill"
          className=" absolute 
        -top-2 left-3 
        bg-white  
        text-xs 
        text-gray-700"
        >
          Skill and Competencies
        </Label>
        <Input
          id="skill"
          type="text"
          className="py-4 px-2 
  
          placeholder:text-gray-700 
          text-gray-700 h-10 
          border-gray-300 
          focus:border-blue-500"
        />
      </div>
      <div className=" relative grid w-full items-center gap-1.5">
        <Label
          htmlFor="job-description"
          className=" absolute 
        -top-2 left-3 
        text-xs 
        bg-white 
        text-gray-700"
        >
          Job Description
        </Label>
        <Input
          id="job-description"
          type="text"
          className="py-4 px-2 
          
          placeholder:text-gray-700 
          text-gray-700 h-10 
          border-gray-300 
          focus:border-blue-500"
        />
      </div>
    </div>
  );
};
export default Posttion;
