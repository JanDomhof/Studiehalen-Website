import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const FormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  maxWidth: 600,
  margin: "auto",
}));

const ContactForm = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    message: "",
    study_program: "",
    course_name: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Function to update form state based on URL parameters
  const updateFormFromURL = () => {
    // Parse query parameters
    const params = new URLSearchParams(window.location.search);
    const studyProgram = params.get("study_program") || "";
    const courseName = params.get("course_name") || "";

    // Update form state with query parameters
    setForm((prevForm) => ({
      ...prevForm,
      study_program: studyProgram,
      course_name: courseName,
    }));

    // Scroll to the contact section if the hash is #contact
    if (window.location.hash === "#contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    // Update form on component mount
    updateFormFromURL();

    // Listen for the custom "locationchange" event
    window.addEventListener("locationchange", updateFormFromURL);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("locationchange", updateFormFromURL);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSuccess(true); // Set success state immediately
    emailjs
      .send("service_w1v087f", "template_9ltimss", form, "Stf7T_tRCxolhbkqs")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <FormContainer component="form" onSubmit={sendEmail} id="contact">
      {isSuccess ? (
        <Box display="flex" flexDirection="row" alignItems="center">
          <CheckCircleOutlineIcon color="success" sx={{ fontSize: 50 }} />
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            marginLeft={5}
          >
            <Typography variant={isMobile ? "h5" : "h4"} color="success.main">
              Gelukt!
            </Typography>
            <Typography variant="body1" color="success.main">
              We nemen zo snel mogelijk contact met je op!
            </Typography>
          </Box>
        </Box>
      ) : (
        <>
          <Typography variant={isMobile ? "h5" : "h4"} gutterBottom>
            Neem contact op
          </Typography>
          <TextField
            label="Naam"
            name="user_name"
            variant="outlined"
            required
            fullWidth
            value={form.user_name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="user_email"
            type="email"
            variant="outlined"
            required
            fullWidth
            value={form.user_email}
            onChange={handleChange}
          />
          <TextField
            label="Studie"
            name="study_program"
            variant="outlined"
            fullWidth
            value={form.study_program}
            onChange={handleChange}
          />
          <TextField
            label="Vak"
            name="course_name"
            variant="outlined"
            fullWidth
            value={form.course_name}
            onChange={handleChange}
          />
          <TextField
            label="Bericht"
            name="message"
            variant="outlined"
            required
            fullWidth
            multiline
            rows={4}
            value={form.message}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            color={isSuccess ? "success" : "primary"}
          >
            {isSuccess ? "Verzonden" : "Verstuur"}
          </Button>
        </>
      )}
    </FormContainer>
  );
};

export default ContactForm;
