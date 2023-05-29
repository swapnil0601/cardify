"use client";
import React from "react";
import Link from "next/link";

function WidgetDrawer() {
  return (
    <>
      <div
        id="drawer-bottom-example"
        className="fixed bottom-0 left-0 right-0 z-40 w-full p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 transform-none border-t-2 dark:border-gray-700 "
        tabIndex="-1"
        aria-labelledby="drawer-bottom-label"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          <Link href="/decks">
            <div className="text-accent-content px-3 py-2 rounded-md text-base font-medium">
              Decks
            </div>
          </Link>
          <Link href="/login">
            <div className="text-accent-content px-3 py-2 rounded-md text-base font-medium">
              Login
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default WidgetDrawer;
