/* eslint-disable */
import YoutubeEmbed from "../components/YouTubeHome";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//audio
function Home() {
  return (
    <Card sx={{ minWidth: 200 , bgcolor: "black" }}>
      <CardContent>
    <YoutubeEmbed embedId="8p8rHgOCu7A" />
    </CardContent>
    </Card>
  );
}

export default Home;
