import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import Logo from "./Logo";
import MenuIcon from "../images/menu.svg";

const NavbarMobile = ({ scrolled }) => {
  const [width] = useState(window.innerWidth);
  const mobile = width < 768;

  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
    document.getElementById("overlay").style.visibility = "visible";
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.getElementById("overlay").style.visibility = "hidden";
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
      >
        <Box
          component="img"
          sx={{
            width: 30,
          }}
          alt="menu"
          src={MenuIcon}
          onClick={() => {
            openMenu();
          }}
          marginRight={2}
        />
        <Link to="/">
          <Logo mobile={mobile} scrolled={scrolled} />
        </Link>
        <Typography
          variant="h5"
          fontWeight="bold"
          color={"var(--primary)"}
          alignSelf={"center"}
          paddingTop={0.5}
          marginLeft={1}
        >
          Studiehalen.nl
        </Typography>
      </Stack>

      <Box
        id="overlay"
        width={"100vw"}
        height={"100vh"}
        visibility={"hidden"}
        backgroundColor={"rgba(0, 0, 0, 0.5)"}
        position={"absolute"}
        left={0}
        right={0}
        top={0}
        bottom={0}
        onClick={() => {
          closeMenu();
        }}
        zIndex={1}
      />
      <Stack
        direction={"column"}
        backgroundColor={"white"}
        position={"absolute"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"65vw"}
        left={isOpen ? "0" : "-65vw"}
        top={0}
        right={0}
        height={"100vh"}
        style={{
          transitionDuration: "0.2s",
        }}
        zIndex={2}
      >
        <Stack
          width={"90%"}
          height={"90%"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
        >
          <Stack borderBottom={"1px solid rgba(0,0,0,0.3)"}>
            <Typography variant="subtitle2" fontWeight={"bold"}>
              Welkom bij Studiehalen.nl
            </Typography>
            <Typography variant="body2" marginTop={1} color={"grey"}>
              Neem contact met ons op om bijles aan te vragen
            </Typography>
            <Link
              to="/contact"
              style={{
                padding: "0.35em 0.5em",
                textDecoration: "none",
                color: "black",
                borderRadius: "5px",
                border: "1px solid black",
                width: "89%",
                marginTop: "20px",
                marginBottom: "30px",
              }}
              onClick={() => {
                closeMenu();
              }}
            >
              Contact
            </Link>
          </Stack>
          <Typography variant="subtitle2" fontWeight={"bold"} marginTop={4}>
            Waar wil je naartoe?
          </Typography>
          <List>
            <ListItem
              component={Link}
              to="/"
              onClick={() => {
                closeMenu();
              }}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              component={Link}
              to="/over-ons"
              onClick={() => {
                closeMenu();
              }}
            >
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="Over" />
            </ListItem>
            <ListItem
              component={Link}
              to="/aanbod"
              onClick={() => {
                closeMenu();
              }}
            >
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Aanbod" />
            </ListItem>
            <ListItem
              component={Link}
              to="/contact"
              onClick={() => {
                closeMenu();
              }}
            >
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Stack>
      </Stack>
    </>
  );
};

export default NavbarMobile;
