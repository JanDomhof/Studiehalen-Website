import { Box } from "@mui/material";
import "./coursebox.css";

const CourseBox = ({ name }) => {
  return (
    <Box
      className={"course-box"}
      height={35}
      borderRadius={"25px"}
      backgroundColor={"white"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      paddingRight={2}
      paddingLeft={2}
      style={{ cursor: "pointer" }}
    >
      {name}
    </Box>
  );
};

export default CourseBox;
