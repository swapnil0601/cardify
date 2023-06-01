"use client";
import {
  toggleTheme,
} from "./authSlice";

export const toggleThemeThunk = () => async (dispatch, getState) => {
  const state = getState();
  const theme = selectTheme(state);
  dispatch(toggleTheme());
}