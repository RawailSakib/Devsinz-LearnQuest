"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/config";

const MainPage = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/Login");
  };

  return (
    <div className="relative h-screen w-screen flex flex-col">
      <img
        src="/2148179091.jpg"
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />

      <div className="flex-grow text-gray-900 flex flex-col justify-center items-center text-5xl font-bold relative z-10">
        <div>Learn Quest</div>
        <div className="text-sm mt-2">Take your skills to nextlevel!</div>
      </div>

      <div className="flex justify-center pb-6 relative z-10">
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-1/2 max-w-sm"
          onClick={handleLoginClick}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default MainPage;
