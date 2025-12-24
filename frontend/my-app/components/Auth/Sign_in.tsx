import Link from "next/link";
import { Button } from "../ui/button";

const Sign_in = () => {
  return (
    <div className="flex flex-col gap-12 w-full max-w-xs px-4">
      <Button size="default">
        <Link
          href="/register"
          className="
        flex justify-center items-center w-full py-3 px-32
        text-white  text-xl front-semibold
        bg-transparent
        border-2 border-white
        rounded-full
        transition duration-300
        hover:bg-white
        hover:text-blue-400
        foucs: outline-none focus:ring-4 focus:ring-white/50
        "
        >
          Sign up
        </Link>
      </Button>
      <Button size="default">
        <Link
          href="/login"
          className="
        flex justify-center items-center w-full py-3 px-32
        text-white  text-xl front-semibold
        bg-transparent
        border-2 border-white
        rounded-full
        transition duration-300
        hover:bg-white
        hover:text-blue-400
        foucs: outline-none focus:ring-4 focus:ring-white/50
        "
        >
          Sign in
        </Link>
      </Button>
    </div>
  );
};
export default Sign_in;
