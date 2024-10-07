import {
  Box,
  Stack,
  Typography,
  Link as MuiLink,
  Grid,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  const [width] = useState(window.innerWidth);
  const mobile = width < 768;

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "var(--footer-background)",
        padding: "40px",
        color: "white",
      }}
    >
      <Grid container spacing={5} justifyContent="center">
        {/* Contact Information */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Contact Info
          </Typography>
          <Stack sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Stack
              direction="row"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
              }}
              onClick={(e) => {
                window.location.href = "mailto:info@studiehalen.nl";
                e.preventDefault();
              }}
            >
              <EmailIcon sx={{ color: "white", marginRight: "8px" }} />
              <Typography variant="body2">info@studiehalen.nl</Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
              }}
              onClick={(e) => {
                window.location.href = "tel:+31635312865";
                e.preventDefault();
              }}
            >
              <PhoneIcon sx={{ color: "white", marginRight: "8px" }} />
              <Typography variant="body2">+31635312865</Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
              }}
              onClick={(e) => {
                window.open("https://www.instagram.com/studiehalen.nl");
                e.preventDefault();
              }}
            >
              <InstagramIcon sx={{ color: "white", marginRight: "8px" }} />
              <Typography variant="body2">@studiehalen.nl</Typography>
            </Stack>
          </Stack>
        </Grid>

        {/* Navigation Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Navigatie
          </Typography>
          <Stack sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <MuiLink
              href="#home"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              Home
            </MuiLink>
            <MuiLink
              href="#over"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              Over Ons
            </MuiLink>
            <MuiLink
              href="#aanbod"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              Aanbod
            </MuiLink>
            <MuiLink
              href="#contact"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              Contact
            </MuiLink>
          </Stack>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Volg Ons
          </Typography>
          <Stack
            direction="row"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
            onClick={(e) => {
              window.open("https://www.instagram.com/studiehalen.nl");
              e.preventDefault();
            }}
          >
            <InstagramIcon sx={{ color: "white", marginRight: "8px" }} />
            Instagram
          </Stack>
        </Grid>

        {/* Google Maps */}
        <Grid item xs={12} sm={6} md={3} marginLeft={mobile ? 0 : -10}>
          <Typography variant="h6" gutterBottom>
            Locatie
          </Typography>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d892.570024959601!2d4.347138347341277!3d52.015358865733205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b5334dcc0261%3A0xf7dd2ff3d2a6d624!2sStu-D%20Study%20Places!5e0!3m2!1sen!2snl!4v1728043020041!5m2!1sen!2snl"
            width="300"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </Grid>
      </Grid>
      <Divider sx={{ marginY: 3, borderColor: "rgba(255, 255, 255, 0.2)" }} />
      <Typography variant="body2" align="center">
        © {new Date().getFullYear()} Studiehalen.nl. Alle rechten voorbehouden.
      </Typography>
    </Box>
  );
};

export default Footer;
