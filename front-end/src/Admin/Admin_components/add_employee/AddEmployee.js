import React, { useState, useRef } from "react";
import "../employees.css";
import { addDoc } from "firebase/firestore";
import { colRef } from "../../../firebase";
export default function AddEmployee() {
  const initialFormState = { name: "", phoneNumber: "", email: "", desc: "" };
  const [formState, setFormState] = useState(initialFormState);
  const formRef = useRef();
  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    setFormState((prevState) => ({ ...prevState, [name]: value }));
  }
  console.log(formState);
  console.log(formRef);
  // Code for addding new employee to database
function handleSubmit(e) {
    e.preventDefault();
    addDoc(colRef, {
      name: formState.name,
      phoneNumber: formState.phoneNumber,
      email: formState.email,
      desc: formState.desc,
    }).then(() => {
      setFormState(initialFormState);
    });
  }
  return (
    <>
      <main className="section-container">
        <form className="add-form" ref={formRef} onSubmit={handleSubmit}>
          <input
            className="employee-input"
            onChange={handleChange}
            value={formState.name}
            type="text"
            placeholder="Employee Name"
            name="name"
          />
          <input
            className="employee-input"
            value={formState.phoneNumber}
            onChange={handleChange}
            type="text"
            placeholder="Employee Phone Number"
            name="phoneNumber"
          />
          <input
            className="employee-input"
            value={formState.email}
            onChange={handleChange}
            type="text"
            placeholder="Employee Email"
            name="email"
          />
          <input
            className="employee-input"
            value={formState.desc}
            onChange={handleChange}
            type="text-box"
            placeholder="Employee Description"
            name="desc"
          />
          <input type="file" placeholder="Employee Avatar355" name="avatar" />

          <button>Submit!</button>
        </form>
      </main>
    </>
  );
 
}
