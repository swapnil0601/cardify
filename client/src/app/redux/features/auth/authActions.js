"use client";
import { registerUser, loginUser } from "../../services/authApi";
import {
  registerRequest,
  registerSuccess,
  registerFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  setToken,
} from "./authSlice";

export const register = (userData) => async (dispatch) => {
  try {
    dispatch(registerRequest());
    const response = await registerUser(userData);
    const { user, token } = response.data;
    dispatch(registerSuccess({ user, token }));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const response = await loginUser(credentials);
    const { user, token } = response.data;
    dispatch(loginSuccess({ user, token }));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch(logout());
};

export const setAuthToken = (token) => (dispatch) => {
  dispatch(setToken(token));
};
