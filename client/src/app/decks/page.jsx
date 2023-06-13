"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Deck from "@/components/Deck";
import { selectUser, selectToken } from "../redux/features/auth/authSelectors";
import Adder from "@/components/Adder";
import BreadCrumbs from "@/components/Common/BreadCrumbs";
import { useRouter } from "next/navigation";
import Loading from "@/components/Common/Loading";
import Modal from "@/components/Common/Modal";
import CreateDeck from "@/components/CreateDeck";
import { closeModal } from "../redux/features/modal/modalSlice";

export default function deckPage() {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const router = useRouter();
  // If user is not logged in, redirect to login page
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:3001/api/deck ", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setDecks(res.data);
    }
    fetchData();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (!user || loading) {
    return <Loading />;
  }
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    // {showModal && <Modal />}
    <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
      {showModal && (
        <Modal heading={"Create Deck"} setShowModal={setShowModal}>
          <CreateDeck closeModal={closeModal} />
        </Modal>
      )}
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
        <Adder setShowModal={() => setShowModal(true)} type="Deck" />
      </div>
    </div>
  );
}
