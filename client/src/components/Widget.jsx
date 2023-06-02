"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../app/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";

function WidgetDrawer() {
  const dispatch = useDispatch();
  const router = useRouter();

  const isLogin = useSelector((state) => state.auth.user) || false;

  return (
    <>
      <div
        id="drawer-bottom-example"
        className="fixed bottom-0 left-0 right-0 z-40 w-full overflow-y-auto transition-transform bg-base-100 dark:bg-gray-800 transform-none border-t-2 dark:border-gray-700 md:hidden"
        tabIndex="-1"
        aria-labelledby="drawer-bottom-label"
      >
        <div className="space-y-1 sm:px-3 flex flex-col items-center ">
          {isLogin ? (
            <>
              <div
                className="cursor-pointer pt-3 border-b-2"
                onClick={() => (router.push("/decks"))}
              >
                <div className="text-accent-content px-3 py-2 rounded-md text-base font-medium">
                  Decks
                </div>
              </div>
              <div
                className="cursor-pointer pb-3"
                onClick={() => {
                  dispatch(logout());
                  router.push("/");
                }}
              >
                <div className="text-accent-content px-3 py-2 rounded-md text-base font-medium">
                  Logout
                </div>
              </div>
            </>
          ) : (
            <div
              className="cursor-pointer pb-3"
              onClick={() => (window.location.href = "/login")}
            >
              <div className="text-accent-content px-3 py-2 rounded-md text-base font-medium">
                Login
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default WidgetDrawer;
