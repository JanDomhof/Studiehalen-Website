import React, { useState } from "react";
import { TextField, Button, Typography, Box, Alert } from "@mui/material";
import emailjs from "emailjs-com";

const BookletDownload = () => {
  const [email, setEmail] = useState("");
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
      user_email: email, // recipient's email
      file_link: `${window.location.origin}/boekjes/Sterkteleer Uitwerkingen.pdf`, // Public link to the file
    };

    emailjs
      .send(
        "service_w1v087f", // Replace with your EmailJS Service ID
        "template_o2m2n3h", // Replace with your EmailJS Template ID
        templateParams,
        "Stf7T_tRCxolhbkqs" // Replace with your EmailJS Public Key
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
          Download Uitwerkingen Boekje
        </Typography>
        <Typography variant="body1" gutterBottom>
          Vul je email in en ontvang het boekje (PDF) meteen in je mail!
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email Adres"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error}
            margin="normal"
            helperText={error ? "Please enter a valid email" : ""}
          />
          <Button type="submit" variant="contained" color="primary">
            Send to Email
          </Button>
        </form>
        {success && (
          <Alert severity="success" sx={{ marginTop: "1rem" }}>
            <p>
              Je ontvangt het boekje zo snel mogelijk in je email! Als je een
              fout in de uitwerking ziet, laat dat dan graag weten via het
              contact form beneden! Bedankt voor het downloaden!
            </p>
            <p>
              Mocht iemand die je kent dit boekje ook willen hebben, stuur dan
              vooral de link naar onze website in plaats van het boekje zelf.
            </p>
          </Alert>
        )}
        {error && (
          <Alert severity="error" sx={{ marginTop: "1rem" }}>
            Er ging iets fout. Probeer het later opnieuw.
          </Alert>
        )}
      </Box>
    </Box>
  );
};

export default BookletDownload;
