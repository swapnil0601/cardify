"use client";
import { useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../app/redux/features/modal/modalSlice";
import { logout } from "../app/redux/features/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const user = useSelector((state) => state.auth.user);

  const openModalHandler = () => {
    dispatch(openModal());
  };

  return (
    <nav className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <div className="text-primary font-bold text-xl">Cardify</div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/decks">
                <div className="text-secondary hover:text-primary cursor-pointer">
                  Decks
                </div>
              </Link>
              {!user ? (
                <>
                  <Link href="/login" onClick={openModalHandler}>
                    <div className="text-secondary hover:text-primary cursor-pointer">
                      Login
                    </div>
                  </Link>
                  <Link href="/register" onClick={openModalHandler}>
                    <div className="text-secondary hover:text-primary cursor-pointer">
                      Register
                    </div>
                  </Link>
                </>
              ) : (
                <Link href="/">
                  <div
                    onClick={() => {
                      dispatch(logout());
                    }}
                  >
                    Logout
                  </div>
                </Link>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="bg-background inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-white"
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
        {/* {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1 sm:px-3 flex flex-col align-middle justify-center items-center">
              <Link href="/decks">
                <div className="text-secondary hover:text-primary cursor-pointer">
                  Decks
                </div>
              </Link>
              {!user ? (
                <>
                  <Link href="/login" onClick={openModalHandler}>
                    <div className="text-secondary hover:text-primary cursor-pointer">
                      Login
                    </div>
                  </Link>
                  <Link href="/register" onClick={openModalHandler}>
                    <div className="text-secondary hover:text-primary cursor-pointer">
                      Register
                    </div>
                  </Link>
                </>
              ) : (
                <Link href="/">
                  <div
                    onClick={() => {
                      dispatch(logout());
                    }}
                  >
                    Logout
                  </div>
                </Link>
              )}
            </div>
          </div>
        )} */}
        {isMenuOpen && (
          <div className="md:hidden transition-transform duration-300 ease-in-out">
            <div className="pt-2 pb-3 space-y-1 sm:px-3 flex flex-col align-middle justify-center items-center">
              <Link href="/decks">
                <div className="text-secondary hover:text-primary cursor-pointer">
                  Decks
                </div>
              </Link>
              {!user ? (
                <>
                  <Link href="/login" onClick={openModalHandler}>
                    <div className="text-secondary hover:text-primary cursor-pointer">
                      Login
                    </div>
                  </Link>
                  <Link href="/register" onClick={openModalHandler}>
                    <div className="text-secondary hover:text-primary cursor-pointer">
                      Register
                    </div>
                  </Link>
                </>
              ) : (
                <Link href="/">
                  <div
                    onClick={() => {
                      dispatch(logout());
                    }}
                  >
                    Logout
                  </div>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
