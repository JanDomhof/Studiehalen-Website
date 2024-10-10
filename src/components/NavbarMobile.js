import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import Logo from "./Logo";
import MenuIcon from "../images/menu.svg";
import {
  Group,
  LocationOn,
  MenuBook,
  Reviews,
  School,
} from "@mui/icons-material";

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
        <a href="#home">
          <Logo mobile={mobile} scrolled={scrolled} />
        </a>
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
          <Stack borderBottom={"1px solid rgba(0,0,0,0.3)"} spacing={1}>
            <Typography variant="subtitle2" fontWeight={"bold"}>
              Welkom bij Studiehalen.nl
            </Typography>
            <Typography variant="body2" color={"grey"}>
              Neem contact met ons op om bijles aan te vragen of log in op onze
              portal.
            </Typography>
            <a
              href="#contact"
              style={{
                padding: "0.35em 0.5em",
                textDecoration: "none",
                color: "black",
                borderRadius: "5px",
                border: "1px solid black",
                width: "89%",
                marginTop: "20px",
              }}
              onClick={() => {
                closeMenu();
              }}
            >
              Contact
            </a>
            <a
              href="https://studiehalen.teachworks.com/"
              style={{
                padding: "0.35em 0.5em",
                textDecoration: "none",
                color: "black",
                borderRadius: "5px",
                border: "1px solid black",
                width: "89%",
                marginBottom: "30px",
              }}
            >
              Inloggen
            </a>
          </Stack>
          <Typography variant="subtitle2" fontWeight={"bold"} marginTop={4}>
            Waar wil je naartoe?
          </Typography>
          <List>
            <ListItem
              component="a"
              href="#home"
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
              component="a"
              href="#reviews"
              onClick={() => {
                closeMenu();
              }}
            >
              <ListItemIcon>
                <Reviews />
              </ListItemIcon>
              <ListItemText primary="Reviews" />
            </ListItem>
            <ListItem
              component="a"
              href="#lesvormen"
              onClick={() => {
                closeMenu();
              }}
            >
              <ListItemIcon>
                <School />
              </ListItemIcon>
              <ListItemText primary="Lesvormen" />
            </ListItem>
            <ListItem
              component="a"
              href="#vakken"
              onClick={() => {
                closeMenu();
              }}
            >
              <ListItemIcon>
                <MenuBook />
              </ListItemIcon>
              <ListItemText primary="Vakken" />
            </ListItem>
            <ListItem
              component="a"
              href="#team"
              onClick={() => {
                closeMenu();
              }}
            >
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Team" />
            </ListItem>
            <ListItem
              component="a"
              href="#locatie"
              onClick={() => {
                closeMenu();
              }}
            >
              <ListItemIcon>
                <LocationOn />
              </ListItemIcon>
              <ListItemText primary="Locatie" />
            </ListItem>
            <ListItem
              component="a"
              href="#contact"
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
