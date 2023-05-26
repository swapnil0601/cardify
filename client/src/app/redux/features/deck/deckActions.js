"use client";
import {
  fetchDecks,
  createDeck,
  updateDeckAPI,
  deleteDeckAPI,
} from "../../services/deckApi";
import {
  fetchDecksRequest,
  fetchDecksSuccess,
  fetchDecksFailure,
  addDeck,
  updateDeck,
  deleteDeck,
} from "./deckSlice";

export const fetchAllDecks = () => async (dispatch) => {
  try {
    dispatch(fetchDecksRequest());
    const response = await fetchDecks();
    dispatch(fetchDecksSuccess(response.data));
  } catch (error) {
    dispatch(fetchDecksFailure(error.message));
  }
};

export const createNewDeck = (deckData) => async (dispatch) => {
  try {
    const response = await createDeck(deckData);
    dispatch(addDeck(response.data));
  } catch (error) {
    // Handle error
  }
};

export const updateExistingDeck = (deckId, updatedData) => async (dispatch) => {
  try {
    const response = await updateDeckAPI(deckId, updatedData);
    dispatch(updateDeck(response.data));
  } catch (error) {
    // Handle error
  }
};

export const deleteExistingDeck = (deckId) => async (dispatch) => {
  try {
    await deleteDeckAPI(deckId);
    dispatch(deleteDeck(deckId));
  } catch (error) {
    // Handle error
  }
};
