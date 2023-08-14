import React from "react";
import img1 from "../../assets/images/landing.jpg";
import Button from "../buttons/button";

import { Link } from "react-router-dom";

export default function Artist_card({ artists }) {
  console.log(artists.artists);
  const artistDb = artists.artists;
  return (
    <>
      {artistDb.map((artist) => (
        <div className="card-container" key={artist.id}>
          <img className="artist_avatar" src={img1} alt="headshot" />
          <h2 className="artist-name">Hi, I'm {artist.name}</h2>
          <p className="artist-description">{artist.desc}</p>
          <div className="button-container">
            <Link
              className="button-1"
              to={`/artist-gallery/${artist.id}`}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              View Gallery
            </Link>
            <Link
              className="button-1"
              to={`/BookNow`}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Book Now!
            </Link>
          </div>
        </div>
      ))}{" "}
    </>
  );
}
