"use client";

import { usePathname, useRouter } from "next/navigation";
import Register from "./Register";
import Login from "./Login";
import { ButtonForAuth } from "./ButtonForAuth";

export default function AuthCard() {
  const pathname = usePathname();
  const router = useRouter();

  const isSignUp = pathname.includes("register");

  return (
    <div className="relative w-[900px] h-[520px] bg-white  rounded-4xl shadow-xl overflow-hidden">
      <div className="absolute inset-0 flex">
        <div
          className={`w-1/2 h-full transition-all duration-700
          ${
            isSignUp
              ? "translate-x-full opacity-0"
              : "translate-x-0 opacity-100"
          }
  `}
        >
          <div className="flex flex-col h-full w-full text-center">
            <div className="pt-10">
              <h1 className="text-blue-900 text-3xl font-bold">Sign In</h1>
              <p className="text-blue-900 text-xs font-bold py-6">
                Use your email password
              </p>
            </div>
            <div className=" flex flex-grow h-full w-full items-center justify-center ">
              <div className="w-full max-w-md ">
                <Login />
              </div>
            </div>
            <div className="flex flex-col items-center w-full mt-6">
              <button className="mb-4 text-sm text-blue-900 hover:underline">
                Forgot password
              </button>

              <ButtonForAuth className="border-blue-900 mb-8  text-blue-900 hover:bg-blue-50">
                SIGN IN
              </ButtonForAuth>
            </div>
          </div>
        </div>

        <div
          className={`w-1/2 h-full transition-all duration-700
    ${isSignUp ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
  `}
        >
          <div className="flex flex-col h-full w-full text-center">
            <div className="pt-10">
              <h1 className="text-blue-900 text-3xl font-bold">
                Create Account
              </h1>
              <p className="text-blue-900 text-xs font-bold py-6">
                Use your email to sign up
              </p>
            </div>
            <div className=" flex flex-grow h-full w-full items-center justify-center ">
              <div className="w-full max-w-md ">
                <Register />
              </div>
            </div>
            <div className="flex flex-col items-center w-full mt-6">
              <ButtonForAuth className="border-blue-900 mb-8 text-blue-900 hover:bg-blue-50">
                SIGN UP
              </ButtonForAuth>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-0 h-full w-1/2 bg-[#203959] text-white 
            flex flex-col items-center rounded-4xl shadow-2xl justify-center transition-all duration-700
          ${isSignUp ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {isSignUp ? (
          <div className=" flex flex-col h-full w-full text-center">
            <div className=" flex flex-col items-center justify-center flex-1">
              <h2 className=" justify-center text-3xl font-bold">
                Hello, Team Member!
              </h2>
              <p className="my-4">Don't have an account yet?</p>
            </div>
            <div className="flex flex-col items-center w-full mt-6">
              <ButtonForAuth
                className=" border-white mb-8 text-white hover:bg-white/10"
                onClick={() => router.push("/login")}
              >
                SIGN IN
              </ButtonForAuth>
            </div>
          </div>
        ) : (
          <div className=" flex flex-col h-full w-full text-center">
            <div className=" flex flex-col items-center justify-center flex-1">
              <h2 className=" justify-center text-3xl font-bold">
                Welcome Back!
              </h2>
              <p className="my-4">Sing in to begin today’s work</p>
            </div>
            <div className="flex flex-col items-center w-full mt-6">
              <ButtonForAuth
                className=" border-white mb-8 text-white hover:bg-white/10"
                onClick={() => router.push("/register")}
              >
                SIGN UP
              </ButtonForAuth>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
