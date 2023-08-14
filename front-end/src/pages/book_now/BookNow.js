import React, { useState } from "react";
import "./BookNow.css";
import { database, consultationQuery } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import FormCompleted from "./formCompleted";

export default function BookNow({ artists }) {
  const initialState = {
    name: "",
    phoneNumber: "",
    email: "",
    imgUrl: "",
    selectedArtist: "id",
    isCompleted: false,
  };
  const [formState, setFormState] = useState(initialState);
  const [isFormCompleted, setIsFormCompleted] = useState(true);
  function handleChange(event) {
    const target = event.target;
    const name = target.name;
    setFormState((prevState) => ({ ...prevState, [name]: target.value }));
  }
  // reference to add user consultation to the artist they chose

  function handleSubmit(e) {
    e.preventDefault();
    addDoc(consultationQuery, formState);
    setIsFormCompleted(false);
  }
  const completedInfo = {
    h1: "Consultation submittted",
    p: "We will contatct you within 24-48hrs",
    contact: "Contact 402-202-0000 with any immediate questions.",
  };
  return (
    <main className="booking-container">
      {isFormCompleted ? (
        <>
          {" "}
          <div className="booking_content-container">
            <h1>Book a consultation: </h1>
            <p className="booking_content">
              Just fill out the form below with your information, pick an artist
              and if you have a picture of the design you want send it with!
            </p>
          </div>
          <form onSubmit={handleSubmit} className="form">
            <input
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              name="name"
              value={formState.name}
            />
            <input
              onChange={handleChange}
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formState.phoneNumber}
            />
            <input
              onChange={handleChange}
              type="text"
              placeholder="Email"
              name="email"
              value={formState.email}
            />
            <input
              onChange={handleChange}
              type="file"
              placeholder="Image of your tattoo / If applicable"
            />
            <select name="selectedArtist" onChange={handleChange}>
              <option disabled selected value>
                {" "}
                -- select an option --{" "}
              </option>
              {artists.map((artist) => (
                <option name="selectedArtist" value={artist.id}>
                  {artist.name}
                </option>
              ))}
            </select>
            <button className="button-1">Submit</button>
            <h3 className="important">
              !! Please allow our artist a full 24hrs to contact you before
              reaching out to the shop, they are busy people
            </h3>
          </form>{" "}
        </>
      ) : (
        <FormCompleted pageInfo={completedInfo} />
      )}
    </main>
  );
}
