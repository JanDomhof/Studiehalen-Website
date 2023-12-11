import { Stack, Typography } from "@mui/material";

const VoordeelItem = ({ icon, text }) => {
  return (
    <Stack
      direction={"row"}
      spacing={2}
      display={"flex"}
      justifyContent={"start"}
      alignItems={"center"}
    >
      {icon}
      <Typography>{text}</Typography>
    </Stack>
  );
};

export default VoordeelItem;
