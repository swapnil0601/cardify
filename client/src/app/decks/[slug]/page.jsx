'use client';
import React, { useState, useEffect } from "react";

const page = ({ params }) => {
  const { slug } = params;

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3001/flashcard/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token"),
        },
      });
      const json = await res.json();
      console.log(json);
      setData(json);
    };
    fetchData();
  }, []);

  const filteredData = data.filter((flashcard) => flashcard.deck === slug);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
      <div className="mt-10 container flex justify-center align-middle h-auto flex-wrap p-2 gap-5 ">
        {filteredData.map((flashcard) => (
          <div
            key={flashcard._id}
            className="max-w-sm w-64 bg-base-300 text-base-content border border-base-200 rounded-lg shadow cursor-pointer"
          >
            <div className="card-body">
              <h2 className="card-title">{flashcard.question}</h2>
              <p>{flashcard.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
