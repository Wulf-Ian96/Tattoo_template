import React from "react";

export default function Footer() {
  return (
    <nav className="footer-container">
      <div className="copyright">
        <h1>The Tattoo Shop</h1>
        <span>&#169;</span>
        <p>2023</p>
      </div>
      <div className="icon-container">
        <i
          class="fa-brands fa-square-facebook fa-2xl"
          style={{ color: "#241a19;" }}
        ></i>
        <i
          class="fa-brands fa-instagram fa-2xl"
          style={{ color: "#241a19;" }}
        ></i>
      </div>
    </nav>
  );
}
