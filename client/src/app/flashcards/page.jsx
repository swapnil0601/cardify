"use client";

import React from "react";
import FlippableCard from "../../components/flashCard";
const FLASHCARD_DATA = [
  {
    id: 1,
    frontTitle: "Question 1",
    frontDesc: "What is the capital of France?",
    backTitle: "Solution 1",
    backDesc: "The capital of France is Paris.",
  },
  {
    id: 2,
    frontTitle: "Question 2",
    frontDesc: "Who painted the Mona Lisa?",
    backTitle: "Solution 2",
    backDesc: "The Mona Lisa was painted by Leonardo da Vinci.",
  },
  {
    id: 3,
    frontTitle: "Question 3",
    frontDesc: "What is the formula for calculating the area of a circle?",
    backTitle: "Solution 3",
    backDesc:
      "The formula for calculating the area of a circle is A = πr^2, where A represents the area and r represents the radius.",
  },
];
const FlashCardPage = () => {
  return (
    <div
      className="flex justify-center h-screen"
      style={{ alignItems: "center" }}
    >
      {FLASHCARD_DATA.map((flashcard) => (
        <FlippableCard
          key={flashcard.id}
          frontTitle={flashcard.frontTitle}
          frontDesc={flashcard.frontDesc}
          backTitle={flashcard.backTitle}
          backDesc={flashcard.backDesc}
        />
      ))}
    </div>
  );
};

export default FlashCardPage;
