import { Box, Typography } from "@mui/material";
import { useState } from "react";

const PageTitle = ({ title, subtitle }) => {
  const [width] = useState(window.innerWidth);
  const mobile = width < 768;

  return (
    <Box textAlign={"center"}>
      <Typography
        variant="h6"
        color={"var(--primary)"}
        paddingTop={mobile ? 10 : 20}
      >
        {title}
      </Typography>
      <Typography
        variant="h2"
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
