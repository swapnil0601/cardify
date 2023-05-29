"use client";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef } from "react";
import Portal from "./Portal";
import { closeModal } from "../app/redux/features/modal/modalSlice";

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);
  const content = useSelector((state) => state.modal.content);
  const modalRef = useRef(null);

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <Portal>
      {isOpen ? (
        <>
          <div className="align-middle justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div
              className="relative w-auto my-6 mx-auto max-w-3xl"
              ref={modalRef}
            >
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {children}
                <div className="flex items-center justify-end py-3 px-2 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="bg-primary text-white active:bg-primary font-bold uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={closeModalHandler}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="opacity-25 fixed inset-0 z-40 bg-black"
            onClick={closeModalHandler}
          ></div>
        </>
      ) : null}
    </Portal>
  );
};

export default Modal;
