"use client";
import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./features/auth/authSlice";
import deckReducer from "./features/deck/deckSlice";
import flashcardReducer from "./features/flashcard/flashcardSlice";
import errorReducer from "./features/errors/errorSlice";
import counterReducer from "./features/counter/counterSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  deck: deckReducer,
  flashcard: flashcardReducer,
  errors: errorReducer,
  counter: counterReducer,
});

export default rootReducer;
