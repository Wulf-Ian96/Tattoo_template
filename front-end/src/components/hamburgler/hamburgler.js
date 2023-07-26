import React from "react";
import "./hamburgler.css";
export default function Hamburgler() {
  return (
    <section class="p-menu1">
      <nav id="navbar" class="navigation" role="navigation">
        <input id="toggle1" type="checkbox" />
        <label class="hamburger1" for="toggle1">
          <div class="top"></div>
          <div class="meat"></div>
          <div class="bottom"></div>
        </label>

        <nav class="menu1">
          <a class="link1" href="">
            Book Now!
          </a>
          <a class="link1" href="">
            Home
          </a>
          <a class="link1" href="">
            Artists
          </a>
          <a class="link1" href="">
            Contact
          </a>
        </nav>
      </nav>
    </section>
  );
}
