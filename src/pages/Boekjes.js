import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import emailjs from "emailjs-com";

const BookletDownload = () => {
  const [email, setEmail] = useState("");
  const [week, setWeek] = useState("1"); // Default week is '1'
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@") || !email.includes(".")) {
      setError(true);
      setSuccess(false);
      return;
    }

    setError(false);

    // EmailJS configuration
    const templateParams = {
      user_email: email,
      // Dynamisch linkje naar de PDF van Sterkteleer-uitwerkingen voor de gekozen week
      file_link: `${window.location.origin}/boekjes/Sterkteleer Uitwerkingen Week ${week}.pdf`,
    };

    emailjs
      .send(
        "service_w1v087f", // Vervang met je EmailJS Service ID
        "template_o2m2n3h", // Vervang met je EmailJS Template ID
        templateParams,
        "Stf7T_tRCxolhbkqs" // Vervang met je EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Email SUCCESS!", response.status, response.text);
          setSuccess(true);
        },
        (err) => {
          console.log("Email FAILED...", err);
          setError(true);
        }
      );
  };

  return (
    <Box
      sx={{
        width: "100vw",
        background: "white",
      }}
      paddingBottom={10}
    >
      <Box
        sx={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "2rem",
          textAlign: "center",
          background: "var(--secondary)",
          borderRadius: "5px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Sterkteleer (WB) Uitwerkingen
        </Typography>
        <Typography variant="body1" gutterBottom>
          Vul je email in en selecteer hieronder de week waarvoor je het
          uitwerkingen-boekje (PDF) wilt ontvangen. Je ontvangt het meteen in je
          mail!
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Emailadres"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error}
            margin="normal"
            helperText={error ? "Voer een geldig e-mailadres in" : ""}
          />
          <FormControl variant="outlined" fullWidth margin="normal" required>
            <InputLabel id="week-label">Week</InputLabel>
            <Select
              labelId="week-label"
              label="Week"
              value={week}
              onChange={(e) => setWeek(e.target.value)}
            >
              <MenuItem value="4">Week 4</MenuItem>
              <MenuItem value="5">Week 5</MenuItem>
              <MenuItem value="6">Week 6</MenuItem>
              <MenuItem value="6">Week 7</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Stuur naar E-mail
          </Button>
        </form>
        {success && (
          <Alert severity="success" sx={{ marginTop: "1rem" }}>
            <p>
              Je ontvangt het boekje voor Sterkteleer (Werktuigbouwkunde) zo
              snel mogelijk in je mail! Zie je een fout in de uitwerking? Laat
              het ons weten via het contactformulier onderaan de pagina.
            </p>
            <p>
              Mocht iemand anders ook geïnteresseerd zijn, verwijs hen dan
              gerust door naar onze website in plaats van het boekje zelf te
              delen.
            </p>
          </Alert>
        )}
        {error && (
          <Alert severity="error" sx={{ marginTop: "1rem" }}>
            Er ging iets mis. Controleer je emailadres of probeer het later
            opnieuw.
          </Alert>
        )}
      </Box>
    </Box>
  );
};

export default BookletDownload;
