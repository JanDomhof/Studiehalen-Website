import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo test2.svg";
import blackLogo from "../images/Logo green.svg";
import { Stack } from "@mui/material";

const NavbarPC = ({ scrolled }) => {
  return (
    <>
      <Stack direction="row" alignItems="center">
        <Link to="/">
          <img
            src={scrolled ? blackLogo : logo}
            alt="logo"
            class="website-logo"
          />
        </Link>
        <h2 class={scrolled ? "website-title scrolled" : "website-title"}>
          Studiehalen.nl
        </h2>
      </Stack>
      <Stack direction="row" alignItems="center">
        <Link to="/" class={scrolled ? "link scrolled" : "link"}>
          Home
        </Link>
        <Link to="/over-ons" class={scrolled ? "link scrolled" : "link"}>
          Over
        </Link>
        <Link to="/aanbod" class={scrolled ? "link scrolled" : "link"}>
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
