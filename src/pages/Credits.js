import Spotify from "../components/Spotify";
import { Grid, Typography, Box } from "@mui/material";

function Credits() {
  return (
    <Box>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        borderTop="2px"
        sx={{ marginTop: "20px" }}
      >
        <Spotify />
      </Grid>
    </Box>
  );
}

export default Credits;
