"use client";
import { setError, clearError } from "./errorSlice";

export const setErrorMessage = (message) => (dispatch) => {
  dispatch(setError(message));
};

export const clearErrorMessage = () => (dispatch) => {
  dispatch(clearError());
};
