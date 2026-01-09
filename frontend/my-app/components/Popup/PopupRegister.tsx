"use client";

import { useRouter } from "next/navigation";

type Props = {
  open: boolean;
  title?: string;
  message?: string;
};

export default function SuccessPopupRegister({
  open,
  title = "สมัครสมาชิกสำเร็จ",
  message = "แตะที่หน้าจอเพื่อไปกรอกตำแหน่งงาน",
}: Props) {
  const router = useRouter();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        onClick={() => router.push("/position")}
        className="
          relative z-10
          w-[380px]
          cursor-pointer
          rounded-2xl
          bg-white
          p-6
          shadow-xl
          animate-scale-in
          hover:scale-[1.02]
          transition
        "
      >
        <div className="flex flex-col items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-xl">
            LOGO
          </div>

          <h2 className="text-xl font-semibold text-gray-800">
            {title}
          </h2>

          <p className="text-center text-sm text-gray-600">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}
