/* eslint-disable */
import YoutubeEmbed from "../components/YouTubeEmbed";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { BorderBottom } from "@mui/icons-material";

//audio
function Home() {
  return (
    <Card sx={{ minWidth: 200, bgcolor: "black" }}>
      <CardContent
        sx={{ textAlign: "center", borderTop: "1px solid rgba(0,20,50,0.9)" }}
      >
        <Typography
          variant="h3"
          style={{
            color: "white",
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          Henry James
        </Typography>
        <Typography gutterBottom variant="body1" component="div"></Typography>
        <Typography variant="body2" color="white" sx={{ marginBottom: "10px" }}>
          Freelance Musician/Composer/Educator
        </Typography>
        <YoutubeEmbed embedId="8p8rHgOCu7A" />
      </CardContent>
    </Card>
  );
}

export default Home;
