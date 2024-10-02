import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import Button from "./Button";

export default function Modal({ active, setActive, children }) {
  const [isVisible, setIsVisible] = useState(false);

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => {
      setActive(false);
    }, 300);
  };

  useEffect(() => {
    if (active) {
      setIsVisible(true);
    }
  }, [active]);

  if (!active) return null;

  return ReactDOM.createPortal(
    <div
      role="dialog"
      aria-modal="true"
      data-visible={isVisible ? "true" : "false"}
      onClick={closeModal}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 50,
        display: "flex",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2.5rem",
          paddingTop: "3rem",
          borderRadius: "8px",
          border: "2px solid #000",
          backgroundColor: "#fff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
          opacity: isVisible ? 1 : 0,
          visibility: isVisible ? "visible" : "hidden",
        }}
      >
        <button onClick={closeModal} style={{ position: "absolute", right: "12px", top: "12px", background: "none", border: "none", cursor: "pointer", fontSize: "24px" }}>
          ✖
        </button>
        {children}
        <Button onClick={closeModal}>Close</Button>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
