"use client";
import {
  fetchFlashcards,
  updateFlashcard,
  fetchDueFlashcards,
} from "../../services/flashcardApi";
import {
  fetchFlashcardsRequest,
  fetchFlashcardsSuccess,
  fetchFlashcardsFailure,
  scheduleNextFlashcard,
  answerFlashcard,
} from "./flashcardSlice";

export const fetchAllFlashcards = () => async (dispatch) => {
  try {
    dispatch(fetchFlashcardsRequest());
    const response = await fetchFlashcards();
    dispatch(fetchFlashcardsSuccess(response.data));
  } catch (error) {
    dispatch(fetchFlashcardsFailure(error.message));
  }
};

export const scheduleNextDueFlashcard = () => async (dispatch) => {
  try {
    const response = await fetchDueFlashcards();
    dispatch(scheduleNextFlashcard(response.data));
  } catch (error) {
    // Handle error
  }
};

export const submitFlashcardAnswer =
  (flashcardId, grade) => async (dispatch) => {
    try {
      await updateFlashcard(flashcardId, { grade });
      dispatch(answerFlashcard({ flashcardId, grade }));
    } catch (error) {
      // Handle error
    }
  };
