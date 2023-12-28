import React, { useRef } from "react";
import lesvormCursus from "../images/lesvorm-cursus.png";
import lesvormPrivé from "../images/lesvorm-prive.png";
import lesvormGroepsles from "../images/lesvorm-groepsles.png";
import { useState } from "react";
import { Stack, Typography, Box } from "@mui/material";
import Lesvorm from "../components/LesVorm";
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
import CourseBoxContainer from "../components/CourseBoxContainer";
import PageTitle from "../components/PageTitle";

const Aanbod = () => {
  const [width] = useState(window.innerWidth);
  const mobile = width < 768;
  const lesvormContent = useRef(null);

  const [lesvormBoxPosition, setLesvormBoxPosition] = useState(0);
  const [priveSelected, setPriveSelected] = useState(true);
  const [groepSelected, setGroepSelected] = useState(false);
  const [cursusSelected, setCursusSelected] = useState(false);

  const [selectedJaarOptie, setSelectedJaarOptie] = useState("Eerste Jaar");
  const [selectedLesOptie, setSelectedLesOptie] = useState("Privé Bijles");

  const jaarOptieElement = document.getElementById(selectedJaarOptie);
  const lesOptieElement = document.getElementById(selectedLesOptie);

  const jaarLocation =
    jaarOptieElement === null
      ? 25
      : document.getElementById(selectedJaarOptie).getBoundingClientRect()[
          "left"
        ];

  const lesLocation =
    lesOptieElement === null
      ? 25
      : document.getElementById(selectedLesOptie).getBoundingClientRect()[
          "left"
        ];

  const scrollToSection = (elementRef, f, pos, lesSelection) => {
    setSelectedLesOptie(lesSelection);
    setPriveSelected(false);
    setGroepSelected(false);
    setCursusSelected(false);
    f(true);
    setLesvormBoxPosition(pos);
    window.scrollTo({
      top: elementRef.current.offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={0}
    >
      <Stack
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <PageTitle
          title={"ONS AANBOD"}
          subtitle={"Kies welke lesvorm bij jou past."}
        />
        <Stack
          direction={mobile ? "column" : "row"}
          width={mobile ? "90%" : "100%"}
          justifyContent={"space-around"}
          marginBottom={20}
          spacing={mobile ? "40px" : ""}
        >
          <Box
            onClick={() =>
              scrollToSection(
                lesvormContent,
                setPriveSelected,
                0,
                "Privé Bijles"
              )
            }
            display={"flex"}
            justifyContent={"center"}
          >
            <Lesvorm
              mobile={mobile}
              title="Privé les"
              wasPrijs={"30"}
              isPrijs={"25"}
              pu={"P/U"}
              voordelen={
                <>
                  <VoordeelItem
                    icon={<DesignServicesIcon fontSize="large" color="info" />}
                    text={"Gepersonaliseerd"}
                  ></VoordeelItem>
                  <VoordeelItem
                    icon={
                      <WorkspacePremiumIcon fontSize="large" color="success" />
                    }
                    text={"Beste Kwaliteit"}
                  ></VoordeelItem>
                </>
              }
              image={
                <img
                  src={lesvormPrivé}
                  alt="lesvorm"
                  className="lesvorm-img-pc"
                />
              }
            />
          </Box>
          <Box
            onClick={() =>
              scrollToSection(
                lesvormContent,
                setGroepSelected,
                128,
                "Groepsles"
              )
            }
            display={"flex"}
            justifyContent={"center"}
          >
            <Lesvorm
              mobile={mobile}
              title="Groepsles"
              wasPrijs={"25"}
              isPrijs={"17.5"}
              pu={"P/U"}
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
              image={
                <img
                  src={lesvormGroepsles}
                  alt="lesvorm"
                  className="lesvorm-img-pc"
                />
              }
            />
          </Box>
          <Box
            onClick={() =>
              scrollToSection(lesvormContent, setCursusSelected, 256, "Cursus")
            }
            display={"flex"}
            justifyContent={"center"}
          >
            <Lesvorm
              mobile={mobile}
              title="Cursus"
              isPrijs={"60-120"}
              pu={""}
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
              image={
                <img
                  src={lesvormCursus}
                  alt="lesvorm"
                  className="lesvorm-img-pc"
                />
              }
            />
          </Box>
        </Stack>

        <Stack
          display={"flex"}
          justifyContent={"space-around"}
          spacing={5}
          paddingTop={5}
          paddingBottom={20}
          alignItems={"center"}
          direction={"column"}
          backgroundColor={"white"}
          width={"100vw"}
        >
          <Typography variant="h3" ref={lesvormContent}>
            Lesvormen
          </Typography>
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
              wasPrijs={30}
              isPrijs={25}
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
              wasPrijs={25}
              isPrijs={17.5}
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
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          backgroundColor={"white"}
        >
          <Stack
            display={"flex"}
            spacing={5}
            paddingTop={5}
            paddingBottom={20}
            alignItems={"center"}
            direction={"column"}
            minHeight={400}
            width={"100vw"}
            backgroundColor={"var(--background)"}
            borderBottom={"1px black solid"}
          >
            <Typography variant="h3">Vakken</Typography>
            {mobile ? (
              <>
                <Stack
                  direction="row"
                  width="95vw"
                  borderBottom="1px grey solid"
                  justifyContent="space-around"
                  position={"relative"}
                >
                  {["Eerste Jaar", "Tweede Jaar", "Derde Jaar"].map(
                    (option, index) => (
                      <Typography
                        id={option}
                        key={option}
                        width={"100px"}
                        onClick={() => {
                          setSelectedJaarOptie(option);
                        }}
                        sx={{
                          cursor: "pointer",
                          color:
                            selectedJaarOptie === option
                              ? "rgba(49,146,250,1)"
                              : "black",
                        }}
                      >
                        {option}
                      </Typography>
                    )
                  )}
                  <Box
                    bottom={-2}
                    visibility={selectedJaarOptie === "" ? "hidden" : "visible"}
                    width={"100px"}
                    height={"2px"}
                    backgroundColor={"rgba(49, 146, 250, 1)"}
                    borderRadius={"5px"}
                    position={"absolute"}
                    left={jaarLocation}
                    style={{
                      transform: `translateX(-3vw)`,
                      transitionDuration: "0.2s",
                    }}
                  />
                </Stack>
                <CourseBoxContainer jaarSelection={selectedJaarOptie} />
              </>
            ) : (
              <>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Stack
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    direction={"row"}
                    border={"1px solid gray"}
                    borderRadius={"10px"}
                    padding={0.5}
                  >
                    {["Eerste Jaar", "Tweede Jaar", "Derde Jaar"].map(
                      (option, index) => (
                        <Typography
                          id={option}
                          key={option}
                          variant={"h6"}
                          width={200}
                          onClick={() => {
                            setSelectedJaarOptie(option);
                          }}
                          sx={{
                            cursor: "pointer",
                            color:
                              selectedJaarOptie === option
                                ? "rgba(49,146,250,1)"
                                : "rgba(1, 1, 1, 0.4)",
                          }}
                        >
                          {option}
                        </Typography>
                      )
                    )}
                  </Stack>
                  <Box
                    style={{
                      transitionDuration: "0.2s",
                      pointerEvents: "none",
                    }}
                    height={30}
                    width={200}
                    backgroundColor={"rgba(49,146,250,0.3)"}
                    position={"absolute"}
                    borderRadius={"10px"}
                    left={jaarLocation}
                  />
                </Box>
                <CourseBoxContainer jaarSelection={selectedJaarOptie} />
              </>
            )}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Aanbod;
