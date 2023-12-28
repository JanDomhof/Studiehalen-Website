import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "./Logo";

const NavbarPC = ({ scrolled }) => {
  const [width] = useState(window.innerWidth);
  const mobile = width < 768;

  return (
    <>
      <Stack direction="row" alignItems="center" spacing={2} marginTop={2}>
        <Link to="/">
          <Logo mobile={mobile} scrolled={scrolled} />
        </Link>
        <h2 className={scrolled ? "website-title scrolled" : "website-title"}>
          Studiehalen.nl
        </h2>
      </Stack>
      <Stack direction="row" alignItems="center">
        <Link to="/" className={scrolled ? "link scrolled" : "link"}>
          Home
        </Link>
        <Link to="/over-ons" className={scrolled ? "link scrolled" : "link"}>
          Over
        </Link>
        <Link to="/aanbod" className={scrolled ? "link scrolled" : "link"}>
          Aanbod
        </Link>
        <Link
          to="/contact"
          className={scrolled ? "contact-button scrolled" : "contact-button"}
        >
          Contact
        </Link>
      </Stack>
    </>
  );
};

export default NavbarPC;
