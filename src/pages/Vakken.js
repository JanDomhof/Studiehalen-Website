import React, { useState, useEffect } from "react";
import {
  Stack,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  List,
  ListItem,
  Typography as MuiTypography,
  Button,
  Pagination,
} from "@mui/material";
import coursesData from "../data/courses.json";
import { useTheme, useMediaQuery } from "@mui/material";

const Vakken = () => {
  const [studyProgram, setStudyProgram] = useState("");
  const [year, setYear] = useState("");
  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Use theme and media query to detect mobile devices
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Function to update filters from URL
  const updateFiltersFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get("search_query") || "";

    setName(searchQuery);
    setCurrentPage(1); // Reset to first page when filter changes

    // Scroll to the vakken section if hash is #vakken
    if (window.location.hash === "#vakken") {
      const vakkenSection = document.getElementById("vakken");
      if (vakkenSection) {
        vakkenSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    // Update filters on component mount
    updateFiltersFromURL();

    // Listen for the custom "locationchange" event
    window.addEventListener("locationchange", updateFiltersFromURL);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("locationchange", updateFiltersFromURL);
    };
  }, []);

  // Filter courses based on the selected filters
  const filteredCourses = coursesData.filter((course) => {
    return (
      (studyProgram === "" || course.studyProgram === studyProgram) &&
      (year === "" || course.year === parseInt(year)) &&
      (name === "" || course.name.toLowerCase().includes(name.toLowerCase()))
    );
  });

  // Calculate total pages for pagination
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

  // Get courses for the current page
  const coursesToDisplay = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Function to handle tutoring request button click
  const handleRequestTutoring = (course) => {
    // Build the query parameters
    const params = new URLSearchParams(window.location.search);
    params.set("study_program", course.studyProgram);
    params.set("course_name", course.name);

    // Update the URL without reloading the page
    const newUrl =
      window.location.pathname + "?" + params.toString() + "#contact";
    window.history.pushState({ path: newUrl }, "", newUrl);

    // Dispatch a custom event to notify about the location change
    window.dispatchEvent(new Event("locationchange"));

    // Scroll to the contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      id="vakken"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="white"
    >
      <Stack
        spacing={5}
        paddingTop={5}
        paddingBottom={20}
        alignItems="center"
        width="80vw"
      >
        <Typography variant={mobile ? "h4" : "h3"}>
          Zoek hier naar je vak.
        </Typography>

        <Box sx={{ padding: 2, width: "100%" }}>
          {/* Filters */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              marginBottom: 2,
              alignItems: "center",
              flexWrap: mobile ? "wrap" : "nowrap",
            }}
          >
            {/* Study Program Filter */}
            <FormControl sx={{ width: mobile ? "100%" : 200 }}>
              <InputLabel id="study-program-label">Studie</InputLabel>
              <Select
                labelId="study-program-label"
                value={studyProgram}
                label="Studie"
                onChange={(e) => {
                  setStudyProgram(e.target.value);
                  setCurrentPage(1); // Reset to first page when filter changes
                }}
                renderValue={(selected) => {
                  if (selected === "") {
                    return <em>Alle Studies</em>;
                  }
                  return selected;
                }}
              >
                <MenuItem value="">
                  <em>Alle Studies</em>
                </MenuItem>
                <MenuItem value="Werktuig Bouwkunde">
                  Werktuig Bouwkunde
                </MenuItem>
                {/* Add more study programs as needed */}
              </Select>
            </FormControl>

            {/* Year Filter */}
            <FormControl sx={{ width: mobile ? "100%" : 200 }}>
              <InputLabel id="year-label">Jaar</InputLabel>
              <Select
                labelId="year-label"
                value={year}
                label="Jaar"
                onChange={(e) => {
                  setYear(e.target.value);
                  setCurrentPage(1); // Reset to first page when filter changes
                }}
                renderValue={(selected) => {
                  if (selected === "") {
                    return <em>Alle Jaren</em>;
                  }
                  return `Jaar ${selected}`;
                }}
              >
                <MenuItem value="">
                  <em>Alle Jaren</em>
                </MenuItem>
                <MenuItem value="1">Jaar 1</MenuItem>
                <MenuItem value="2">Jaar 2</MenuItem>
                {/* Add more years as needed */}
              </Select>
            </FormControl>

            {/* Course Name Search */}
            <TextField
              sx={{ flexGrow: 1, width: mobile ? "100%" : "auto" }}
              label="Naam van het vak"
              variant="outlined"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setCurrentPage(1); // Reset to first page when filter changes
              }}
            />
          </Box>

          {/* Column Headers */}
          <ListItem
            sx={{
              display: "flex",
              alignItems: "center",
              paddingY: 1,
              borderBottom: "1px solid #ccc",
            }}
          >
            <MuiTypography
              variant={mobile ? "body2" : "body1"}
              component="div"
              sx={{
                width: mobile ? "40%" : "35%",
                fontStyle: "italic",
                color: "grey",
                fontSize: mobile ? "0.9rem" : "inherit",
              }}
            >
              Vak
            </MuiTypography>
            <MuiTypography
              variant={mobile ? "body2" : "body1"}
              component="div"
              sx={{
                width: mobile ? "40%" : "25%",
                fontStyle: "italic",
                color: "grey",
                fontSize: mobile ? "0.9rem" : "inherit",
              }}
            >
              Studie
            </MuiTypography>
            {!mobile && (
              <MuiTypography
                variant="body1"
                component="div"
                sx={{
                  width: "20%",
                  fontStyle: "italic",
                  color: "grey",
                }}
              >
                Code
              </MuiTypography>
            )}
            <Box sx={{ width: "20%", textAlign: "right" }}>
              <MuiTypography
                variant={mobile ? "body2" : "body1"}
                component="div"
                sx={{
                  fontStyle: "italic",
                  color: "grey",
                  fontSize: mobile ? "0.9rem" : "inherit",
                }}
              >
                {mobile ? "Bijles" : "Vraag bijles aan"}
              </MuiTypography>
            </Box>
          </ListItem>

          {/* Filtered Courses List */}
          <List>
            {coursesToDisplay.map((course, index) => (
              <ListItem
                key={index}
                divider
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingY: 1,
                }}
              >
                <MuiTypography
                  variant={mobile ? "body2" : "body1"}
                  component="div"
                  sx={{
                    width: mobile ? "40%" : "35%",
                    fontSize: mobile ? "0.9rem" : "inherit",
                  }}
                >
                  {course.name}
                </MuiTypography>
                <MuiTypography
                  variant={mobile ? "body2" : "body1"}
                  component="div"
                  sx={{
                    width: mobile ? "40%" : "25%",
                    fontSize: mobile ? "0.9rem" : "inherit",
                  }}
                >
                  {course.studyProgram}
                </MuiTypography>
                {!mobile && (
                  <MuiTypography
                    variant="body2"
                    color="text.secondary"
                    sx={{ width: "20%" }}
                  >
                    {course.code}
                  </MuiTypography>
                )}
                {/* Request Tutoring Button */}
                <Box sx={{ width: "20%", textAlign: "right" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleRequestTutoring(course)}
                    size={mobile ? "small" : "medium"}
                  >
                    {mobile ? "Bijles" : "Vraag bijles aan"}
                  </Button>
                </Box>
              </ListItem>
            ))}
          </List>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <Box
              sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
            >
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                showFirstButton
                showLastButton
              />
            </Box>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default Vakken;
