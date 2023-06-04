"use client";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  const portalRoot = document.getElementById("portal");

  return ReactDOM.createPortal(children, portalRoot);
};

export default Portal;
