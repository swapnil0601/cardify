"use client";
export const selectFlashcards = (state) => state.flashcard.flashcards;
export const selectDueFlashcards = (state) => state.flashcard.dueFlashcards;
export const selectCurrentFlashcard = (state) =>
  state.flashcard.currentFlashcard;
export const selectLoading = (state) => state.flashcard.loading;
export const selectError = (state) => state.flashcard.error;
