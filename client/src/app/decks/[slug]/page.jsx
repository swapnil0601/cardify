import React from "react";



const page = ({ slug }) => {

  console.log(slug);

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}

export default page;
