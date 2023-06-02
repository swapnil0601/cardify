"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Deck from "@/components/Deck";
import { selectUser } from "../redux/features/auth/authSelectors";
import Adder from "@/components/Adder";
import BreadCrumbs from "@/components/Common/BreadCrumbs";
import { useRouter } from "next/navigation";

const decks = [
  {
    _id: "646e64440ccaa84581a1691b",
    name: "Spanish Vocabulary",
    description: "A deck for learning Spanish vocabulary.",
    imgPath: "",
    user: "646deec2d7849da4f8b8facd",
    flashcards: [],
    isPublic: true,
    sharedWith: [],
    createdAt: "2023-05-24T19:23:48.280Z",
    __v: 0,
  },
  {
    _id: "646e66120ccaa84581a1691d",
    name: "Japanese Vocabulary",
    description: "A deck for learning Japanese vocabulary.",
    imgPath: "",
    user: "646deec2d7849da4f8b8facd",
    flashcards: [],
    isPublic: true,
    sharedWith: [],
    createdAt: "2023-05-24T19:31:30.728Z",
    __v: 0,
  },
  {
    _id: "646e686023571cc96eb3b9c7",
    name: "Japanese Vocabulary",
    description: "Learning Japanese vocabulary.",
    imgPath: "",
    user: "646deec2d7849da4f8b8facd",
    isPublic: true,
    sharedWith: [],
    createdAt: "2023-05-24T19:41:20.509Z",
    __v: 0,
  },
];

export default function deckPage() {
  const user = useSelector(selectUser);
  const router = useRouter();

  // If user is not logged in, redirect to login page

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
      <BreadCrumbs />
      <div className="mt-10 container flex justify-center align-middle h-auto flex-wrap p-2 gap-5 ">
        {decks.map((deck) => (
          <Deck
            key={deck._id}
            name={deck.name}
            description={deck.description}
            deckId={deck._id}
          />
        ))}
        <Adder type="Deck" />
      </div>
    </div>
  );
}
