import React, { useState } from "react";
import "../../styles/component.css";
import GroupButton from "../components/Common/groupButton";
const FlippableCard = ({ frontTitle, frontDesc, backTitle, backDesc }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flippable-card" onClick={handleFlip}>
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        <div className="card-front">
          <div className="p-6 bg-base-200 border border-base-300 rounded-lg shadow hover:bg-base-300 hover:shadow-base-200 hover:shadow-lg">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-base-content">
              {frontTitle}
            </h5>
            <p className="font-normal text-base-content">{frontDesc}</p>
          </div>
        </div>

        <div className="card-back">
          <div className="p-6 bg-base-content border border-base-300 rounded-lg shadow hover:shadow-base-content hover:shadow-lg">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-base-100">
              {backTitle}
            </h5>
            <p className="font-normal text-base-100">{backDesc}</p>
          </div>
          <div class="flex rounded-md shadow-sm w-auto">
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

export default FlippableCard;
