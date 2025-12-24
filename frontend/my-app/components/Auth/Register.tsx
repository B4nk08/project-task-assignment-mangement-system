import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ButtonForAuth } from "./ButtonForAuth";

const Register = () => {
  return (
    <div className="flex flex-col gap-4 w-full justify-center px-4">
      <div className="relative grid w-full items-center gap-1.5">
        <Label
          htmlFor="full-name"
          className="absolute 
          -top-2 left-3 
          bg-white text-xs 
          text-gray-700"
        >
          Full Name
        </Label>
        <Input
          id="full-name"
          type="text"
          className=" py-4 px-2 
          placeholder:text-gray-700 
          text-gray-700 h-10 
          border-gray-300 
          focus:border-blue-500"
        />
      </div>
      <div className=" relative grid w-full items-center gap-1.5">
        <Label
          htmlFor="email"
          className=" absolute 
        -top-2 left-3 
        bg-white  
        text-xs 
        text-gray-700"
        >
          Email
        </Label>
        <Input
          id="email"
          type="email"
          className="py-4 px-2 
  
          placeholder:text-gray-700 
          text-gray-700 h-10 
          border-gray-300 
          focus:border-blue-500"
        />
      </div>
      <div className=" relative grid w-full items-center gap-1.5">
        <Label
          htmlFor="password"
          className=" absolute 
        -top-2 left-3 
        text-xs 
        bg-white 
        text-gray-700"
        >
          Password
        </Label>
        <Input
          id="password"
          type="password"
          className="py-4 px-2 
          
          placeholder:text-gray-700 
          text-gray-700 h-10 
          border-gray-300 
          focus:border-blue-500"
        />
      </div>
      <div className=" relative grid w-full items-center gap-1.5">
        <Label
          htmlFor="password-confirm"
          className=" absolute 
        -top-2 left-3 
        text-xs 
        bg-white 
        text-gray-700"
        >
          Password Confirm
        </Label>
        <Input
          id="password-confirm"
          type="password"
          className="hpy-4 px-2 
          
          placeholder:text-gray-700 
          text-gray-700 h-10 
          border-gray-300 
          focus:border-blue-500"
        />
      </div>
    </div>
  );
};
export default Register;
