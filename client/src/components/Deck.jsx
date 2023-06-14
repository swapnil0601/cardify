"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { AiOutlineEdit } from "react-icons/ai";

export default function Deck({ name, description, deckId, setEditModal, setDeckId }) {

  const router = useRouter();

  return (
    <div className="max-w-sm w-64 bg-base-300 text-base-content border border-base-200 rounded-lg shadow cursor-pointer">
      <div
        className="card-body"
        onClick={() => {
          router.push(`/decks/${deckId}`);
        }}
      >
        <div
          className="flex justify-end"
          onClick={(e) => {
            e.stopPropagation();
            setEditModal(true);
            setDeckId(deckId);
          }}
        >
          <div className="flex justify-end">
            <AiOutlineEdit />
          </div>
        </div>
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

