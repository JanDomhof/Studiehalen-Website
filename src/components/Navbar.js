import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo test2.svg";
import blackLogo from "../images/Logo green.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let navbarClasses = ["nav"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <nav class={`navbar${scrolled ? " scrolled" : ""}`}>
      <div class="center">
        <img
          src={scrolled ? blackLogo : logo}
          alt="logo"
          class="website-logo"
        />
        <h1 class={`website-title${scrolled ? " scrolled" : ""}`}>
          Studiehalen.nl
        </h1>
      </div>
      <div class="ce">
        <Link to="/" class={`link${scrolled ? " scrolled" : ""}`}>
          Home
        </Link>
        <Link to="/over-ons" class={`link${scrolled ? " scrolled" : ""}`}>
          Over Ons
        </Link>
        <Link to="/aanbod" class={`link${scrolled ? " scrolled" : ""}`}>
          Aanbod
        </Link>
        <Link
          to="/contact"
          class={`contact-button${scrolled ? " scrolled" : ""}`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
