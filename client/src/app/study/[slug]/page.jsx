"use client";
import React, { useEffect } from "react";
import FlippableCard from "../../../components/ReviewCard";
import Loading from "../../../components/Common/Loading";

const FlashCardPage = () => {

  const [loading, setLoading] = React.useState(true);
  const [studyCards, setStudyCards] = React.useState([]);


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("studyCards"));
    setStudyCards(data);
    setTimeout(() => {
      setLoading(false);
    } , 500);
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
