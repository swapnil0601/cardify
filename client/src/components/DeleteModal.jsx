import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectToken } from "../app/redux/features/auth/authSelectors";

const DeleteModal = ({ closeModal, cardId }) => {
  const token = useSelector(selectToken);

  const handleDeleteFlashcard = async (e) => {
    try {
      const res = await axios.delete(
        `http://localhost:3001/api/flashcard/${cardId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
    } catch (err) {
      closeModal();
      console.log(err);
    }
  };

  return (
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Delete Flashcard
      </h1>
      <p class="text-base leading-6 text-gray-700 dark:text-gray-300">
        Are you sure you want to delete this flashcard?
      </p>
      {/* Buttons responsive to screen size */}
      <div className="flex flex-col sm:flex-row gap-2">
        <button
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-gray-200 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          onClick={closeModal}
        >
          Cancel
        </button>

        <button
          // Prevents the modal from closing when the button is clicked
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteFlashcard();
            closeModal();
          }}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
