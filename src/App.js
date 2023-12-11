// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Aanbod from "./pages/Aanbod";
import Contact from "./pages/Contact";
import Over from "./pages/Over";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";

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
    <>
      <ThemeProvider theme={THEME}>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aanbod" element={<Aanbod />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/over-ons" element={<Over />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
      <Analytics />
    </>
  );
};

export default App;
