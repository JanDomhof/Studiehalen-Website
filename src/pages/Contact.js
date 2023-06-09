import React, { useState } from "react";
import ContactForm from "../components/ContactForm";
import { ReactComponent as EmailIcon } from "../images/email.svg";
import { ReactComponent as PhoneIcon } from "../images/phone.svg";
import { ReactComponent as WhatsappIcon } from "../images/whatsapp.svg";
import { Stack, Typography, Box } from "@mui/material";

const Contact = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const mobile = width < 768;
  return (
    <Stack
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={5}
    >
      <Typography variant="h2" fontWeight={"bold"} marginTop={5}>
        Contact
      </Typography>
      <Typography variant="body1" width={"80%"}>
        We vinden het leuk om van onze klanten te horen en staan altijd klaar om
        eventuele vragen te beantwoorden. Je kunt ons bereiken via onderstaande
        contactgegevens of door het formulier op deze pagina in te vullen.
      </Typography>
      <Typography variant="body1" width={"80%"}>
        Als je het formulier invult, zullen wij zo snel mogelijk contact met je
        opnemen. Of het nu gaat om informatie over onze bijlesdiensten of om
        algemene vragen over ons bedrijf, we staan klaar om je te helpen.
      </Typography>
      <Stack direction={mobile ? "column" : "row"} spacing={mobile ? 0 : 10}>
        <Stack display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Typography variant="h4" fontWeight={"bold"}>
            Stuur een bericht
          </Typography>
          <ContactForm />
        </Stack>
        <Stack display={"flex"} alignItems={"center"} marginBottom={5}>
          <Typography variant="h4" fontWeight={"bold"} width={"80%"}>
            Neem contact met ons op
          </Typography>
          <Stack
            direction={"row"}
            justifyContent={"space-evenly"}
            width={"100%"}
          >
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
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Contact;
