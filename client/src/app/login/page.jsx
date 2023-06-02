import React from "react";
import Login from "@/components/Login.jsx";
import Image from "next/image";
import loginImg from "../../public/Images/login.svg";
const login = () => {
  const divHeight = {
    height: `calc(100vh - 64px)`,
  };
  return (
    <div class="flex h-screen" style={divHeight}>
      <div class="hidden md:flex w-1/2 items-center justify-center">
        <Image src={loginImg} alt="" width={500} height={500} />
      </div>
      <div class="w-full md:w-1/2 flex items-center justify-center">
        <Login />
      </div>
    </div>
  );
};

export default login;
