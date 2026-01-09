"use client";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/services/auth.service";
import PopupLogin from "../Popup/PopupLogin";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, serPassword] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ email, password });
      setSuccessOpen(true);
    } catch (err) {
      setError("Not user");
    }
  };
  return (
    <div>
      <form
        id="login-form"
        onSubmit={submit}
        className="flex flex-col gap-4 px-4"
      >
        <div className="flex flex-col gap-4 w-full justify-center px-4">
          <div className="relative grid w-full items-center gap-1.5">
            <Label className="absolute -top-2 left-3 bg-white text-xs text-gray-700">
              Email
            </Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-10 border-gray-300 text-gray-700 focus:border-blue-500"
            />
          </div>

          <div className="relative grid w-full items-center gap-1.5">
            <Label className="absolute -top-2 left-3 bg-white text-xs text-gray-700">
              Password
            </Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => serPassword(e.target.value)}
              className="h-10 border-gray-300 text-gray-700 focus:border-blue-500"
            />
          </div>
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
        </div>
      </form>
      <PopupLogin open = {successOpen}/>
    </div>
  );
}
