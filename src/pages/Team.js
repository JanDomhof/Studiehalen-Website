import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import { Box, Stack } from "@mui/material";
import TeamMember from "../components/TeamMember";
import Olivier from "../images/LinkedIn-Olivier.jpeg";
import Dries from "../images/LinkedIn-Dries.jpeg";
import Jan from "../images/LinkedIn-Jan.jpeg";

const Over = () => {
  const [width] = useState(window.innerWidth);
  const mobile = width < 768;

  return (
    <Stack alignItems={mobile ? "flex-start" : "center"} overflow={"hidden"}>
      <PageTitle
        title={"OVER ONS"}
        subtitle={"Ontmoet het team."}
        marginBottom={10}
      />
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
            bachelor={"MSc: Biomechanical Engineering"}
            src={Olivier}
          />
          <TeamMember
            name={"Dries Boogaard"}
            bachelor={"MSc: Energy Flow and Process Technology"}
            src={Dries}
          />
          <TeamMember
            name={"Jan Domhof"}
            bachelor={"MSc: Econometrics"}
            src={Jan}
          />
        </Stack>
      </Box>
    </Stack>
  );
};

export default Over;
