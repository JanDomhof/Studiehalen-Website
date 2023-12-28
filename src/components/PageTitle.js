import { Box, Typography } from "@mui/material";
import { useState } from "react";

const PageTitle = ({ title, subtitle }) => {
  const [width] = useState(window.innerWidth);
  const mobile = width < 768;

  return (
    <Box textAlign={"center"} alignSelf={"center"}>
      <Typography
        variant={mobile ? "subtitle1" : "h6"}
        color={"var(--primary)"}
        marginTop={mobile ? 10 : 20}
      >
        {title}
      </Typography>
      <Typography
        variant={mobile ? "h4" : "h2"}
        color={"#333333"}
        fontWeight={600}
        marginBottom={mobile ? 10 : 25}
        maxWidth={"90vw"}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default PageTitle;
