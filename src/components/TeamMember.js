import { Description, Image } from "@mui/icons-material";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { useState } from "react";

const TeamMember = ({ name, bachelor, master, src }) => {
  const [width] = useState(window.innerWidth);
  const mobile = width < 768;

  return (
    <Stack
      direction={mobile ? "row" : "column"}
      display={"flex"}
      alignItems={mobile ? "" : "center"}
      spacing={3}
    >
      <Box
        component="img"
        sx={{
          height: mobile ? 150 : 300,
          width: mobile ? 150 : 300,
        }}
        alt="profile picture"
        src={src}
        borderRadius={"50%"}
        border={"1px solid var(--secondary)"}
        boxShadow={"rgba(0, 0, 0, 0.22) 0px 19px 43px"}
      />
      <Box>
        <Typography variant={mobile ? "h5" : "h4"} marginTop={5}>
          {name}
        </Typography>
        <Typography variant="caption">MSc: {bachelor}</Typography>
      </Box>
    </Stack>
  );
};

export default TeamMember;
