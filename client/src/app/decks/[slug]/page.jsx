"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/auth/authSelectors";
import { useRouter } from "next/navigation";
import { AiOutlineEdit } from "react-icons/ai";
import Loading from "@/components/Common/Loading";
import Adder from "@/components/Adder";

const page = ({ params }) => {
  const { slug } = params;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = useSelector(selectUser);

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }

    const fetchData = async () => {
      const res = await fetch(`http://localhost:3001/flashcard/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const json = await res.json();
      setData(json);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };
    fetchData();
  }, []);

  const [filteredData, setFilteredData] = useState([]);

  if (user) {
    useEffect(() => {
      console.log(data);
      setFilteredData(
        data.filter((flashcard) => {
          return flashcard.deck === slug;
        })
      );
    }, [data, slug]);

    console.log(filteredData);
  }

  if (!user || loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
      <div className="flex justify-end align-middle h-auto flex-wrap p-2 gap-5 ">
        <button
          className="btn btn-primary btn-outline btn-sm"
          onClick={() => {
            // Save the filtered data to local storage
            localStorage.setItem("studyCards", JSON.stringify(filteredData));
            router.push(`/study/${slug}`);
          }}
        >
          Start studying
        </button>
      </div>
      <div className="mt-10 container flex justify-center align-middle h-auto flex-wrap p-2 gap-5 ">
        {filteredData?.map((flashcard) => (
          <div
            key={flashcard._id}
            className="max-w-sm w-64 bg-base-300 text-base-content border border-base-200 rounded-lg shadow cursor-pointer"
          >
            <div className="card-body">
              {/* Edit button */}
              <div className="flex justify-end">
                <div className="flex justify-end">
                  <AiOutlineEdit />
                </div>
              </div>
              <h2 className="card-title">{flashcard.question}</h2>
              <p className="blur-sm">{flashcard.answer}</p>
            </div>
          </div>
        ))}
        <Adder type="flashcard" />
      </div>
    </div>
  );
};

export default page;
