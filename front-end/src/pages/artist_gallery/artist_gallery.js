import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./artist_gallery.css";
import { useParams } from "react-router-dom";
import img1 from "../../assets/images/landing.jpg";
import { database } from "../../firebase";
import { getDoc, doc } from "firebase/firestore";
export default function Artist_gallery() {
  const [currArtist, setCurrentArtist] = useState({});
  // here we grab the route parama with the id
  const Artistid = useParams();
  // make a reference to the document in the database ie) the artist with the id
  const artistRef = doc(database, "artists", Artistid.id);
  // grab the data from the db and set it to state varaiable
  getDoc(artistRef).then((doc) => {
    setCurrentArtist(doc.data(), doc.id);
  });

  return (
    <>
      <main className="gallery-main">
        <div className="btn-container">
          <Link className="btn" to="/">
            {" "}
            <i
              class="fa-sharp fa-solid fa-chevron-left fa-lg"
              style={{ color: "#d0926b" }}
            ></i>
            <p>back</p>
          </Link>
        </div>

        <section className="gallery-container">
          <h1 className="gallery-title">{currArtist.name}</h1>
          <div className="img-grid">
            <img src="https://source.unsplash.com/random/300×300" />
            <img src="https://source.unsplash.com/random/300×300" />
            <img src="https://source.unsplash.com/random/300×300" />
            <img src="https://source.unsplash.com/random/300×300" />
            <img src="https://source.unsplash.com/random/300×300" />
            <img src="https://source.unsplash.com/random/300×300" />
            <img src="https://source.unsplash.com/random/300×300" />
          </div>
        </section>
      </main>
    </>
  );
}
