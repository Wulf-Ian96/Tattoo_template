import React from "react";

export default function Contact() {
  return (
    <section className="contact-container">
      <h1 className="contact-title">Contact us</h1>
      <div className="contact-content">
        <p className="contact-p">
          <span className="bold">Located:</span> <br></br>400 S 11th St, Lincoln
          NE
        </p>
        <p className="contact-p">
          <span className="bold">Phone number:</span>
          <br></br> 402-000-0000
        </p>
        <p className="contact-p">
          <span className="bold">Store hours:</span> <br></br> Tuesday - Sunday
          12:00pm - 8:00pm{" "}
        </p>
      </div>
    </section>
  );
}
