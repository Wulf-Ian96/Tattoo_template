import React, { useState } from "react";

import "./waiver.css";
import { waiverQuery } from "../../firebase";
import { addDoc } from "firebase/firestore";
import FormCompleted from "../book_now/formCompleted";
export default function Waiver() {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    phone: "",
    email: "",
    address: "",
    designDescription: "",
    placement: "",
    size: "",
    colors: "",
    modifications: "",
    allergicReaction: "",
    keloidScarring: "",
    medications: "",
    medicationsSpecify: "",
    alcoholDrugs: "",
    pregnantBreastfeeding: "",
    signature: "",
    date: "",
    parentSignature: "",
    parentDate: "",
    artistNotes: "",
  });
  const [isCompleted, setIsCompleted] = useState(false);
  const completedInfo = {
    h1: "Waiver submitted",
    p: "Thank you for submitting",
    contact: "we will be with you shortly",
  };
  async function handleSubmit(e) {
    e.preventDefault();
    await addDoc(waiverQuery, formData);
    setIsCompleted(true);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  console.log(formData);
  return (
    <main className="waiver-page-container">
      {isCompleted ? (
        <FormCompleted pageInfo={completedInfo} />
      ) : (
        <>
          <h1 className="waiver-page-title"> WAIVER AND CONSENT FORM</h1>
          <h2>Customer Information:</h2>
          <form className="waiver-form-box">
            <label for="full-name">Full Name:</label>
            <input
              type="text"
              id="full-name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            <br></br>

            <label for="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
            <br></br>

            <label for="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <br></br>

            <label for="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <br></br>

            <label for="address">Address:</label>
            <textarea
              id="address"
              name="address"
              rows="3"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
            <br></br>
          </form>

          <h2>Tattoo Design Details:</h2>
          <form className="waiver-form-box">
            <label for="design-description">Design Description:</label>
            <textarea
              id="design-description"
              name="design-description"
              rows="3"
              value={formData.designDescription}
              onChange={handleChange}
            ></textarea>
            <br></br>

            <label for="placement">Placement on Body:</label>
            <input
              type="text"
              id="placement"
              name="placement"
              value={formData.placement}
              onChange={handleChange}
            />
            <br></br>

            <label for="size">Size (in inches):</label>
            <input
              type="number"
              id="size"
              name="size"
              value={formData.size}
              onChange={handleChange}
            />
            <br></br>

            <label for="colors">Color(s) Intended:</label>
            <input
              type="text"
              id="colors"
              name="colors"
              value={formData.colors}
              onChange={handleChange}
            />
            <br></br>

            <label for="modifications">Any Modifications:</label>
            <textarea
              id="modifications"
              name="modifications"
              rows="3"
              value={formData.modifications}
              onChange={handleChange}
            ></textarea>
            <br></br>
          </form>

          <h2>Medical Information:</h2>
          <form className="waiver-form-box">
            <p>
              Please answer the following questions to the best of your ability.
              Your answers will help ensure your safety during the tattoo
              process.
            </p>
            <label classname="radio-label" for="allergic-reaction">
              Have you ever had an allergic reaction to tattoo ink or any other
              products?
            </label>
            <br></br>
            <div className="radio-container">
              <input
                type="radio"
                id="allergic-yes"
                name="allergic-reaction"
                value="yes"
                onChange={handleChange}
              />
              <label classname="radio-label" for="allergic-yes">
                Yes
              </label>
            </div>
            <div className="radio-container">
              <input
                type="radio"
                id="allergic-no"
                name="allergic-reaction"
                value="no"
                onChange={handleChange}
              />

              <label classname="radio-label" for="allergic-no">
                No
              </label>
            </div>
            <label classname="radio-label" for="keloid-scarring">
              Do you have a history of keloid scarring?
            </label>
            <br></br>
            <div className="radio-container">
              <input
                type="radio"
                id="keloid-yes"
                name="keloid-scarring"
                value="yes"
                onChange={handleChange}
              />

              <label className="radio-label" for="keloid-yes">
                Yes
              </label>
            </div>
            <div className="radio-container">
              <input
                type="radio"
                id="keloid-no"
                name="keloid-scarring"
                value="no"
              />
              <label className="radio-label" for="keloid-no">
                No
              </label>
            </div>
            <br></br>
            <label className="radio-label" for="medications">
              Are you currently taking any medications, blood thinners, or have
              any medical conditions that could affect the tattoo process?
            </label>
            <br></br>
            <div>
              <input
                type="radio"
                id="medications-yes"
                name="medications"
                value="yes"
              />
              <label className="radio-label" for="medications-yes">
                Yes
              </label>
            </div>
            <div className="radio-container">
              <input
                type="radio"
                id="medications-no"
                name="medications"
                value="no"
              />
              <label classname="radio-label" for="medications-no">
                No
              </label>
            </div>
            <br></br>
            If yes, please specify:{" "}
            <input
              type="text"
              id="medications-specify"
              name="medications-specify"
              value={formData.medicationsSpecify}
              onChange={handleChange}
            />
            <br></br>
            <label className="radio-label" for="alcohol-drugs">
              Have you consumed alcohol or drugs within the last 24 hours?
            </label>
            <br></br>
            <div className="radio-container">
              <input
                type="radio"
                id="alcohol-drugs-yes"
                name="alcohol-drugs"
                value="yes"
              />
              <label className="radio-label" for="alcohol-drugs-yes">
                Yes
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="alcohol-drugs-no"
                name="alcohol-drugs"
                value="no"
              />
              <labe className="radio-label" for="alcohol-drugs-no">
                No
              </labe>
            </div>
            <br></br>
            <label classname="radio-label" for="pregnant-breastfeeding">
              Are you pregnant or breastfeeding?
            </label>
            <br></br>
            <div className="radio-container">
              <input
                type="radio"
                id="pregnant-yes"
                name="pregnant-breastfeeding"
                value="yes"
              />
              <label classname="radio-label" for="pregnant-yes">
                Yes
              </label>
            </div>
            <div className="radio-container">
              <input
                type="radio"
                id="pregnant-no"
                name="pregnant-breastfeeding"
                value="no"
              />

              <label classname="radio-label" for="pregnant-no">
                No
              </label>
            </div>
            <br></br>
          </form>

          <h2>Release of Liability:</h2>
          <p>I, the undersigned, understand and acknowledge the following:</p>
          <ul>
            <li>
              The tattoo procedure involves a degree of pain and discomfort.
            </li>
            <li>
              There are inherent risks associated with the tattoo process,
              including but not limited to infection, allergic reactions,
              scarring, and dissatisfaction with the final result.
            </li>
            <li>
              The tattoo artist will follow proper hygiene and safety protocols
              to minimize risks, but I am ultimately responsible for the
              aftercare of the tattoo.
            </li>
            <li>
              I am providing accurate medical and personal information to the
              best of my knowledge.
            </li>
          </ul>
          <p>
            By signing below, I release the tattoo artist, studio, and all
            associated parties from any and all liability, claims, or actions
            arising out of or related to the tattoo procedure, its outcome, or
            any complications that may arise as a result.
          </p>

          <form className="waiver-form-box">
            <label for="signature">Signature:</label>
            <input
              type="text"
              id="signature"
              name="signature"
              value={formData.signature}
              onChange={handleChange}
            />
            <br></br>

            <label for="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            <br></br>
          </form>
          <button onClick={handleSubmit}>Submit</button>
          <p>Please carefully read and complete this form. If </p>
        </>
      )}
    </main>
  );
}
