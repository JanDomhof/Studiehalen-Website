import { Box, Stack, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import "./lesvorm.css";

const Lesvorm = ({
  mobile,
  title,
  voordelen,
  image,
  wasPrijs,
  isPrijs,
  pu,
}) => {
  return (
    <Stack
      className={"lesvorm-card"}
      spacing={3}
      height={mobile ? "550px" : "650px"}
    >
      <Box>{image}</Box>
      <Stack paddingLeft={2}>
        <Typography variant="h5" fontWeight={"600"}>
          {title}
        </Typography>
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
        {voordelen}
      </Stack>
    </Stack>
  );
};

export default Lesvorm;
