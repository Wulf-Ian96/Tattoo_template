import React, { useRef } from "react";
import Artist_card from "../../components/artist_card/artist_card";

const Artists = (ref) => {
  return (
    <section id="ArtistsPage" className="artist_page-container">
      <h1 className="artist-title">Meet our Artist's</h1>

      <div className="artist-card-box">
        <Artist_card artistId={1} />
      </div>
    </section>
  );
};
export default Artists;
