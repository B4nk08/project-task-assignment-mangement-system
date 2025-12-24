import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";

const Login = () => {
  return (
    <div className="flex flex-col gap-4 w-full justify-center px-4">
      <div className="relative grid w-full items-center gap-1.5">
        <Label
          htmlFor="email"
          className="absolute -top-2 left-3 bg-white text-xs text-gray-700"
        >
          Email
        </Label>
        <Input
          id="email"
          type="email"
          className="h-10 border-gray-300 text-gray-700 focus:border-blue-500"
        />
      </div>

      <div className="relative grid w-full items-center gap-1.5">
        <Label
          htmlFor="password"
          className="absolute -top-2 left-3 bg-white text-xs text-gray-700"
        >
          Password
        </Label>
        <Input
          id="password"
          type="password"
          className="h-10 border-gray-300 text-gray-700 focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default Login;
