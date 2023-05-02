import Spotify from "../components/Spotify";
import { Grid, Typography, Box } from "@mui/material";

function Credits() {
  return (
    <Box>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Credits Page
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Spotify />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Credits;
