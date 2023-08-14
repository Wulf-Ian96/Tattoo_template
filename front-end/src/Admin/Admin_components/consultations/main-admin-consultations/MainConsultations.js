import React, { useEffect, useState } from "react";
import "./consultations.css";
import { onSnapshot, doc, deleteDoc, where } from "firebase/firestore";
import { consultationQuery, database } from "../../../../firebase";
export default function MainConsultations({ artists }) {
  const [consultData, setConsultData] = useState([]);
  const [selectedConsult, setSelectedConsult] = useState("");
  const [consultRef, setConsultRef] = useState([]);
  const [docRef, setDocRef] = useState([]);
  useEffect(() => {
    onSnapshot(consultationQuery, (snapshot) => {
      let data = [];
      snapshot.docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setConsultData(data);
      setSelectedConsult(data[0].id);
      setDocRef(doc(database, "consultations", data[0].id));
    });
  }, []);

  useEffect(() => {
    setConsultRef(consultData.find((item) => item.id === selectedConsult));
  }, [consultData]);

  function handleDelte() {
    deleteDoc(docRef, "consultations", selectedConsult);
  }
  console.log("consultRef:", consultRef);
  console.log("selected consult:", selectedConsult);

  return (
    <>
      <div className="consult-container">
        <h1 className="page-title">Open Consultations</h1>
        {artists.map(function (artist) {
          let newConsultArray = [];

          consultData.forEach((item) =>
            item.selectedArtist === artist.id ? newConsultArray.push(item) : ""
          );
          console.log(artist.name, newConsultArray);
          return (
            <>
              {newConsultArray.length !== 0 ? (
                <h1 className="consult-artist">{artist.name}</h1>
              ) : (
                ""
              )}

              {newConsultArray.map((item) => (
                <div className="consult-item-container">
                  <button
                    onClick={() => {
                      setSelectedConsult(item.id);
                      handleDelte();
                    }}
                  >
                    Delete
                  </button>
                  <h4 className="consult-title">{item.name}</h4>
                  <p>
                    <p className="consult-span">Phone Number:</p>{" "}
                    {item.phoneNumber}
                  </p>
                  <p>
                    <p className="consult-span">Email:</p> {item.email}
                  </p>
                </div>
              ))}
            </>
          );
        })}
      </div>
    </>
  );
}
