"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  decks: [],
  loading: false,
  error: null,
};

const deckSlice = createSlice({
  name: "deck",
  initialState,
  reducers: {
    fetchDecksRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDecksSuccess: (state, action) => {
      state.decks = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchDecksFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addDeck: (state, action) => {
      state.decks.push(action.payload);
    },
    updateDeck: (state, action) => {
      const updatedDeck = action.payload;
      const index = state.decks.findIndex(
        (deck) => deck._id === updatedDeck._id
      );
      if (index !== -1) {
        state.decks[index] = updatedDeck;
      }
    },
    deleteDeck: (state, action) => {
      const deckId = action.payload;
      state.decks = state.decks.filter((deck) => deck._id !== deckId);
    },
  },
});

export const {
  fetchDecksRequest,
  fetchDecksSuccess,
  fetchDecksFailure,
  addDeck,
  updateDeck,
  deleteDeck,
} = deckSlice.actions;

export default deckSlice.reducer;
