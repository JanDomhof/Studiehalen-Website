import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Reviews from "./pages/Reviews";
import Vakken from "./pages/Vakken";
import Team from "./pages/Team";
import Locatie from "./pages/Locatie";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import VoorDoor from "./pages/VoorDoor";
import Lesvormen from "./pages/Lesvormen";

const App = () => {
  const THEME = createTheme({
    typography: {
      fontFamily: "GT Walsheim",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
  });

  return (
    <ThemeProvider theme={THEME}>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="voordoor">
        <VoorDoor />
      </section>
      <section id="reviews" style={{ scrollMarginTop: "150px" }}>
        <Reviews />
      </section>
      <section id="lesvormen">
        <Lesvormen />
      </section>
      <section id="vakken" style={{ scrollMarginTop: "150px" }}>
        <Vakken />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="locatie">
        <Locatie />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <Analytics />
    </ThemeProvider>
  );
};

export default App;
