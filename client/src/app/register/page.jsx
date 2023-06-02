"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Register from "../../components/Register";
import Image from "next/image";
import RegisterImg from "../../public/Images/register.svg";
const page = () => {
  const divHeight = {
    height: `calc(100vh - 64px)`,
  };
  return (
    <div class="flex h-screen" style={divHeight}>
      <div class="w-full md:w-1/2 flex items-center justify-center">
        <Register />
      </div>
      <div class="hidden md:flex w-1/2 items-center justify-center">
        <Image src={RegisterImg} alt="" width={500} height={500} />
      </div>
    </div>
  );
};

export default page;
