import React from "react";
import Landing from "./pages/landing";
import Header from "./components/header/header";
import Artists from "./pages/artists_page/artists";
import "./components/artist_card/cardStyles.css";
import "./general.css";
import "./pages/Faq_page/faq.css";
import "./pages/contact_page/contact.css";
import "./components/footer/footer.css";
import Contact from "./pages/contact_page/contact";
import Footer from "./components/footer/footer";
import FaqPage from "./pages/Faq_page/faqPage";
export default function App() {
  return (
    <>
      <Header />
      <Landing />
      <Artists />
      <div className="faq-contact-box">
        <FaqPage />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
