import { Grid } from "@mui/material";
import courseData from "../data/courses.json";
import CourseBox from "./CourseBox";
import { useState } from "react";

const CourseBoxContainer = ({ jaarSelection }) => {
  const [width] = useState(window.innerWidth);
  const mobile = width < 768;

  const jaar =
    jaarSelection === "Eerste Jaar"
      ? 1
      : jaarSelection === "Tweede Jaar"
      ? 2
      : jaarSelection === "Derde Jaar"
      ? 3
      : 0;

  return (
    <Grid
      container
      width={mobile ? "100vw" : "70%"}
      spacing={1.5}
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {jaar === 0
        ? courseData.data.map((x, index) => {
            return (
              <Grid item key={index}>
                <CourseBox name={x.name} />
              </Grid>
            );
          })
        : courseData.data
            .filter((x) => x.jaar === jaar)
            .map((x, index) => {
              return (
                <Grid item key={index}>
                  <CourseBox name={x.name} />
                </Grid>
              );
            })}
    </Grid>
  );
};

export default CourseBoxContainer;
