"use client";
import React, { useState, useEffect, useRef, use } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../app/redux/features/auth/authSlice";
import { Sun, Moon } from "react-feather";
import WidgetDrawer from "./Widget";

const Navbar = ({ themeHandler, theme }) => {
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const user = useSelector((state) => state.auth.user);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      setIsMenuOpen(false);
    };

    // Add the event listener
    document.addEventListener("click", handleClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <div className="text-accent font-bold text-xl">Cardify</div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/decks">
                <div className="text-accent-content hover:text-base-content border-b-2 border-b-transparent hover:border-b-primary px-3 py-2 text-sm font-medium">
                  Decks
                </div>
              </Link>
              <Link href="/flashcards">
                <div className="text-accent-content hover:text-base-content border-b-2 border-b-transparent hover:border-b-primary px-3 py-2 text-sm font-medium">
                  FlashCards
                </div>
              </Link>

              {/* Check if user is logged in from redux store */}
              {!user ? (
                <>
                  <Link href="/login">
                    <div className="text-accent-content hover:text-base-content border-b-2 border-b-transparent hover:border-b-primary px-3 py-2 text-sm font-medium">
                      Login
                    </div>
                  </Link>
                </>
              ) : (
                <Link
                  href="/"
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  <div className="text-accent-content hover:text-base-content border-b-2 border-b-transparent hover:border-b-primary px-3 py-2 text-sm font-medium">
                    Logout
                  </div>
                </Link>
              )}
              <a
                onClick={() => themeHandler()}
                className="hover:cursor-pointer"
              >
                <div className="flex items-center text-accent-content hover:text-primary px-3 py-2 text-sm font-medium  relative top-1">
                  {theme === "light" ? <Sun /> : <Moon />}
                </div>
              </a>
            </div>
          </div>
          <div className="md:hidden flex justify-center items-center">
            <a
              onClick={() => themeHandler()}
              className="hover:cursor-pointer "
            >
              <div className="flex items-center text-accent-content hover:text-primary px-3 font-medium ">
                {theme === "light" ? <Sun /> : <Moon />}
              </div>
            </a>
            <button
              type="button"
              className="text-content inline-flex items-center justify-center p-2 rounded-md text-accent-content focus:outline-none scale-110"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5H20V7H4V5ZM4 10H20V12H4V10ZM4 15H20V17H4V15Z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div ref={menuRef}>
            <WidgetDrawer themeHandler={themeHandler} theme={theme} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
