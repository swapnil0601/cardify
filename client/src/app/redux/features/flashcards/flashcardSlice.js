"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flashcards: [],
  dueFlashcards: [],
  currentFlashcard: null,
  loading: false,
  error: null,
};

const flashcardSlice = createSlice({
  name: "flashcard",
  initialState,
  reducers: {
    fetchFlashcardsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchFlashcardsSuccess: (state, action) => {
      state.flashcards = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchFlashcardsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    scheduleNextFlashcard: (state) => {
      const dueFlashcard = state.dueFlashcards.shift();
      state.currentFlashcard = dueFlashcard || null;
    },
    answerFlashcard: (state, action) => {
      const { flashcardId, grade } = action.payload;
      const flashcard = state.flashcards.find(
        (card) => card._id === flashcardId
      );
      // Update flashcard with the Anki algorithm logic
      // Calculate new interval, ease factor, and due date based on the grade
      // Update the flashcard in the state with the new values
    },
  },
});

export const {
  fetchFlashcardsRequest,
  fetchFlashcardsSuccess,
  fetchFlashcardsFailure,
  scheduleNextFlashcard,
  answerFlashcard,
} = flashcardSlice.actions;

export default flashcardSlice.reducer;
