import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

const IconWithText = ({ color, icon, title, text }) => {
  const [width] = useState(window.innerWidth);
  const mobile = width < 768;

  return (
    <Stack
      direction={mobile ? "row" : "column"}
      marginTop={10}
      maxWidth={mobile ? "95vw" : "20vw"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={4}
    >
      <Box
        component="img"
        sx={{
          height: mobile ? 85 : 150,
          width: mobile ? 85 : 150,
        }}
        alt="icon"
        src={icon}
      />
      <Box maxWidth={"70vw"}>
        <Typography variant="h6" color={color} marginTop={mobile ? 0 : 5}>
          {title}
        </Typography>
        <Typography variant="body2">{text}</Typography>
      </Box>
    </Stack>
  );
};

export default IconWithText;
