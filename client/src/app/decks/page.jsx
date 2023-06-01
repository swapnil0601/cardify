"use client";
import React from "react";
import { useSelector } from "react-redux";
import Deck from "@/components/Deck";
import { selectDecks } from "../redux/features/deck/deckSelectors";
import { selectUser } from "../redux/features/auth/authSelectors";
export default function deckPage() {
  const decks = useSelector(selectDecks);
  const user = useSelector(selectUser);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="pt-5 text-xl text-left">Prat's Decks</h1>
      <hr className="my-5" />
      <div className="container flex justify-center align-middle h-auto flex-wrap p-2 gap-5">
        <Deck />
        <Deck />
        <Deck />
        <Deck />
        <Deck />
        <Deck />
        <Deck />
        <Deck />
        <Deck />
      </div>
    </div>
  );
}
