import React, { useState } from "react";

export default function FaqPage() {
  const [hiddenElements, setHiddenElements] = useState({});

  const toggleHiddenClass = (id) => {
    setHiddenElements((prevHiddenElements) => ({
      ...prevHiddenElements,
      [id]: !prevHiddenElements[id],
    }));
  };
  return (
    <section id="FAQs" className="faq-container">
      <h1 className="faq-title">FAQ</h1>

      <div className="modal-container">
        <div className=" faq-item">
          <p className="faq-question">Do you accept walk-ins?</p>{" "}
          <button
            className="faq-btn"
            onClick={() => toggleHiddenClass("item1")}
          >
            <i
              class="fa-sharp fa-solid fa-chevron-down fa-xl"
              style={{ color: "#24191a" }}
            ></i>
          </button>
        </div>
        <div
          id="item1"
          className={hiddenElements["item1"] ? "faq-item" : "hidden"}
        >
          <p className="faq-answer">
            {" "}
            Yes! We accept walk-ins. However, it is first come first serve. If
            we are booked for the day, we can schedule an appointment.
          </p>
        </div>
      </div>

      <div className="modal-container">
        <div className=" faq-item">
          <p className="faq-question">What is the cost?</p>{" "}
          <button
            className="faq-btn"
            onClick={() => toggleHiddenClass("item2")}
          >
            <i
              class="fa-sharp fa-solid fa-chevron-down fa-xl"
              style={{ color: "#24191a" }}
            ></i>
          </button>
        </div>
        <div
          id="item2"
          className={hiddenElements["item2"] ? "faq-item" : "hidden"}
        >
          <p className="faq-answer">
            Our minimum cost is $100 for the hour, however we cannot caculate
            the total cost until we see your idea or have a consultation.
          </p>
        </div>
      </div>

      <div className="modal-container">
        <div className=" faq-item">
          <p className="faq-question">How old do you need to be?</p>{" "}
          <button
            className="faq-btn"
            onClick={() => toggleHiddenClass("item3")}
          >
            <i
              class="fa-sharp fa-solid fa-chevron-down fa-xl"
              style={{ color: "#24191a" }}
            ></i>
          </button>
        </div>
        <div
          id="item3"
          className={hiddenElements["item3"] ? "faq-item" : "hidden"}
        >
          <p className="faq-answer">
            State law is that you must be over the age of 18 years old. We will
            not do tattoos on minors.
          </p>
        </div>
      </div>
    </section>
  );
}
