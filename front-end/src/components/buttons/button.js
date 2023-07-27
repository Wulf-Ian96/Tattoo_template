import React from "react";
import { Link } from "react-router-dom";
import "./button.css";
export default function Button({ name, click, artistId }) {
  if (name === "View Gallery") {
    return (
      <Link
        className="button-1"
        to={`/artist-gallery/${artistId}`}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        {name}
      </Link>
    );
  } else if (name === "Artists") {
    <a href="#ArtistsPage" className="button-1" to={`#ArtistsPage`}>
      {name}
    </a>;
  } else if (name === "FAQs") {
    <Link className="button-1" to={`#FaqPage`}>
      {name}
    </Link>;
  } else if (name === "Home") {
    <Link className="button-1" to={`#HomePage`}>
      {name}
    </Link>;
  }
  return <button class="button-1">{name}</button>;
}
