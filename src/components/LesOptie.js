import { Box, Typography } from "@mui/material";
import "./lesoptie.css";

const LesOptie = ({
  text,
  setBoxPosition,
  position,
  selected,
  setSelected,
  setOtherFalse,
  setOtherFalse2,
  customWidth,
}) => {
  const clicked = (id) => {
    setBoxPosition(position);
    document.getElementById(id);
    setOtherFalse(false);
    setOtherFalse2(false);
    setSelected(true);
  };

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      height={30}
      width={customWidth ? customWidth : 120}
      style={{ cursor: "pointer" }}
      borderRadius={"10px"}
      onClick={() => clicked()}
      textAlign={"center"}
      className={`les-naam`}
    >
      <Typography
        color={selected ? "rgba(44, 195, 2, 1)" : "rgba(1, 1, 1, 0.4)"}
        variant="h6"
        textAlign={"center"}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default LesOptie;
