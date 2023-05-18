// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Aanbod from "./pages/Aanbod";
import Contact from "./pages/Contact";
import Over from "./pages/Over";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aanbod" element={<Aanbod />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/over-ons" element={<Over />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
