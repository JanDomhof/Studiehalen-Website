import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <ul className="footer-nav">
            <h3>Navigatie</h3>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/over-ons">Over Ons</Link>
            </li>
            <li>
              <Link to="/aanbod">Aanbod</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li>Email: studiehalen.nl@gmail.com</li>
            <li>Tel: +31635312865</li>
            <li>Instagram: @studiehalen.nl</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
