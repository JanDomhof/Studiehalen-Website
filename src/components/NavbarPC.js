import React, { useState } from "react";
import { Stack } from "@mui/material";
import Logo from "./Logo";

const NavbarPC = ({ scrolled }) => {
  const [width] = useState(window.innerWidth);
  const mobile = width < 768;

  return (
    <>
      <Stack direction="row" alignItems="center" spacing={2} marginTop={2}>
        <a href="#home">
          <Logo mobile={mobile} scrolled={scrolled} />
        </a>
        <h2 className={scrolled ? "website-title scrolled" : "website-title"}>
          Studiehalen.nl
        </h2>
      </Stack>
      <Stack direction="row" alignItems="center">
        <a href="#home" className={scrolled ? "link scrolled" : "link"}>
          Home
        </a>
        <a href="#reviews" className={scrolled ? "link scrolled" : "link"}>
          Reviews
        </a>
        <a href="#lesvormen" className={scrolled ? "link scrolled" : "link"}>
          Lesvormen
        </a>
        <a href="#vakken" className={scrolled ? "link scrolled" : "link"}>
          Vakken
        </a>
        <a href="#team" className={scrolled ? "link scrolled" : "link"}>
          Team
        </a>
        <a href="#locatie" className={scrolled ? "link scrolled" : "link"}>
          Locatie
        </a>
        <a
          href="https://studiehalen.teachworks.com/"
          className={scrolled ? "link scrolled" : "link"}
        >
          Inloggen
        </a>
        <a
          href="#contact"
          className={scrolled ? "contact-button scrolled" : "contact-button"}
        >
          Contact
        </a>
      </Stack>
    </>
  );
};

export default NavbarPC;
