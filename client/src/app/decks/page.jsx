"use client";
import React from "react";
import { useSelector } from "react-redux";
import Deck from "@/components/Deck";
import { selectDecks } from "../redux/features/deck/deckSelectors";
import { selectUser } from "../redux/features/auth/authSelectors";
import Adder from "@/components/Adder";
import BreadCrumbs from "@/components/Common/BreadCrumbs";
export default function deckPage() {
  const decks = useSelector(selectDecks);
  const user = useSelector(selectUser);
  return (
    <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
      <BreadCrumbs />
      <div className="mt-10 container flex justify-center align-middle h-auto flex-wrap p-2 gap-5">
        <Deck />
        <Deck />
        <Deck />
        <Deck />
        <Deck />
        <Adder type="Deck" />
      </div>
    </div>
  );
}
