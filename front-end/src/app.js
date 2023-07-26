import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import HomeLayout from "./Layout/HomeLayout";
import ArtistGallery from "./pages/artist_gallery/artist_gallery";

import "./general.css";
import "./components/footer/footer.css";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/artist-Gallery/:id" element={<ArtistGallery />} />
      </Routes>
      <Footer />
    </>
  );
}
