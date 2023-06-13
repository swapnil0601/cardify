import React, { useState } from "react";
import "../../styles/component.css";
import GroupButton from "./Common/groupButton";
import { useRouter } from "next/navigation";
import Loading from "./Common/Loading";

const ReviewCard = ({ cards }) => {
  const router = useRouter();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const currentCard = cards[currentCardIndex];

  const [loading, selectLoading] = useState(false);

  const [isFlipped, setIsFlipped] = useState(false);

  const { question, answer } = currentCard;
  const frontTitle = "Question " + (currentCardIndex + 1);
  const backTitle = "Solution " + (currentCardIndex + 1);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextClick = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    } else {
      setTimeout(() => {
        selectLoading(true);
      }, 1000);
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
          <div
            className="flex rounded-md shadow-sm w-auto"
            onClick={handleNextClick}
          >
            <GroupButton name="Easy" />
            <GroupButton name="Medium" />
            <GroupButton name="Hard" />
            <GroupButton name="Again" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
