"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CreateFlashCard = ({ closeModal }) => {
  const router = useRouter();

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleCreateCard = async (e) => {
    e.preventDefault();
    const card = { question, answer };

    try {
      const res = await fetch("http://localhost:3001/flashcard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(card),
      });
      const data = await res.json();
      console.log(data);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Create Flash Card
      </h1>
      <form
        class="space-y-2 md:space-y-4"
        action="#"
        onSubmit={handleCreateCard}
      >
        <div class="relative z-0 w-full group">
          <label
            for="question"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Question
          </label>
          <input
            type="text"
            question="question"
            id="question"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="What is Science?"
            required
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div>
          <label
            for="answer"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Answer
          </label>
          <textarea
            rows="4"
            type="text"
            name="answer"
            id="answer"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Science is the study of the natural..."
            required=""
            onChange={(e) => setAnswer(e.target.value)}
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
            Create Card
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateFlashCard;
