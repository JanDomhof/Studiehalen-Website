import React from "react";
import lesvormCursus from "../images/lesvorm-cursus.png";
import lesvormPrivé from "../images/lesvorm-prive.png";
import lesvormGroepsles from "../images/lesvorm-groepsles.png";
import { useState } from "react";
import { Stack, Typography, Box } from "@mui/material";
import VoordeelItem from "../components/VoordeelItem";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Groups2Icon from "@mui/icons-material/Groups2";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LesOptie from "../components/LesOptie";
import LesVormDetail from "../components/LesVormDetail";
import PageTitle from "../components/PageTitle";

const Lesvormen = () => {
  const [width] = useState(window.innerWidth);
  const mobile = width < 768;

  const [lesvormBoxPosition, setLesvormBoxPosition] = useState(0);
  const [priveSelected, setPriveSelected] = useState(true);
  const [groepSelected, setGroepSelected] = useState(false);
  const [cursusSelected, setCursusSelected] = useState(false);

  const [selectedLesOptie, setSelectedLesOptie] = useState("Privé Bijles");

  const lesOptieElement = document.getElementById(selectedLesOptie);

  const lesLocation =
    lesOptieElement === null
      ? 25
      : document.getElementById(selectedLesOptie).getBoundingClientRect()[
          "left"
        ];

  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Stack
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Stack
          display={"flex"}
          justifyContent={"space-around"}
          spacing={5}
          paddingBottom={10}
          alignItems={"center"}
          direction={"column"}
          backgroundColor={"white"}
          width={"100vw"}
        >
          <PageTitle
            title={"ONS AANBOD"}
            subtitle={"Kies welke lesvorm bij jou past."}
            marginBottom={8}
          />
          {mobile ? (
            <Stack
              direction="row"
              width="95vw"
              borderBottom="1px grey solid"
              justifyContent="space-around"
              position={"relative"}
            >
              {["Privé Bijles", "Groepsles", "Cursus"].map((option, index) => (
                <Typography
                  id={option}
                  key={option}
                  width={"100px"}
                  onClick={() => {
                    if (option === "Privé Bijles") {
                      setPriveSelected(true);
                      setGroepSelected(false);
                      setCursusSelected(false);
                    }
                    if (option === "Groepsles") {
                      setPriveSelected(false);
                      setGroepSelected(true);
                      setCursusSelected(false);
                    }
                    if (option === "Cursus") {
                      setPriveSelected(false);
                      setGroepSelected(false);
                      setCursusSelected(true);
                    }
                    setSelectedLesOptie(option);
                  }}
                  sx={{
                    cursor: "pointer",
                    color:
                      selectedLesOptie === option
                        ? "rgba(44, 195, 2, 1)"
                        : "black",
                  }}
                >
                  {option}
                </Typography>
              ))}
              <Box
                bottom={-2}
                visibility={selectedLesOptie === "" ? "hidden" : "visible"}
                width={"100px"}
                height={"2px"}
                backgroundColor={"rgba(44, 195, 2, 1)"}
                borderRadius={"5px"}
                position={"absolute"}
                left={lesLocation}
                style={{
                  transform: `translateX(-3vw)`,
                  transitionDuration: "0.2s",
                }}
              />
            </Stack>
          ) : (
            <Box
              position="relative"
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                style={{
                  transform: `translate(${lesvormBoxPosition}px, 0px)`,
                  transitionDuration: "0.2s",
                }}
                id={"les-optie-box"}
                translate={"0"}
                height={30}
                width={120}
                backgroundColor={"rgba(44, 195, 2, 0.3)"}
                position={"absolute"}
                left={5}
                borderRadius={"10px"}
              />
              <Stack
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                direction={"row"}
                border={"1px solid gray"}
                borderRadius={"10px"}
                padding={0.5}
                spacing={1}
              >
                <LesOptie
                  text="Privé"
                  setBoxPosition={setLesvormBoxPosition}
                  position={0}
                  selected={priveSelected}
                  setSelected={setPriveSelected}
                  setOtherFalse={setGroepSelected}
                  setOtherFalse2={setCursusSelected}
                />
                <LesOptie
                  text="Groepsles"
                  setBoxPosition={setLesvormBoxPosition}
                  position={128}
                  selected={groepSelected}
                  setSelected={setGroepSelected}
                  setOtherFalse={setPriveSelected}
                  setOtherFalse2={setCursusSelected}
                />
                <LesOptie
                  text="Cursus"
                  setBoxPosition={setLesvormBoxPosition}
                  position={256}
                  selected={cursusSelected}
                  setSelected={setCursusSelected}
                  setOtherFalse={setPriveSelected}
                  setOtherFalse2={setGroepSelected}
                />
              </Stack>
            </Box>
          )}

          {priveSelected ? (
            <LesVormDetail
              title={"Privé"}
              isPrijs={30}
              image={lesvormPrivé}
              pu={"P/U"}
              description={`
            Onze privé-bijlessen zijn de perfecte optie voor studenten die
            individuele aandacht nodig hebben. We passen de bijlessen aan op
            de individuele leerstijl en behoeften van de student. Dit betekent
            dat onze docenten kunnen focussen op de specifieke onderwerpen
            waar de student het meest mee worstelt, waardoor ze hun kennis
            sneller kunnen opbouwen en meer zelfvertrouwen krijgen. Onze
            privé-bijlessen kunnen zowel online als offline worden gevolgd en
            zijn beschikbaar voor verschillende vakken.
          `}
              voordelen={
                <>
                  <VoordeelItem
                    icon={<DesignServicesIcon fontSize="large" color="info" />}
                    text={"Gepersonaliseerd"}
                  />
                  <VoordeelItem
                    icon={
                      <WorkspacePremiumIcon fontSize="large" color="success" />
                    }
                    text={"Beste Kwaliteit"}
                  />
                </>
              }
            />
          ) : (
            <></>
          )}
          {groepSelected ? (
            <LesVormDetail
              title={"Groepsles"}
              isPrijs={20}
              image={lesvormGroepsles}
              pu={"P/U"}
              description={`
            Onze groepslessen zijn de ideale optie voor studenten die graag
            willen leren met andere studenten. Dit is niet alleen een leuke en
            interactieve manier van leren, maar het kan ook helpen om de
            kosten van bijles te verlagen. Onze groepslessen worden geleid
            door ervaren student-docenten die de groepen klein houden om
            ervoor te zorgen dat alle studenten de aandacht krijgen die ze
            nodig hebben.
          `}
              voordelen={
                <>
                  <VoordeelItem
                    icon={<Groups2Icon fontSize="large" color="primary" />}
                    text={"Studeren Met Anderen"}
                  ></VoordeelItem>
                  <VoordeelItem
                    icon={
                      <ConnectWithoutContactIcon
                        fontSize="large"
                        color="warning"
                      />
                    }
                    text={"Interactief"}
                  ></VoordeelItem>
                  <VoordeelItem
                    icon={<Diversity1Icon fontSize="large" color="error" />}
                    text={"Kleine Groepen"}
                  ></VoordeelItem>
                </>
              }
            />
          ) : (
            <></>
          )}
          {cursusSelected ? (
            <LesVormDetail
              title={"Cursus"}
              isPrijs={"60-120"}
              image={lesvormCursus}
              pu={""}
              description={`
            Onze tentamentrainingen zijn ontworpen om studenten te helpen zich
            voor te bereiden op tentamens. Tijdens deze trainingen zullen onze
            ervaren student-docenten de belangrijkste onderwerpen en concepten
            van het vak doornemen en uitleggen hoe deze op tentamens kunnen
            worden toegepast. Onze tentamentrainingen zijn beschikbaar voor
            verschillende vakken en niveaus en zijn een geweldige manier om de
            stof snel en effectief te leren. Onze tentamentrainingen worden
            meestal gegeven in de weken voorafgaand aan het tentamen en kunnen
            zowel online als offline worden gevolgd.
          `}
              voordelen={
                <>
                  <VoordeelItem
                    icon={
                      <MonetizationOnIcon fontSize="large" color="success" />
                    }
                    text={"Beste Prijs/Kwaliteit Verhouding"}
                  ></VoordeelItem>
                  <VoordeelItem
                    icon={
                      <CrisisAlertIcon fontSize="large" color="secondary" />
                    }
                    text={"Gericht Studeren"}
                  ></VoordeelItem>
                </>
              }
            />
          ) : (
            <></>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Lesvormen;
