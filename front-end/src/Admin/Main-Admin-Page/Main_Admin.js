import React, { useState } from "react";
import "./Main_Admin.css";
import Employees from "../Admin_components/employees";
import AddEmployee from "../Admin_components/add_employee/AddEmployee";
import MainConsultations from "../Admin_components/consultations/main-admin-consultations/MainConsultations";
import Waivers from "../Admin_components/Waivers/Waivers";
export default function Admin({ artists }) {
  const [selectedArtist, setSelectedArtist] = useState(undefined);
  const [dropdownOpen, setDropDownOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [addEmployee, setAddEmployee] = useState(false);
  const [openConsult, setOpenConsult] = useState(false);
  const [openWaivers, setOpenWaivers] = useState(false);
  console.log("artists step 2: main admin", artists);
  console.log("selected Artist:", selectedArtist);

  function toggleOpen(e) {
    e.preventDefault();
    setIsOpen((prevState) => !prevState);
  }
  console.log(isOpen);
  return (
    <>
      <nav className="admin_nav">
        <h1 className="admin_title">Tattoo shop - Admin Portal</h1>
        <h2>Welcome, Name!</h2>
      </nav>
      <main className="admin_page-container">
        <div
          className={
            isOpen ? "sidebarClosed  close-animation" : "sidebarClosed "
          }
        >
          {" "}
          <i
            onClick={toggleOpen}
            class="fa-solid fa-chevron-right fa-2xl toggle-btn"
            style={{ color: "#473938" }}
          ></i>
        </div>
        <aside className={isOpen ? "admin-menu open" : "admin-menu closed"}>
          <div className="aside-content-box">
            <i
              onClick={toggleOpen}
              class="fa-solid fa-chevron-right fa-2xl toggle-btn"
              style={{ color: "#473938" }}
            ></i>
            <button
              onClick={() => {
                setDropDownOpen((dropdownOpen) => !dropdownOpen);
                setOpenWaivers(false);
              }}
              className="aside-content zIndex-1"
            >
              Employee's
            </button>
            <div
              className={
                dropdownOpen ? "employee-list" : "employee-list hidden"
              }
            >
              {artists.map((artist) => (
                <p
                  onClick={() => {
                    setSelectedArtist(artist);
                    setAddEmployee(false);
                    setOpenConsult(false);
                    setOpenWaivers(false);
                  }}
                  id={artist.id}
                  key={artist.id}
                  className="list-item"
                >
                  {artist.name}
                </p>
              ))}
              <p
                className="list-item sm-font"
                onClick={() => {
                  setAddEmployee(true);
                  setDropDownOpen(false);
                  setSelectedArtist(undefined);
                  setOpenConsult(false);
                  setOpenWaivers(false);
                }}
              >
                Add Employee
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedArtist(undefined);
                setOpenConsult(!openConsult);
                setDropDownOpen(false);
                setAddEmployee(false);
                setOpenWaivers(false);
              }}
              className="aside-content"
            >
              Consultations
            </button>
            <button
              className="aside-content"
              onClick={() => {
                setSelectedArtist(undefined);
                setAddEmployee(false);
                setDropDownOpen(false);
                setOpenConsult(false);
                setOpenWaivers(true);
              }}
            >
              Waivers
            </button>
          </div>
        </aside>
        {addEmployee ? <AddEmployee /> : ""}
        {selectedArtist !== undefined ? (
          <Employees
            setSelectedArtist={setSelectedArtist}
            artists={artists}
            selectedArtist={selectedArtist}
          />
        ) : (
          ""
        )}
        {openConsult ? <MainConsultations artists={artists} /> : ""}
        {openWaivers ? <Waivers /> : ""}
      </main>
    </>
  );
}
