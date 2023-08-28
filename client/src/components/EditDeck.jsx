"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import {
  selectToken,
  selectUser,
} from "../app/redux/features/auth/authSelectors";
import axios from "axios";

const EditDeck = ({ closeModal, deckId }) => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const userObj = user;

  const handleEditDeck = async (e) => {
    e.preventDefault();
    const deck = { user: userObj, name, description };
    console.log(deck);
    try {
      const res = await axios.patch(
        `${process.env.SERVER}/api/deck/${deckId}`,
        deck,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      closeModal();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Edit Deck
      </h1>
      <form class="space-y-2 md:space-y-4" action="#" onSubmit={handleEditDeck}>
        <div class="relative z-0 w-full group">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Deck Title
          </label>
          <input
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Science"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label
            for="description"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Deck Description
          </label>
          <textarea
            rows="4"
            type="text"
            name="description"
            id="description"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Science is the study of the natural..."
            required=""
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-gray-200 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Edit Deck
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditDeck;
