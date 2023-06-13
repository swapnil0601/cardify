"use client";
export const selectUser = (state) => JSON.parse(state.auth.user);
export const selectToken = (state) => state.auth.token;
export const selectLoading = (state) => state.auth.loading;
export const selectError = (state) => state.auth.error;
