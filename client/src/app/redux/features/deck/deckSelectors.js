"use client";
export const selectDecks = (state) => state.deck.decks;
export const selectLoading = (state) => state.deck.loading;
export const selectError = (state) => state.deck.error;
