"use client";
import React, { useState, useEffect } from "react";
import FlippableCard from "../../../components/ReviewCard";
import Loading from "../../../components/Common/Loading";

const FlashCardPage = () => {
  const [loading, setLoading] = useState(true);
  const [studyCards, setStudyCards] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("studyCards"));
    // Sort according to ease
    data.sort((a, b) => {
      return a.ease - b.ease;
    });
    setStudyCards(data);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      className="flex justify-center h-screen"
      style={{ alignItems: "center" }}
    >
      <FlippableCard cards={studyCards} />
    </div>
  );
};

export default FlashCardPage;
