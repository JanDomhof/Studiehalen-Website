import React from "react";
import ContactForm from "../components/ContactForm";
import { ReactComponent as EmailIcon } from "../images/email.svg";
import { ReactComponent as PhoneIcon } from "../images/phone.svg";
import { ReactComponent as WhatsappIcon } from "../images/whatsapp.svg";

const Contact = () => {
  return (
    <div class="about-us">
      <h1 class="page-title">Contact</h1>
      <p class="content">
        We vinden het leuk om van onze klanten te horen en staan altijd klaar om
        eventuele vragen te beantwoorden. Je kunt ons bereiken via onderstaande
        contactgegevens of door het formulier op deze pagina in te vullen.
      </p>
      <p class="content">
        Als je het formulier invult, zullen wij zo snel mogelijk contact met je
        opnemen. Of het nu gaat om informatie over onze bijlesdiensten of om
        algemene vragen over ons bedrijf, we staan klaar om je te helpen.
      </p>
      <div class="columns-contact">
        <div class="column-contact">
          <h1>Neem contact met ons op</h1>
          <div class="icons-container">
            <p>
              <a href="mailto:studiehalen.nl@gmail.com">
                <EmailIcon class="contact-icon" />
              </a>
            </p>
            <p>
              <a href="tel:+31635312865">
                <PhoneIcon class="contact-icon" />
              </a>
            </p>
            <p>
              <a href="https://wa.me/31635312865?text=Hello%20I%20want%20to%20enquire%20about%20your%20services">
                <WhatsappIcon class="contact-icon" />
              </a>
            </p>
          </div>
        </div>
        <div class="column-contact">
          <h1>Stuur een bericht</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
