"use client";
import React, { useState } from "react";
import scienceImg from "../public/Images/science.jpg";
import Image from "next/image";
export default function Deck() {
  return (
    <div class="max-w-sm w-64 bg-base-300 text-base-content border border-base-200 rounded-lg shadow cursor-pointer">
      <p href="#">
        <Image class="rounded-t-lg" src={scienceImg} alt="" />
      </p>
      <div class="p-5">
        <p href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight">
            Noteworthy technology acquisitions 2021
          </h5>
        </p>
      </div>
    </div>
  );
}
