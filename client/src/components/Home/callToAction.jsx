"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const CallToAction = () => {
  const router = useRouter();
  const navbarHeight = 64;

  const isLogin = useSelector((state) => state.auth.user) || false;

  return (
    <section
      className="flex items-center justify-center bg-base-100 text-base-content"
      style={{
        paddingTop: `calc(40vh - ${navbarHeight}px)`,
        paddingBottom: `calc(40vh - ${navbarHeight}px)`,
      }}
    >
      <div className="container mx-auto px-4 text-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          Welcome to our Website
        </h1>
        <p className="text-lg mb-8">
          We provide high-quality services to meet your needs. Choose the best
          option below.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {!isLogin && (
            <button
              className="btn btn-primary"
              onClick={() => router.push("/register")}
            >
              Sign Up
            </button>
          )}
          <button className="btn btn-outline-primary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
