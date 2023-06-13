import React from "react";
import { Plus } from "react-feather";

export default function Adder({ setShowModal, type }) {
  return (
    <div
      onClick={setShowModal}
      className="cursor-pointer flex justify-center items-center w-64 
                    border-dashed border-2 hover:bg-base-200 rounded-lg p-4"
    >
      <Plus />
      Add {type}
    </div>
  );
}
