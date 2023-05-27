"use client";
import React, { useState } from "react";
import scienceImg from "../assets/images/science.jpg";
import Image from "next/image";
export default function Deck() {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <Image src={scienceImg} alt="science" height={300} />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
