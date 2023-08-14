import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BookNow.css";
export default function FormCompleted({ pageInfo }) {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);
  return (
    <div className="completed-container">
      <h1 className="title">{pageInfo.h1}</h1>
      <p>{pageInfo.p}</p>
      <p>{pageInfo.contact}</p>
    </div>
  );
}
