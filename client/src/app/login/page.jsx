import React from "react";
import Login from "@/components/Login.jsx";

import Modal from "@/components/Modal.jsx";

const login = () => {
  return (
    <>
      <Modal>
        <Login />
      </Modal>
    </>
  );
};

export default login;
