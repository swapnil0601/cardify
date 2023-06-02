"use client";
import React, { useEffect, useState} from "react";
import { useSelector } from "react-redux";
import Deck from "@/components/Deck";
import { selectUser } from "../redux/features/auth/authSelectors";
import Adder from "@/components/Adder";
import BreadCrumbs from "@/components/Common/BreadCrumbs";
import { useRouter } from "next/navigation";
import Loading from "@/components/Common/Loading";

export default function deckPage() {
  const user = useSelector(selectUser);
  const router = useRouter();

  // If user is not logged in, redirect to login page
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3001/deck/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const json = await res.json();
      setDecks(json);
    };
    fetchData();
  }, []);

  if (!user) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
      <BreadCrumbs />
      <div className="mt-10 container flex justify-center align-middle h-auto flex-wrap p-2 gap-5 ">
        {decks?.map((deck) => (
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
