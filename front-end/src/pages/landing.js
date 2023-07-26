import React from "react";

import "./landing.css";
import "../general.css";
export default function Landing() {
  return (
    <main className="landing-container">
      <section className="landing-section">
        <div className="img-container"></div>
        <h1 className="landing-title">Welcome to The Tattoo Shop!</h1>
        <p className="landing-about">
          At our tattoo shop, we believe that every body is a unique canvas
          waiting to be adorned with extraordinary creations. Step inside and
          experience a haven where imagination knows no limits, and where our
          skilled artists blend passion and precision to bring your vision to
          life.
        </p>
        <div className="flex-container">
          {" "}
          <h3 className="button-desc">Check out our Artist's galleries</h3>
          <button className="landing-btn">X</button>
        </div>
      </section>
    </main>
  );
}
