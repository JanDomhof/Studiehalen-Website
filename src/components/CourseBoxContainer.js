import { Box, Grid, ListItem, Stack, Typography } from "@mui/material";
import courseData from "../data/courses.json";
import CourseBox from "./CourseBox";
import { useState } from "react";

const CourseBoxContainer = ({ jaarSelection }) => {
  const [width] = useState(window.innerWidth);
  const mobile = width < 768;

  return (
    <Grid
      container
      width={mobile ? "100vw" : "70%"}
      spacing={1.5}
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {jaarSelection == 0
        ? courseData.data.map((x) => {
            return (
              <Grid item>
                <CourseBox name={x.name} />
              </Grid>
            );
          })
        : courseData.data
            .filter((x) => x.jaar === jaarSelection)
            .map((x) => {
              return (
                <Grid item>
                  <CourseBox name={x.name} />
                </Grid>
              );
            })}
    </Grid>
  );
};

export default CourseBoxContainer;
