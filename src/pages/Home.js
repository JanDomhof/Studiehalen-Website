import React, { useState } from "react";
import { Box, IconButton, InputBase, Paper, Stack } from "@mui/material";
import PageTitle from "../components/PageTitle";
import SearchIcon from "@mui/icons-material/Search";

const Home = () => {
  const [width] = useState(window.innerWidth);
  const mobile = width < 768;

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // Build the query parameters
    const params = new URLSearchParams(window.location.search);
    params.set("search_query", searchQuery);

    // Update the URL without reloading the page
    const newUrl =
      window.location.pathname + "?" + params.toString() + "#vakken";
    window.history.pushState({ path: newUrl }, "", newUrl);

    // Dispatch a custom event to notify about the location change
    window.dispatchEvent(new Event("locationchange"));

    // Scroll to the vakken section
    const vakkenSection = document.getElementById("vakken");
    if (vakkenSection) {
      vakkenSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Stack
      textAlign={"center"}
      overflow={"hidden"}
      display={"flex"}
      alignItems={"center"}
    >
      <PageTitle
        title={"studiehalen.nl"}
        subtitle={"Bijles om het meeste uit je studie te halen."}
      />
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        width={mobile ? "80%" : "60%"}
        marginBottom={20}
      >
        <Paper
          component="form"
          onSubmit={handleSearchSubmit}
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            borderRadius: "25px",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Zoek een vak voor bijles..."
            inputProps={{ "aria-label": "search vakken" }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
    </Stack>
  );
};

export default Home;
