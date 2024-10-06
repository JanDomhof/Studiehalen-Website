import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import IconWithText from "../components/IconWithText";
import IdeaIcon from "../images/idea.png";
import DeadlineIcon from "../images/deadline.png";
import Conversation from "../images/conversation.png";
import JusticeIcon from "../images/justice.png";

const VoorDoor = () => {
  const [width] = useState(window.innerWidth);
  const mobile = width < 768;

  return (
    <Stack
      backgroundColor="white"
      paddingLeft={mobile ? "10px" : ""}
      alignItems={mobile ? "flex-start" : "center"}
    >
      <Typography variant={mobile ? "h4" : "h3"} marginTop={10}>
        Voor studenten, door studenten!
      </Typography>
      <Typography
        variant="body1"
        marginBottom={mobile ? 0 : 5}
        maxWidth="70vw"
        marginTop={3}
        fontSize={20}
      >
        Waarom?
      </Typography>
      <Stack
        direction={mobile ? "column" : "row"}
        justifyContent={"space-around"}
        marginBottom={20}
        width={"95vw"}
      >
        <IconWithText
          color={"#2C68F0"}
          icon={DeadlineIcon}
          title={"Nét nog zelf gestudeerd"}
          text={
            "Onze student-docenten hebben recentelijk dezelfde tentamens die jij moet halen zelf ook al gehaald! Hierdoor weten ze nog heel goed wat ze zelf moeilijk vonden van de stof, en kunnen jou dan ook juist met die punten helpen."
          }
        ></IconWithText>
        <IconWithText
          color={"#EA9D39"}
          icon={IdeaIcon}
          title={"Kennen de pijnpuntjes"}
          text={
            "De student-docenten weten uit herinnering nog goed waardoor zij de stof zijn gaan begrijpen. Ze kennen de voorbeelden en manieren van denken wat de stof makkelijk te begrijpen maakt. Door van een andere student les te krijgen, leer je zelf hoe je moet nadenken over de stof."
          }
        ></IconWithText>
        <IconWithText
          color={"#DD5E56"}
          icon={Conversation}
          title={"Voelt als een mede-student"}
          text={
            "Het is altijd makkelijker om vragen te stellen aan mede-studenten dan aan professoren, docenten of leraren. Doordat je van een mede-student les krijgt, voel je je vrij om alles te vragen wat je zou willen! Aangezien vragen stellen de beste manier is om te leren, denken wij dat je hierdoor nog beter en makkelijk je stof gaat begrijpen."
          }
        ></IconWithText>
        <IconWithText
          color={"#7859BC"}
          icon={JusticeIcon}
          title={"Leren combineren"}
          text={
            "Studeren opzich is al moeilijk genoeg, al helemaal als je ook een druk studenten-leven naast je studie hebt. Onze student-docenten kunnen jou goed helpen met plannen, zodat je ook genoeg tijd overhoudt voor leuke dingen in je vrije tijd. Want vergeet niet, zij hebben het ook gedaan!"
          }
        ></IconWithText>
      </Stack>
    </Stack>
  );
};

export default VoorDoor;
