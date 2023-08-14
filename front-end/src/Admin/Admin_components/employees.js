import React, { useEffect, useState } from "react";
import "./employees.css";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { database } from "../../firebase";
export default function Employees({
  artists,
  setSelectedArtist,
  selectedArtist,
}) {
  console.log(selectedArtist);
  const [didDelete, setDidDelete] = useState(false);
  let artist = selectedArtist;

  //funciton for deleting document from database
  const docRef = doc(database, "artists", artist.id);
  //We set a docRef to the database / the collection / id of the document
  // then in an async function delete the document, once that is completed we set the selected artist to the first artist in the artists array after doc is deleted.
  async function deleteArtist() {
    await deleteDoc(docRef);
    setTimeout(() => {
      setDidDelete((prevState) => !prevState);
    });
    setFormState(artists[0]);
  }
  // useEffect(() => {
  //   setSelectedArtist(artists[0]);
  // }, []);

  // Code for editing the artist information
  let initialFormState = {
    name: selectedArtist.name,
    phoneNumber: selectedArtist.phoneNumber,
    email: selectedArtist.email,
    desc: selectedArtist.desc,
  };
  const [isEditable, setIsEditable] = useState(true);
  const [formState, setFormState] = useState(initialFormState);

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    setFormState((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleEdit(event) {
    event.preventDefault();
    const docRef = doc(database, "artists", artist.id);
    // we use the updateDoc method with the docReference and the current form state to edit the document
    updateDoc(docRef, formState).then(() => {
      setIsEditable(!isEditable);
    });
  }
  // use effect for refreshing artist when the user deletes the artist selected
  useEffect(() => {
    setFormState({
      name: selectedArtist.name,
      phoneNumber: selectedArtist.phoneNumber,
      email: selectedArtist.email,
      desc: selectedArtist.desc,
    });
  }, [selectedArtist]);
  console.log(formState);

  return (
    <>
      <section className="section-container">
        <div className="employee-info">
          <form className="employee-form-container">
            <label for="name" className="label">
              Employee Name:
            </label>
            <input
              className="employee-input"
              onChange={handleChange}
              value={formState.name}
              type="text"
              placeholder="Employee Name"
              name="name"
              disabled={isEditable}
            />
            <label for="phoneNumber" className="label">
              Phone Number:
            </label>
            <input
              className="employee-input"
              value={formState.phoneNumber}
              onChange={handleChange}
              type="text"
              placeholder="Employee Phone Number"
              name="phoneNumber"
              disabled={isEditable}
            />
            <label for="email" className="label">
              Employee Email:
            </label>
            <input
              className="employee-input"
              value={formState.email}
              onChange={handleChange}
              type="text"
              placeholder="Employee Email"
              name="email"
              disabled={isEditable}
            />
            <label for="desc" className="label">
              Portfolio Description:
            </label>
            <textarea
              className="employee-input textarea"
              value={formState.desc}
              onChange={handleChange}
              type="textarea"
              placeholder="Employee Description"
              name="desc"
              disabled={isEditable}
            />
            {!isEditable ? (
              <>
                <input
                  classname="employee-input"
                  type="file"
                  placeholder="Employee Avatar355"
                  name="avatar"
                />
                <button onClick={handleEdit}>Save!</button>
              </>
            ) : (
              ""
            )}
          </form>

          <div className="admin_btn-container">
            {isEditable ? (
              <>
                <button
                  onClick={() => {
                    setIsEditable(!isEditable);
                  }}
                  className=" admin-btn"
                >
                  Edit
                </button>
                <button
                  type="submit"
                  onClick={deleteArtist}
                  className=" admin-btn"
                >
                  Delete
                </button>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        <h4 className="img-title">Images in portfolio:</h4>
        <div className="img-list"></div>
      </section>
    </>
  );
}
