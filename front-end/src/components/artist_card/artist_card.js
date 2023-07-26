import React from "react";
import img1 from "../../assets/images/landing.jpg";
import Button from "../buttons/button";

export default function Artist_card() {
  const artistDb = [
    {
      name: "Tom Holland",
      desc: ` My journey as an artist has taken me through various styles and
  techniques, allowing me to develop a diverse skill set that caters to a
  wide range of preferences. Whether you're drawn to bold and vibrant
  designs, intricate black and gray masterpieces, or anything in between,
  I am here to collaborate with you and bring your vision to life.`,
      artistImg: img1,
      artistId: 1,
    },
    {
      name: "Drew Daniel",
      desc: ` My journey as an artist has taken me through various styles and
  techniques, allowing me to develop a diverse skill set that caters to a
  wide range of preferences. Whether you're drawn to bold and vibrant
  designs, intricate black and gray masterpieces, or anything in between,
  I am here to collaborate with you and bring your vision to life.`,
      artistImg: img1,
      artistId: 2,
    },
  ];
  return (
    <>
      {artistDb.map((artist) => (
        <div className="card-container">
          <img className="artist_avatar" src={artist.artistImg} />
          <h2 className="artist-name">Hi, I'm {artist.name}</h2>
          <p className="artist-description">{artist.desc}</p>
          <div className="button-container">
            <Button name="View Gallery" artistId={artist.artistId} />
            <Button name="Book Now!" />
          </div>
        </div>
      ))}{" "}
    </>
  );
}
