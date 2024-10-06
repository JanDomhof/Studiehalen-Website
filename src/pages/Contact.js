import React, { useState } from "react";
import ContactForm from "../components/ContactForm";
import { Box, Stack } from "@mui/material";
import PageTitle from "../components/PageTitle";

const Contact = () => {
  const [width] = useState(window.innerWidth);
  const mobile = width < 768;
  return (
    <Stack display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <PageTitle
        title={"CONTACT"}
        subtitle={"Vraag je bijles aan."}
        marginBottom={10}
      />
      <Box width={mobile ? "80vw" : "50vw"} marginBottom={20}>
        <ContactForm />
      </Box>
    </Stack>
  );
};

export default Contact;
