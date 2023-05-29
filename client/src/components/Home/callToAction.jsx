"use client";

import React from "react";

const CallToAction = () => {
  const navbarHeight = 64;
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
          <button className="btn btn-primary">Sign Up</button>
          <button className="btn btn-outline-primary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
