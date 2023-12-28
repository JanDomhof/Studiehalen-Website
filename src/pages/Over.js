import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import { Box, Stack, Typography } from "@mui/material";
import TeamMember from "../components/TeamMember";
import Olivier from "../images/LinkedIn-Olivier.jpeg";
import Dries from "../images/LinkedIn-Dries.jpeg";
import Jan from "../images/LinkedIn-Jan.jpeg";
import IconWithText from "../components/IconWithText";
import IdeaIcon from "../images/idea.png";
import DeadlineIcon from "../images/deadline.png";
import Conversation from "../images/conversation.png";
import JusticeIcon from "../images/justice.png";

const Over = () => {
  const [width] = useState(window.innerWidth);
  const mobile = width < 768;

  return (
    <Stack alignItems={mobile ? "flex-start" : "center"} overflow={"hidden"}>
      <PageTitle title={"OVER ONS"} subtitle={"Ontmoet het team."} />
      <Box paddingLeft={"10px"}>
        <Stack
          direction={mobile ? "column" : "row"}
          justifyContent={"space-around"}
          marginBottom={20}
          width={"100vw"}
          spacing={mobile ? 3 : 0}
        >
          <TeamMember
            name={"Olivier Becht"}
            bachelor={"Werktuigbouwkunde"}
            src={Olivier}
          />
          <TeamMember
            name={"Dries Boogaard"}
            bachelor={"Werktuigbouwkunde"}
            src={Dries}
          />
          <TeamMember
            name={"Jan Domhof"}
            bachelor={"Computer Science"}
            src={Jan}
          />
        </Stack>
      </Box>
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
          width={"100vw"}
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

      {/* 
      <h2 class="heading">Wat geven wij</h2>
      <p class="content">
        Bij Studiehalen.nl zijn we er trots op dat we bijlessen aanbieden die
        jou écht verder helpen. Onze bijlessen worden gegeven door ervaren
        studenten die de vakken al met succes hebben afgerond. Ze kennen de ins
        en outs van de tentamens en weten precies wat er van je wordt verwacht.
        Met hun kennis en expertise staan ze klaar om jou door de uitdagingen
        van je studie te loodsen. Onze unieke aanpak omvat het aanbieden van
        bijles gedurende het hele kwartaal. Hiermee zorgen we ervoor dat onze
        klanten de stof grondig begrijpen en beheersen, in plaats van enkel
        kortetermijnoplossingen te zoeken vlak voor het tentamen. Deze
        diepgaande benadering stelt je in staat om de stof beter te onthouden en
        toe te passen, zowel tijdens je bachelor en master als in je toekomstige
        carrière. Maar we doen meer dan alleen bijles geven! We bieden
        tegelijkertijd ondersteuning bij het ontwikkelen van effectieve
        studievaardigheden, probleemoplossend denken en het opbouwen van
        zelfvertrouwen. Hierdoor word je niet alleen een betere student, maar
        bereid je je ook voor op een succesvolle toekomst.
      </p>
      <h2 class="heading">Onze missie</h2>
      <p class="content">
        Tijdens onze studie hebben wij gemerkt dat veel studenten in onze
        omgeving hun punten halen door vlak voor het tentamen intensief te
        studeren of een examentraining te volgen. Hoewel deze aanpak vaak
        voldoende is om net die benodigde punten te behalen, leidt het er vaak
        toe dat studenten de stof slechts oppervlakkig begrijpen. Wij geloven
        dat er een betere manier is om studeren aan te pakken, met als doel een
        diepgaand begrip van de stof en een goede basis voor de rest van je
        studie.
      </p>
      <p class="content">
        Onze missie is om ervoor te zorgen dat studenten daadwerkelijk de stof
        goed begrijpen en niet alleen gefocust zijn op het halen van hun
        tentamen. We streven ernaar om studenten te voorzien van de juiste
        ondersteuning en begeleiding gedurende het hele studieproces, zodat ze
        de de nodige kennis en vaardigheden hebben om te slagen in hun
        academische carrière en daarbuiten.
      </p>
      <p class="content">
        Wij zijn van mening dat een tentamentraining een aanvulling zou moeten
        zijn op de kennis van een student, en niet als de enige leermethode.
        Daarom bieden we bijlessen aan gedurende het hele kwartaal, zodat
        studenten stap voor stap alle stof kunnen leren en beheersen.
      </p>
      <p class="content">
        Onze visie is om een gemeenschap van studenten op te bouwen die elkaar
        ondersteunen en helpen groeien. We willen een omgeving creëren waarin
        studenten samenwerken, elkaar motiveren en hun academische doelen
        bereiken. Door het aanbieden van de juiste ondersteuning en begeleiding
        hopen we bij te dragen aan het succes en de ontwikkeling van elke
        student die deel uitmaakt van onze gemeenschap.
      </p> */}
    </Stack>
  );
};

export default Over;
