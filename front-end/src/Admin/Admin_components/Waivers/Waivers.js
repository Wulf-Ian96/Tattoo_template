import React, { useState, useEffect } from "react";
import "./waivers.css";
import { onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { waiverQuery, database } from "../../../firebase";
export default function Waivers() {
  const [didDelete, setDidDelete] = useState(false);
  const [waiversData, setWaiversData] = useState([]);
  console.log(waiversData);
  useEffect(() => {
    onSnapshot(waiverQuery, (snapshot) => {
      let data = [];
      snapshot.docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setWaiversData(data);
    });
  }, [waiverQuery]);

  // delete waiver item

  return (
    <main className="waivers_page-container">
      {waiversData.map((waiver) => (
        <div className="waiver-item-contianer">
          <h1>{waiver.fullName}</h1>
          <button>Delete</button>

          <p>Dob: {waiver.dob}</p>
          <p>Phone:{waiver.phone}</p>
          <p>email:{waiver.email}</p>
          <p>address:{waiver.address}</p>
          <p>Design:{waiver.designDescription}</p>
          <p>Placement:{waiver.placement}</p>
          <p>size:{waiver.size}</p>
          <p>colors:{waiver.colors}</p>
          <p>modifications:{waiver.modifications}</p>
          <p>client signature:{waiver.signature}</p>
          <p>signature date:{waiver.date}</p>
        </div>
      ))}
    </main>
  );
}
