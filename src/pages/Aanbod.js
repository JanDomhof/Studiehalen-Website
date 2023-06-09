import React from "react";
import { Link } from "react-router-dom";
import lesvormCursus from "../images/lesvorm-cursus.png";
import lesvormPrivé from "../images/lesvorm-prive.png";
import lesvormGroepsles from "../images/lesvorm-groepsles.png";
import { useState } from "react";
import {
  Stack,
  Divider,
  Typography,
  Box,
  List,
  ListItem,
  Button,
} from "@mui/material";
import { ReactComponent as ExclamationIconLeft } from "../images/exclamation-left.svg";
import { ReactComponent as ExclamationIconRight } from "../images/exclamation-right.svg";
import EastIcon from "@mui/icons-material/East";

const Aanbod = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const mobile = width < 768;

  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Stack
        width="80%"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={10}
      >
        <Typography
          variant={mobile ? "h4" : "h2"}
          fontWeight={"bold"}
          marginTop={5}
          marginBottom={-5}
        >
          Ons Aanbod
        </Typography>
        <Stack width={mobile ? "80%" : "40%"} spacing={2}>
          <Typography variant="body1">
            Bij Studiehalen.nl bieden wij bijles aan in verschillende vormen om
            aan de behoeften van alle studenten te voldoen. Onze ervaren
            student-docenten helpen studenten om te begrijpen wat er wordt
            verwacht op de tentamens en om hun academische doelen te bereiken.
            Hieronder vindt u meer informatie over onze drie verschillende
            bijlesvormen.
          </Typography>
          <Typography variant="body1">
            We bieden momenteel bijles aan voor alle vakken van de studie
            Werktuigbouwkunde (WO en HBO niveau). Doe je een andere studie en
            wil jij ook bijles? Stuur ons dan een bericht, dan gaan we op zoek
            naar een student-docent voor jou!
          </Typography>
        </Stack>
        <Stack>
          <Box
            backgroundColor="white"
            marginTop={mobile ? 10 : 0}
            paddingLeft={10}
            paddingRight={10}
            padding={5}
            borderRadius={5}
            boxShadow={"0 2px 8px rgba(0, 0, 0, 0.1);"}
            position={"relative"}
            zIndex={-2}
          >
            <Box position={"absolute"} left={-400} top={-200} zIndex={-1}>
              <ExclamationIconLeft width={800}></ExclamationIconLeft>
            </Box>
            <Box position={"absolute"} right={-240} top={-200} zIndex={-1}>
              <ExclamationIconRight width={800}></ExclamationIconRight>
            </Box>
            <Typography
              variant="h2"
              textAlign={"center"}
              fontSize={mobile ? 30 : 50}
            >
              De pilot periode is gestart!!
            </Typography>
            <Box
              width="100%"
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                variant="subtitle1"
                width={mobile ? "100%" : "60%"}
                marginTop={5}
              >
                Tijdens deze periode kan jij kennis maken met onze lesvormen
                tegen een aantrekkelijke prijs! Zie de prijzen per lesvorm in
                het overzicht hieronder! Mis deze kans niet!
              </Typography>
            </Box>
          </Box>
        </Stack>
        <Typography variant="h2" textAlign={"center"} fontSize={50}>
          Lesvormen
        </Typography>
        <Stack
          direction={mobile ? "column" : "row"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={5}
          backgroundColor="white"
          borderRadius={5}
          boxShadow={"0 2px 8px rgba(0, 0, 0, 0.1);"}
          padding={5}
        >
          <Stack width={mobile ? "90%" : 400} spacing={1}>
            {mobile ? (
              <Box>
                <img
                  src={lesvormPrivé}
                  alt="lesvorm"
                  class="lesvorm-img-mobile"
                />
              </Box>
            ) : (
              <></>
            )}
            <Typography variant="h3">Privé Bijles</Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Typography
                variant="subtitle1"
                style={{ textDecoration: "line-through" }}
              >
                €25
              </Typography>
              <EastIcon />
              <Typography variant="subtitle1">€17,5 P/U</Typography>
            </Stack>
            <Typography variant="body1">
              Onze privé-bijlessen zijn de perfecte optie voor studenten die
              individuele aandacht nodig hebben. We passen de bijlessen aan op
              de individuele leerstijl en behoeften van de student. Dit betekent
              dat onze docenten kunnen focussen op de specifieke onderwerpen
              waar de student het meest mee worstelt, waardoor ze hun kennis
              sneller kunnen opbouwen en meer zelfvertrouwen krijgen. Onze
              privé-bijlessen kunnen zowel online als offline worden gevolgd en
              zijn beschikbaar voor verschillende vakken.
            </Typography>
            <Typography variant="h6" fontWeight={"bold"}>
              Voordelen
            </Typography>
            <List
              sx={{
                listStyleType: "disc",
                pl: 2,
                "& .MuiListItem-root": {
                  display: "list-item",
                },
              }}
            >
              <ListItem>
                <Typography variant="body1">
                  Aangepast op jouw behoeftes
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  Beste manier om de stof echt goed te begrijpen
                </Typography>
              </ListItem>
            </List>
            <Link to="/contact" class="aanvragen">
              Contact
            </Link>
          </Stack>
          {mobile ? (
            <></>
          ) : (
            <Box width={400}>
              <img src={lesvormPrivé} alt="lesvorm" class="lesvorm-img-pc" />
            </Box>
          )}
        </Stack>
        <Stack
          direction={mobile ? "column" : "row"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={5}
          backgroundColor="white"
          borderRadius={5}
          boxShadow={"0 2px 8px rgba(0, 0, 0, 0.1);"}
          padding={5}
        >
          {mobile ? (
            <Box>
              <img
                src={lesvormGroepsles}
                alt="lesvorm"
                class="lesvorm-img-mobile"
              />
            </Box>
          ) : (
            <Box>
              <img
                src={lesvormGroepsles}
                alt="lesvorm"
                class="lesvorm-img-pc"
              />
            </Box>
          )}
          <Stack width={mobile ? "90%" : 400} spacing={1}>
            <Typography variant="h3">Groepsles</Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Typography
                variant="subtitle1"
                style={{ textDecoration: "line-through" }}
              >
                €17.50
              </Typography>
              <EastIcon />
              <Typography variant="subtitle1">€12.50 P/U</Typography>
            </Stack>
            <Typography variant="body1">
              Onze groepslessen zijn de ideale optie voor studenten die graag
              willen leren met andere studenten. Dit is niet alleen een leuke en
              interactieve manier van leren, maar het kan ook helpen om de
              kosten van bijles te verlagen. Onze groepslessen worden geleid
              door ervaren student-docenten die de groepen klein houden om
              ervoor te zorgen dat alle studenten de aandacht krijgen die ze
              nodig hebben.
            </Typography>
            <Typography variant="h6" fontWeight={"bold"}>
              Voordelen
            </Typography>
            <List
              sx={{
                listStyleType: "disc",
                pl: 2,
                "& .MuiListItem-root": {
                  display: "list-item",
                },
              }}
            >
              <ListItem>
                <Typography variant="body1">
                  Studeren met andere studenten
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">Interactief</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">Kleine groepen</Typography>
              </ListItem>
            </List>
            <Link to="/contact" class="aanvragen">
              Contact
            </Link>
          </Stack>
        </Stack>
        <Stack
          direction={mobile ? "column" : "row"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={5}
          backgroundColor="white"
          borderRadius={5}
          boxShadow={"0 2px 8px rgba(0, 0, 0, 0.1);"}
          padding={5}
        >
          <Stack width={mobile ? "90%" : 400} spacing={1}>
            {mobile ? (
              <Box>
                <img
                  src={lesvormCursus}
                  alt="lesvorm"
                  class="lesvorm-img-mobile"
                />
              </Box>
            ) : (
              <></>
            )}
            <Typography variant="h3">Cursus</Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Typography variant="subtitle1">€60-120</Typography>
            </Stack>
            <Typography variant="body1">
              Onze tentamentrainingen zijn ontworpen om studenten te helpen zich
              voor te bereiden op tentamens. Tijdens deze trainingen zullen onze
              ervaren student-docenten de belangrijkste onderwerpen en concepten
              van het vak doornemen en uitleggen hoe deze op tentamens kunnen
              worden toegepast. Onze tentamentrainingen zijn beschikbaar voor
              verschillende vakken en niveaus en zijn een geweldige manier om de
              stof snel en effectief te leren. Onze tentamentrainingen worden
              meestal gegeven in de weken voorafgaand aan het tentamen en kunnen
              zowel online als offline worden gevolgd.
            </Typography>
            <Typography variant="h6" fontWeight={"bold"}>
              Voordelen
            </Typography>
            <List
              sx={{
                listStyleType: "disc",
                pl: 2,
                "& .MuiListItem-root": {
                  display: "list-item",
                },
              }}
            >
              <ListItem>
                <Typography variant="body1">
                  Beste prijs/kwaliteit verhouding
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  Je leert precies wat je nodig hebt om het tentamen te halen
                </Typography>
              </ListItem>
            </List>
            <Link to="/contact" class="aanvragen">
              Contact
            </Link>
          </Stack>
          {mobile ? (
            <></>
          ) : (
            <Box>
              <img src={lesvormCursus} alt="lesvorm" class="lesvorm-img-pc" />
            </Box>
          )}
        </Stack>
        <Box height={10}></Box>
      </Stack>
    </Box>
  );
};

export default Aanbod;
