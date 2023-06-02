import React from "react";

export default function GroupButton({ name }) {
  var color = "primary";
  if (name === "Easy") {
    color = "bg-green-400 hover:bg-green-500 text-white";
  } else if (name === "Medium") {
    color = "bg-orange-400 hover:bg-oragne-500 text-white";
  } else if (name === "Hard") {
    color = "bg-red-400 hover:bg-red-500 text-white";
  } else if (name === "Again") {
    color = "bg-blue-400 hover:bg-blue-500 text-white";
  }
  return (
    <a
      href="#"
      class={`flex-1 px-4 py-2 text-md font-bold ${color} focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700`}
    >
      {name}
    </a>
  );
}
