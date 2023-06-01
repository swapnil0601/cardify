"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../app/redux/features/auth/authSlice";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // redux store dispatch action to set user data in store
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a call to the login endpoint at http://localhost:3001/auth/login

    fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        // If the login was successful, redirect to the dashboard page
        if (data.message === "Login successful") {
          // Save the JWT token in the browser's local storage
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          setMessage("");

          const user = JSON.parse(localStorage.getItem("user"));
          const token = localStorage.getItem("token");

          // Dispatch action to set user data in store
          dispatch(loginSuccess({ user, token }));

          // Redirect to home page
          // window.location.href = "/";
        } else {
          // If there were errors, display them
          setMessage(data.message);
        }
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="text-accent text-2xl font-bold mb-4">Login</div>
      <form className="w-64" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="text-lg">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
      {/* If login fails, display an error message */}

      {message && <p className="text-red-500 mt-4">{message}</p>}

      <div className="flex flex-col items-center justify-center">
        <div className="mt-4 text-xs md:text-base w-full text-center">
          <div className="flex flex-col items-center sm:flex-row sm:justify-center">
            <span className="whitespace-nowrap">Don't have an account ?
            </span>
            <a href="/register" className="text-blue-500 hover:text-blue-700">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
