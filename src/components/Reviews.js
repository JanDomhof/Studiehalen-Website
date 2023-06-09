import React, { useEffect, useState } from "react";
import reviewsData from "../reviews.json";
import Review from "./Review";
import { Box, Button, Stack, Typography } from "@mui/material";
import { ReactComponent as Stars } from "../images/stars.svg";
import { ReactComponent as StarsMobile } from "../images/stars-mobile.svg";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

const Reviews = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [stopIndex, setStopIndex] = useState(3);
  const [width, setWidth] = useState(window.innerWidth);
  const mobile = width < 768;
  const reviewsPerPage = 3;
  const totalReviews = reviewsData.length;

  const currentReviews = reviewsData.slice(startIndex, stopIndex);

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      marginTop={20}
      marginBottom={10}
    >
      <Stack
        direction={"column"}
        justifyContent={"center"}
        spacing={5}
        backgroundColor={"white"}
        borderRadius={5}
        boxShadow={"0 2px 8px rgba(0, 0, 0, 0.1);"}
        padding={5}
        width={"80%"}
        position={"relative"}
        textAlign={"center"}
      >
        <Box
          position={"absolute"}
          top={mobile ? -120 : -80}
          left={mobile ? 10 : -100}
        >
          {mobile ? <StarsMobile width={400} /> : <Stars width={500} />}
        </Box>
        <Typography variant="h2" fontWeight={600}>
          Reviews
        </Typography>
        <Stack
          direction={mobile ? "column" : "row"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {mobile ? (
            <Stack spacing={3}>
              <Stack
                direction={"column"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                {currentReviews.map((review, index) => (
                  <Review review={review} index={index} />
                ))}
              </Stack>
              <Button
                variant="outlined"
                onClick={() => {
                  if (stopIndex + reviewsPerPage > totalReviews) {
                    setStopIndex(totalReviews);
                    return;
                  }
                  setStopIndex(stopIndex + reviewsPerPage);
                }}
              >
                Meer
              </Button>
            </Stack>
          ) : (
            <>
              <Button
                variant="outlined"
                onClick={() => {
                  if (startIndex - reviewsPerPage < 0) {
                    setStartIndex(0);
                    setStopIndex(reviewsPerPage);
                    return;
                  }
                  setStartIndex(startIndex - reviewsPerPage);
                  setStopIndex(stopIndex - reviewsPerPage);
                }}
              >
                <WestIcon />
              </Button>
              <Stack
                direction={"row"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                {currentReviews.map((review, index) => (
                  <Review review={review} index={index} />
                ))}
              </Stack>
              <Button
                variant="outlined"
                onClick={() => {
                  if (stopIndex + reviewsPerPage > totalReviews) {
                    setStartIndex(totalReviews - reviewsPerPage);
                    setStopIndex(totalReviews);
                    return;
                  }
                  setStartIndex(startIndex + reviewsPerPage);
                  setStopIndex(stopIndex + reviewsPerPage);
                }}
              >
                <EastIcon cursor={"pointer"} />
              </Button>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Reviews;
