import React, { useState } from "react";
import logo from "../images/Logo test2.svg";
import blackLogo from "../images/Logo green.svg";
import { Stack } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";

const NavbarMobile = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon />
      </IconButton>
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
      <Stack
        direction="column"
        display={isOpen ? "flex" : "none"}
        backgroundColor={"white"}
        position="absolute"
        justifyContent={"start"}
        alignItems={"center"}
        width={"100%"}
        left={0}
        top={0}
        right={0}
        height={"100vh"}
      >
        <Stack
          direction={"row"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          width={"100%"}
        >
          <CloseIcon
            onClick={() => {
              setIsOpen(false);
            }}
          />
          <img
            src={scrolled ? blackLogo : logo}
            alt="logo"
            className="website-logo"
          />
          <h2 class={scrolled ? "website-title scrolled" : "website-title"}>
            Studiehalen.nl
          </h2>
        </Stack>
        <Box height={10}></Box>
        <Divider orientation="horizontal" flexItem />
        <List>
          <ListItem
            component={Link}
            to="/"
            onClick={() => {
              setIsOpen(false);
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
              setIsOpen(false);
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
              setIsOpen(false);
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
              setIsOpen(false);
            }}
          >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Stack>
    </>
  );
};

export default NavbarMobile;
