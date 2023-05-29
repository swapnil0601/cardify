"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
} from "../redux/features/counter/counterSlice";

const CounterPage = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Counter Page</h1>
      <p className="text-xl mb-4">Count: {count}</p>
      <div className="space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
