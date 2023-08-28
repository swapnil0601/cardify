import React, { useState } from "react";
import "../../styles/component.css";
import { useRouter } from "next/navigation";
import Loading from "./Common/Loading";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectToken } from "../app/redux/features/auth/authSelectors";

const ReviewCard = ({ cards }) => {
  const router = useRouter();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const currentCard = cards[currentCardIndex];

  const [loading, setLoading] = useState(false);

  const [isFlipped, setIsFlipped] = useState(false);

  const { question, answer } = currentCard;
  const frontTitle = "Question " + (currentCardIndex + 1);
  const backTitle = "Solution " + (currentCardIndex + 1);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const token = useSelector(selectToken);

  const updateFlashcard = async (grade) => {
    try {
      const response = await axios.patch(
        `${process.env.SERVER}/flashcard/review/${currentCard._id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          grade,
        }
      );
      console.log(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNextClick = async (e) => {
    const grade = e.target.id;
    console.log(token);
    setLoading(true);
    await updateFlashcard(grade);
    setLoading(false);

    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    } else {
      localStorage.removeItem("studyCards");
      router.push("/decks");
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flippable-card" onClick={handleFlip}>
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        <div className="card-front">
          <div className="p-6 bg-base-200 border border-base-300 rounded-lg shadow hover:bg-base-300 hover:shadow-base-200 hover:shadow-lg">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-base-content">
              {frontTitle}
            </h5>
            <p className="font-normal text-base-content">{question}</p>
          </div>
        </div>

        <div className="card-back">
          <div className="p-6 bg-base-content border border-base-300 rounded-lg shadow hover:shadow-base-content hover:shadow-lg">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-base-100">
              {backTitle}
            </h5>
            <p className="font-normal text-base-100">{answer}</p>
          </div>
          <div className="flex justify-between mt-4">
            <button
              className="btn btn-primary btn-outline btn-sm"
              id="easy"
              onClick={handleNextClick}
            >
              Easy
            </button>
            <button
              className="btn btn-primary btn-outline btn-sm"
              id="medium"
              onClick={handleNextClick}
            >
              Good
            </button>
            <button
              className="btn btn-primary btn-outline btn-sm"
              id="good"
              onClick={handleNextClick}
            >
              Hard
            </button>
            <button
              className="btn btn-primary btn-outline btn-sm"
              id="again"
              onClick={handleNextClick}
            >
              Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
