"use client";
import React from "react";
import Portal from "./Portal";

export default function Modal({ setShowModal, children, heading }) {
  const stopPropagation = (event) => {
    event.stopPropagation();
  };
  return (
    <Portal>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div
              onClick={() => {
                setShowModal(false);
              }}
              className="absolute inset-0 bg-gray-500 opacity-75"
            ></div>
          </div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div
            onClick={stopPropagation}
            className="w-1/3 inline-block align-bottom bg-gray-800 border-gray-700 rounded-lg text-center overflow-hidden shadow-xl transform transition-all sm:align-middle"
          >
            <div className="sm:block">
              <div className="text-center sm:text-left">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
}
