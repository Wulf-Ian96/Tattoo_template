import React from "react";
import Artist_card from "../../components/artist_card/artist_card";

export default function Artists() {
  return (
    <section className="artist_page-container">
      <h1 className="artist-title">Meet our Artist's</h1>

      <div className="artist-card-box">
        <Artist_card />
        <Artist_card />
      </div>
    </section>
  );
}
