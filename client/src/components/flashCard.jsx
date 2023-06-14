import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";

export default function FlashCard({ flashcard, cardId, setEditModal, setCardId }) {
  
  const [blur, setBlur] = useState(true);

  return (
    <div
      className="max-w-sm w-64 bg-base-300 text-base-content border border-base-200 rounded-lg shadow cursor-pointer"
    >
      <div className="card-body">
        {/* Edit button */}
        <div
          className="flex justify-end"
          onClick={(e) => {
            e.stopPropagation();
            setEditModal(true);
            setCardId(cardId);
          }}
        >
          <div className="flex justify-end">
            <AiOutlineEdit />
          </div>
        </div>
        <h2 className="card-title">{flashcard.question}</h2>
        <p
          className = {blur ? "blur-sm cursor-pointer" : "cursor-pointer"}
          onClick = {() => setBlur(!blur)}
        >
          {flashcard.answer}
        </p>
      </div>
    </div>
  );
}
