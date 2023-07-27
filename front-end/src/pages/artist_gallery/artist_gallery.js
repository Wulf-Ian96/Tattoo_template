import React from "react";
import { Link } from "react-router-dom";
import "./artist_gallery.css";
import Footer from "../../components/footer/footer";
import img1 from "../../assets/images/landing.jpg";
import getWindowDimensions from "../../util_functions/windowTrack";
export default function Artist_gallery() {
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
  const { height } = getWindowDimensions();

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
        {artistDb.map((artist) => (
          <section className="gallery-container">
            <h1 className="gallery-title">{artist.name}</h1>
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
        ))}
      </main>
      <Footer />
    </>
  );
}
