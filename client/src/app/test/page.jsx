"use client";
import Modal from "@/components/Common/Modal";
import Portal from "@/components/Common/Portal";
import { useEffect, useState } from "react";

const modalTester = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {showModal && <Modal setShowModal={setShowModal} />}
      <h1>Modal Tester</h1>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
    </div>
  );
};

export default modalTester;
