import React from "react";
import { Plus } from "react-feather";

export default function Adder({ type }) {
  return (
    <div className="cursor-pointer flex justify-center items-center w-64 border-dashed border-2 hover:bg-base-200">
      <Plus />
      Add {type}
    </div>
  );
}
