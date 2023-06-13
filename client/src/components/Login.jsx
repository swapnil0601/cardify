"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../app/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";
const navbarHeight = 64;

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // redux store dispatch action to set user data in store
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a call to the login endpoint at http://localhost:3001/auth/login

    fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        // If the login was successful, redirect to the dashboard page
        if (data.message === "Login successful") {
          // Save the JWT token in the browser's local storage
          // localStorage.setItem("user", JSON.stringify(data.user));
          // localStorage.setItem("token", data.token);
          setMessage("");
          const user = JSON.stringify(data.user);
          const token = data.token;
          // const user = JSON.parse(localStorage.getItem("user"));
          // const token = localStorage.getItem("token");

          // Dispatch action to set user data in store
          dispatch(loginSuccess({ user, token }));

          // Redirect to home page
          router.push("/");
        } else {
          // If there were errors, display them
          setMessage(data.message);
        }
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div class="w-3/4 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign in to your account
        </h1>
        <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            onClick={handleSubmit}
          >
            Sign In
          </button>
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <a
              href="/register"
              class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
