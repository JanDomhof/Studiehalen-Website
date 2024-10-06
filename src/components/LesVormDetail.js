import { Stack, Typography, Box } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { useState } from "react";

const LesVormDetail = ({
  title,
  wasPrijs,
  isPrijs,
  description,
  voordelen,
  image,
  pu,
}) => {
  const [width] = useState(window.innerWidth);
  const mobile = width < 768;

  return (
    <Stack
      direction={mobile ? "column-reverse" : "row"}
      justifyContent={"center"}
      alignItems={mobile ? "left" : "center"}
      spacing={5}
      textAlign={"left"}
      border={mobile ? "" : "1px solid gray"}
      borderRadius={mobile ? "" : "10px"}
      padding={mobile ? 0 : 10}
    >
      <Stack
        width={mobile ? "80vw" : 400}
        spacing={1}
        paddingLeft={mobile ? 5 : 0}
      >
        <Typography variant="h3">{title}</Typography>
        <Stack direction={"column"}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={1}
            marginBottom={2}
          >
            {wasPrijs ? (
              <>
                <Typography
                  variant="subtitle1"
                  color={"rgba(1, 1, 1, 0.4)"}
                  style={{ textDecoration: "line-through" }}
                >
                  €{wasPrijs}
                </Typography>
                <EastIcon />
              </>
            ) : (
              <></>
            )}
            <Typography variant="subtitle1">
              €{isPrijs} {pu}
            </Typography>
          </Stack>
        </Stack>
        <Typography variant="body1">{description}</Typography>
        <Box height={20}></Box>
        <Typography variant="h6" fontWeight={"bold"}>
          Voordelen
        </Typography>
        {voordelen}
        <Box height={30}></Box>
        <a href="#contact" className={"contact-button scrolled"}>
          Contact
        </a>
      </Stack>
      <Box width={mobile ? "80%" : 500} paddingLeft={mobile ? 5 : 0}>
        <img src={image} alt="lesvorm" className="lesvorm-img-detail-pc" />
      </Box>
    </Stack>
  );
};

export default LesVormDetail;
