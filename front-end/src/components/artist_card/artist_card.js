<<<<<<< Updated upstream
import React from 'react'
import img1 from "../../assets/images/landing.jpg"

=======
import React from "react";
import img1 from "../../assets/images/landing.jpg";
import Button from "../buttons/button";
import { Link } from "react-router-dom";
>>>>>>> Stashed changes
export default function Artist_card() {
  return (
<<<<<<< Updated upstream
    <div className='card-container'>
        <img className='artist_avatar' src={img1} />
        <h2 className='artist-name'>Hi, I'm Paul Menard</h2>
        <p className='artist-description'>My journey as an artist has taken me through various styles and techniques, allowing me to develop a diverse skill set that caters to a wide range of preferences. Whether you're drawn to bold and vibrant designs, intricate black and gray masterpieces, or anything in between, I am here to collaborate with you and bring your vision to life.</p>
        <button className='card-btn'>View Gallery</button>
    </div>
  )
=======
    <>
      {artistDb.map((artist) => (
        <div className="card-container">
          <img className="artist_avatar" src={artist.artistImg} />
          <h2 className="artist-name">Hi, I'm {artist.name}</h2>
          <p className="artist-description">{artist.desc}</p>
          <div className="button-container">
            <Link
              className="button-1"
              to={`/artist-gallery/${artist.artistId}`}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              View Gallery
            </Link>
            <Button name="Book Now!" />
          </div>
        </div>
      ))}{" "}
    </>
  );
>>>>>>> Stashed changes
}
