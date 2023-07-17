import React from "react";

export default function FaqPage() {
  return (
    <section className="faq-container">
      <h1 className="faq-title">FAQ</h1>
      <div className="flex-container faq-item">
        <p className="faq-question">Do you accept walk-ins?</p>{" "}
        <button className="faq-btn">X</button>
      </div>
      <div className="flex-container faq-item">
        <p className="faq-question">How old do you need to be?</p>{" "}
        <button className="faq-btn">X</button>
      </div>
      <div className="flex-container faq-item">
        <p className="faq-question">What is the cost?</p>{" "}
        <button className="faq-btn">X</button>
      </div>
    </section>
  );
}
