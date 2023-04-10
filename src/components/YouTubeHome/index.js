import React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const StyledPaper = styled(Paper)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  width: "70%", // Set the width to a smaller value
  paddingTop: "39.25%" /* 16:9 aspect ratio with reduced height */,
  margin: "auto", // Center the video horizontally
  boxSizing: "border-box",

  "& > iframe": {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
    border: "0",
    backgroundColor: "black",
  },
}));

const YoutubeEmbed = ({ embedId }) => (
  <Box sx={{ display: "flex", justifyContent: "center" }}>
    <StyledPaper elevation={3}>
      <iframe
        src={`https://www.youtube.com/embed/${embedId}?&vq=hd1440`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
      ></iframe>
    </StyledPaper>
  </Box>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
