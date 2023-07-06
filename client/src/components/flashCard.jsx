import React, { useState } from "react";
import {
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";

export default function FlashCard({
  flashcard,
  cardId,
  setEditModal,
  setDeleteModal,
  setCardId,
}) {
  const [blur, setBlur] = useState(true);

  return (
    <div className="max-w-sm w-64 bg-base-300 text-base-content border border-base-200 rounded-lg shadow cursor-pointer">
      <div className="card-body">
        {/* Edit button */}
        <div className="flex justify-end">
          <div
            className="mx-2 cursor-pointer scale-110 hover:scale-125"
            onClick={(e) => {
              e.stopPropagation();
              setEditModal(true);
              setCardId(cardId);
            }}
          >
            <AiOutlineEdit />
          </div>
          <div
            className="cursor-pointer scale-110 hover:scale-125"
            onClick={(e) => {
              e.stopPropagation();
              setDeleteModal(true);
              setCardId(cardId);
            }}
          >
            <AiOutlineDelete />
          </div>
        </div>
        <h2 className="card-title">{flashcard.question}</h2>
        <p
          className={blur ? "blur-sm cursor-pointer" : "cursor-pointer"}
          onClick={() => setBlur(!blur)}
        >
          {flashcard.answer}
        </p>
      </div>
    </div>
  );
}
