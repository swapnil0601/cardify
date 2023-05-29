"use client";

import Deck from "@/components/Deck";

export default function deckPage() {
  return (
    <div className="container flex justify-center align-middle h-auto flex-wrap p-2 gap-5">
      <Deck />
      <Deck />
      <Deck />
      <Deck />
    </div>
  );
}
