"use client";
import React from "react";
import FeatureCard from "../featureCard";

const FeaturesSection = () => {
  return (
    <section className="bg-gray-100 py-16 lg:mx-10 lg:my-20 rounded my-5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
