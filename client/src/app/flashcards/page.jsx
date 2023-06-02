"use client";
import Adder from "@/components/Adder";
import BreadCrumbs from "@/components/Common/BreadCrumbs";
import FlashCard from "@/components/FlashCard";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/features/auth/authSelectors";
import { useRouter } from "next/navigation";

export default function FlashCardPage() {

  const user = useSelector(selectUser);
  const router = useRouter();

  // If user is not logged in, redirect to login page
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
      <BreadCrumbs />
      <div className="mt-10 container flex justify-center align-middle h-auto flex-wrap p-2 gap-5">
        <FlashCard />
        <FlashCard />
        <FlashCard />
        <FlashCard />
        <FlashCard />
        <Adder type="FlashCard" />
      </div>
    </div>
  );
}
