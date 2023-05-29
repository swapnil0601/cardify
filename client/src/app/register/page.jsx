"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Register from "../../components/Register";
import Modal from "@/components/Modal";

const page = () => {
  return (
    <>
      <Modal>
        <Register />
      </Modal>
    </>
  );
};

export default page;
