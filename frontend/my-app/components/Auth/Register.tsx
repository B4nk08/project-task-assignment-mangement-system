"use client";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";
import { register } from "@/services/auth.service";
import SuccessPopupRegister from "../Popup/PopupRegister";

export default function Register() {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Password และ Confirm Password ไม่ตรงกัน");
      return;
    }

    setError("");

    try {
      await register({
        fullName,
        email,
        password,
      });
      setSuccessOpen(true);
    } catch (err) {
      setError("Fullname or gmail ");
    }
  };

  return (
    <div>
      <form
        id="register-form"
        onSubmit={submit}
        className="flex flex-col gap-4 px-4"
      >
        <div className="flex flex-col gap-4 w-full justify-center px-4">
          <div className="relative grid w-full items-center gap-1.5">
            <Label className="absolute -top-2 left-3 bg-white text-xs text-gray-700">
              Full Name
            </Label>
            <Input
              value={fullName}
              onChange={(e) => setFullname(e.target.value)}
              className="h-10 border-gray-300 text-gray-700 focus:border-blue-500"
            />
          </div>

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
              onChange={(e) => setPassword(e.target.value)}
              className="h-10 border-gray-300 text-gray-700 focus:border-blue-500"
            />
          </div>

          <div className="relative grid w-full items-center gap-1.5">
            <Label className="absolute -top-2 left-3 bg-white text-xs text-gray-700">
              Password Confirm
            </Label>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="h-10 border-gray-300 text-gray-700 focus:border-blue-500"
            />
          </div>

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
        </div>
      </form>
      <SuccessPopupRegister open={successOpen}/>
    </div>
  );
}
