import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import HomeLayout from "./Layout/HomeLayout";
import ArtistGallery from "./pages/artist_gallery/artist_gallery";
import BookNow from "./pages/book_now/BookNow";
import Admin from "./Admin/Main-Admin-Page/Main_Admin";
import Waiver from "./pages/waiver_page/waiver";
import WaiverQR from "./pages/waiver_page/WaiverQR";
import LoginPage from "./Login/loginPage";
import "./general.css";
import "./components/footer/footer.css";
import { getDocs, onSnapshot } from "firebase/firestore";
import { colRef, adminToken } from "./firebase";
export default function App() {
  const [artists, setArtists] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  // get collection data
  // useEffect(() => {
  //   getDocs(colRef).then((snapshot) => {
  //     let data = [];
  //     snapshot.docs.forEach((doc) => {
  //       data.push({ ...doc.data(), id: doc.id });
  //     });
  //     setArtists(data);
  //   });
  // }, []);

  // how to do real time updates for the collection/ db
  //  real time is nice because it adds a subscription that will track the database and update if any changes happen like adding or deleting documents
  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      let data = [];
      snapshot.docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setArtists(data);
    });
  }, []);
  console.log("app inital load:", currentUser.accessToken);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout artists={artists} />} />
        <Route
          path="/artist-Gallery/:id"
          element={<ArtistGallery artists={artists} />}
        />
        <Route path="/BookNow" element={<BookNow artists={artists} />} />
        <Route
          path="/admin"
          element={
            <LoginPage
              artists={artists}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />

        <Route path="/waiver" element={<Waiver />} />
        <Route path="/waiver/QR" element={<WaiverQR />} />
      </Routes>
      <Footer />
    </>
  );
}
