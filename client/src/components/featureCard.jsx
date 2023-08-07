"use client";
import React from "react";

const FeatureCard = ({ title, desc, icon }) => {
  return (
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary-100 text-primary-500">
        <img src={icon} alt="icon" />
      </div>
      <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{desc}</p>
    </div>
  );
};

export default FeatureCard;
