import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Landing from "../pages/landing";
import Artists from "../pages/artists_page/artists";
import "../components/artist_card/cardStyles.css";
import "../components/hamburgler/hamburgler.css";
import "../pages/Faq_page/faq.css";
import "../pages/contact_page/contact.css";
import "../components/header/header.css";

import Contact from "../pages/contact_page/contact";

import FaqPage from "../pages/Faq_page/faqPage";

import useWindowDimensions from "../util_functions/windowTrack";
import scrollToSection from "../util_functions/scrollToSection";
export default function HomeLayout({ artists }) {
  const { width } = useWindowDimensions();

  const artistRef = useRef();
  const FaqRef = useRef();

  const faqClick = () => scrollToSection(FaqRef);
  const artistClick = () => scrollToSection(artistRef);

  // desktop version of header to be rendered based on view width
  const desktopHeader = (
    <nav className="nav-bar_container">
      <h1 className="nav-title">The Tattoo Shop</h1>
      <div className="desktop-header-box">
        <Link to="/BookNow" class="button-1">
          Book Now!
        </Link>
        <button onClick={artistClick} className="button-1">
          Artists
        </button>
        <button onClick={faqClick} className="button-1">
          FAQs
        </button>
      </div>
    </nav>
  );

  // mobile version of header to be rendered based on view width

  const mobileHeader = (
    <div className="nav-bar_container">
      <h1 className="nav-title">The Tattoo Shop</h1>
      <section class="p-menu1">
        <nav id="navbar" class="navigation" role="navigation">
          <input id="toggle1" type="checkbox" />
          <label class="hamburger1" for="toggle1">
            <div class="top"></div>
            <div class="meat"></div>
            <div class="bottom"></div>
          </label>

          <nav class="menu1">
            <Link to="/BookNow" class="link1">
              Book Now!
            </Link>
            <a class="link1" href="/">
              Home
            </a>
            <button onClick={artistClick} class="link1" href="">
              Artists
            </button>
            <button onClick={faqClick} class="link1" href="">
              Contact
            </button>
          </nav>
        </nav>
      </section>
    </div>
  );

  return (
    <>
      {width > 820 ? desktopHeader : mobileHeader}

      <Landing />
      <div ref={artistRef}>
        <Artists artists={artists} />
      </div>
      <div ref={FaqRef} className="faq-contact-box">
        <FaqPage />
        <Contact />
      </div>
    </>
  );
}
