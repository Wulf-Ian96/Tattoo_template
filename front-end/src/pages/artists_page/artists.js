import React from "react";
import Artist_card from "../../components/artist_card/artist_card";

const Artists = (artists) => {
  console.log(artists);
  return (
    <section id="ArtistsPage" className="artist_page-container">
      <h1 className="artist-title">Meet our Artist's</h1>

      <div className="artist-card-box">
        <Artist_card artists={artists} />
      </div>
    </section>
  );
};
export default Artists;
