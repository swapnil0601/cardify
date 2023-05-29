"use client";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import Portal from "./Portal";
import { closeModal } from "../app/redux/features/modal/modalSlice";
import LoginPage from "./Login";
const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);
  const content = useSelector((state) => state.modal.content);

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  return (
    <Portal>
      {isOpen ? (
        <>
          <div className="align-middle justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* {content === "login" ? (
                  <LoginPage />
                ) : content === "register" ? (
                  <RegisterPage />
                ) : (
                  <div>Something went wrong</div>
                )} */}
                {children}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="bg-primary text-white active:bg-primary font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={closeModalHandler}
                  >
                    Close
                  </button>
                </div>
              </div>
              {/*footer*/}
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
