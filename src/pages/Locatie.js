import React, { useState, useEffect, useRef } from "react";
import { Stack, Box, Typography, Link, Grid } from "@mui/material";
import PageTitle from "../components/PageTitle";
import stud from "../images/Stu-D website.png";

const Locatie = () => {
  const [width] = useState(window.innerWidth);
  const mobile = width < 768;
  const imageRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState(0);

  useEffect(() => {
    if (imageRef.current) {
      setIframeHeight(imageRef.current.clientHeight);
    }
  }, [width]);

  const handleImageLoad = () => {
    if (imageRef.current) {
      setIframeHeight(imageRef.current.clientHeight);
    }
  };

  return (
    <Stack
      alignItems="center"
      overflow="hidden"
      backgroundColor="white"
      padding={mobile ? 2 : 5}
      spacing={5}
      paddingBottom={10}
      textAlign={mobile ? "left" : "center"}
    >
      <PageTitle
        title="LOCATIE"
        subtitle="Wij geven onze lessen op Stu-D!"
        marginBottom={10}
      />

      {/* Container for iframe and image */}
      <Grid container spacing={2} justifyContent="center" width="100%">
        {/* Image */}
        <Grid item xs={12} md={6} marginLeft={mobile ? -2 : 0}>
          <Box
            component="img"
            sx={{
              width: "100%",
            }}
            src={stud}
            alt="Stu-D Image"
            ref={imageRef}
            onLoad={handleImageLoad}
          />
        </Grid>

        {/* Google Maps iframe */}
        <Grid item xs={12} md={6} marginLeft={mobile ? -2 : 0}>
          <Box
            component="iframe"
            sx={{
              border: 0,
              width: "100%",
              height: `${iframeHeight}px`,
            }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d892.570024959601!2d4.347138347341277!3d52.015358865733205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b5334dcc0261%3A0xf7dd2ff3d2a6d624!2sStu-D%20Study%20Places!5e0!3m2!1sen!2snl!4v1728043020041!5m2!1sen!2snl"
            allowFullScreen=""
            loading="lazy"
            title="Stu-D Location"
          ></Box>
        </Grid>
      </Grid>

      {/* Uitleg */}
      <Typography variant="body1" sx={{ maxWidth: 800 }}>
        Onze lessen worden gegeven in de gereserveerde zalen van het Stu-D
        gebouw, een moderne en inspirerende omgeving die ideaal is voor studie
        en bijles. Dankzij onze samenwerking met Stu-D kunnen wij hoogwaardige
        faciliteiten bieden aan onze studenten.
      </Typography>

      {/* Link to Stu-D's website */}
      <Typography variant="h6">
        Bezoek de website van{" "}
        <Link
          href="https://www.stud.nl/stu-d-studeerplekken"
          target="_blank"
          rel="noopener"
        >
          Stu-D
        </Link>{" "}
        voor meer informatie.
      </Typography>
    </Stack>
  );
};

export default Locatie;
