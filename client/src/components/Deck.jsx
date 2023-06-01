"use client";
import React, { useState } from "react";
import scienceImg from "../public/Images/science.jpg";
import Image from "next/image";
export default function Deck() {
  return (
    <div class="max-w-sm w-64 bg-base-300 text-base-content border border-base-200 rounded-lg shadow">
      <p href="#">
        <Image class="rounded-t-lg" src={scienceImg} alt="" />
      </p>
      <div class="p-5">
        <p href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight">
            Noteworthy technology acquisitions 2021
          </h5>
        </p>

        <button
          href="#"
          class="inline-flex items-center px-3 py-2 bg-base-content text-base-100 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none "
        >
          Start
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
