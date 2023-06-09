import React, { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import NavbarPC from "./NavbarPC";
import NavbarMobile from "./NavbarMobile";

const StyledStack = styled(Stack)(({ theme }) => ({
  transition: `all var(--animation-time-header) ease-in-out`,
}));

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const mobile = width < 768;

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
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    };
  }, []);

  return (
    <Box zIndex={100} position="sticky" top={0}>
      <StyledStack
        direction="row"
        alignItems="center"
        backgroundColor={scrolled ? "var(--background)" : "var(--secondary)"}
        paddingRight={5}
        paddingLeft={5}
        justifyContent="space-between"
        transition="background-color var(--animation-time-header) ease-in-out"
      >
        {mobile ? (
          <NavbarMobile scrolled={scrolled} />
        ) : (
          <NavbarPC scrolled={scrolled} />
        )}
      </StyledStack>
    </Box>
  );
};

export default Navbar;
