import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const mobile = width < 768;

  const contactFoot = (
    <Stack>
      <h3>Contact Info</h3>
      <Stack
        direction="row"
        alignItems="center"
        display={"flex"}
        justifyContent={"center"}
        spacing={2}
      >
        <Box>
          <ul
            className="contact-info"
            style={{ "list-style-type": "none", "padding-left": 0 }}
          >
            <li>Email:</li>
            <li>Telefoon:</li>
            <li>Insta:</li>
          </ul>
        </Box>
        <Box>
          <ul
            className="contact-info"
            style={{ "list-style-type": "none", "padding-left": 0 }}
          >
            <li>studiehalen.nl@gmail.com</li>
            <li>+31635312865</li>
            <li>@studiehalen.nl</li>
          </ul>
        </Box>
      </Stack>
    </Stack>
  );

  const navigationFoot = (
    <Stack>
      <Stack direction="column">
        <h3>Navigatie</h3>
        <ul style={{ "list-style-type": "none", "padding-left": 0 }}>
          <li>
            <Link to="/" style={{ color: "black", "text-decoration": "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/over-ons"
              style={{ color: "black", "text-decoration": "none" }}
            >
              Over Ons
            </Link>
          </li>
          <li>
            <Link
              to="/aanbod"
              style={{ color: "black", "text-decoration": "none" }}
            >
              Aanbod
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ color: "black", "text-decoration": "none" }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </Stack>
    </Stack>
  );

  return (
    <Stack
      direction="row"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="var(--secondary)"
      spacing={40}
      padding={5}
    >
      {contactFoot}
      {mobile ? <></> : navigationFoot}
    </Stack>
  );
};

export default Footer;
