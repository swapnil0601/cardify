"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectUser,
  selectToken,
} from "../../redux/features/auth/authSelectors";
import { useRouter } from "next/navigation";
import Loading from "@/components/Common/Loading";
import Adder from "@/components/Adder";
import axios from "axios";
import CreateFlashCard from "@/components/CreateFlashCard";
import EditFlashCard from "@/components/EditFlashCard";
import Modal from "@/components/Common/Modal";
import FlashCard from "@/components/flashCard";

const page = ({ params }) => {
  const { slug } = params;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const router = useRouter();

  const [editModal, setEditModal] = useState(false);

  const [cardId, setCardId] = useState(null);

  const editCloseModal = () => {
    setEditModal(false);
  };

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:3001/api/flashcard ", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setData(res.data);
    }
    fetchData();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [showModal, editModal]);
  const [filteredData, setFilteredData] = useState([]);

  if (user) {
    useEffect(() => {
      console.log(data);
      setFilteredData(
        data.filter((flashcard) => {
          return flashcard.deck === slug;
        })
      );
    }, [data, slug]);

    console.log(filteredData);
  }

  if (!user || loading) {
    return <Loading />;
  }
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
      {showModal && (
        <Modal heading={"Create Deck"} setShowModal={setShowModal}>
          <CreateFlashCard deck={slug} closeModal={closeModal} />
        </Modal>
      )}
      {editModal && (
        <Modal heading={"Edit Deck"} setShowModal={setEditModal}>
          <EditFlashCard closeModal={editCloseModal} cardId={cardId} deck={slug} />
        </Modal>
      )}
      <div className="flex justify-end align-middle h-auto flex-wrap p-2 gap-5 ">
        <button
          className="btn btn-primary btn-outline btn-sm"
          onClick={() => {
            // Save the filtered data to local storage
            localStorage.setItem("studyCards", JSON.stringify(filteredData));
            router.push(`/study/${slug}`);
          }}
        >
          Start studying
        </button>
      </div>
      <div className="mt-10 container flex justify-center align-middle h-auto flex-wrap p-2 gap-5 ">
        {filteredData?.map((flashcard) => (
          <FlashCard
            key={flashcard._id}
            flashcard={flashcard}
            cardId={flashcard._id}
            setEditModal={setEditModal}
            setCardId={setCardId}
          />
        ))}
        <Adder setShowModal={() => setShowModal(true)} type="flashcard" />
      </div>
    </div>
  );
};

export default page;

