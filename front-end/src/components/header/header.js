import React from "react";
import "./header.css";
export default function Header() {
  return (
    <nav className="nav-bar_container">
      <h1 className="nav-title">The Tattoo Shop</h1>
      <ul className="drop-down-menu">
        <p>Artists</p>
        <p>Contact us</p>
        <p>FAQ</p>
      </ul>
    </nav>
  );
}
