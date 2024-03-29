/* eslint-disable */
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function About() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: 400,
          marginBottom: "100px",
          marginTop: "50px",
          border: "1px solid rgba(0,20,50,0.9)",
        }}
      >
        <CardMedia
          sx={{ height: 400 }}
          image={process.env.PUBLIC_URL + "/images/oldheadshot.jpg"}
          title="Henry Green"
        />
        <CardContent
          sx={{ textAlign: "center", borderTop: "1px solid rgba(0,20,50,0.9)" }}
        >
          <Typography gutterBottom variant="h5" component="div">
            About Henry
          </Typography>
          <Typography gutterBottom variant="body1" component="div"></Typography>
          <Typography variant="body2" color="text.secondary">
            An experienced professional musician, composer and producer, Henry
            has worked with artists and songwriters including James Woodrow,
            Mike Stock (and related artists), Dylan Holloway, Db Clifford, Lisa
            Canny, Alex Phillips, Harry Marshall, Joe Slater, and many more.
            <br />
            <br />
            Within education, Henry has studied under Paul Westwod and holds a
            Masters in Contemporary Music Performance at the ICMP. Henry saw
            this Masters qualification as a chance to understand and present
            ideas within modern harmony, his final dissertation entitled 'Bebop:
            An Analysis of the Context Surrounding and some of the key Content
            Within the Innovations of Charlie Parker, Dizzy Gillespie and the
            Birth of Modern Jazz'.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default About;
