import React from "react";
import WaiverSVG from "../../assets/waiverQR.svg";
import "./waiver.css";
export default function WaiverQR() {
  return (
    <div className="qr-container">
      <h1 className="qr-title">Scan to Fill out Waiver</h1>
      <img className="qr-img" src={WaiverSVG} />
    </div>
  );
}
