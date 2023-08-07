"use client";
import React from "react";
import FeatureCard from "../featureCard";

const data = [
  {
    title: "Effective Memory Retention",
    desc: "Spaced repetition strengthens memory by reviewing material at strategic intervals, enhancing long-term recall.",
    icon: "https://img.icons8.com/ios/50/000000/brain.png",
  },
  {
    title: "Time Efficiency",
    desc: "Optimizes learning by targeting challenging concepts, saving time and making study sessions more efficient.",
    icon: "https://img.icons8.com/ios/50/000000/time.png",
  },
  {
    title: "Adaptive Learning",
    desc: "Adjusts review intervals based on individual progress, accommodating different learning speeds and knowledge levels.",
    icon: "https://img.icons8.com/ios/50/000000/adaptive.png",
  },
  {
    title: "Versatility Across Subjects",
    desc: "Suitable for facts, concepts, vocabulary, and skills, making it a valuable technique for lifelong learning in various domains.",
    icon: "https://img.icons8.com/ios/50/000000/versatility.png",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-base-100 py-16 lg:mx-10 lg:my-20 rounded my-5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
          {data.map((item, index) => (
            <FeatureCard
              key={index}
              title={item.title}
              desc={item.desc}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
