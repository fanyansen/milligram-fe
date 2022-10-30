import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Sidebar() {
  return (
    <Card
      className="custom-card sidebar-card"
      sx={{ maxWidth: 345, minHeight: 800 }}
    >
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          Sidebar
        </Typography>
        <hr />
        <Typography variant="h5" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica Lizards are a
          widespread group of squamate reptiles, with over 6,000 species,
          ranging across all continents except Antarctica Lizards are a
          widespread group of squamate reptiles, with over 6,000 species,
          ranging across all continents except Antarctica Lizards are a
          widespread group of squamate reptiles, with over 6,000 species,
          ranging across all continents except Antarctica Lizards are a
          widespread group of squamate reptiles, with over 6,000 species,
          ranging across all continents except Antarctica Lizards are a
          widespread group of squamate reptiles, with over 6,000 species,
          ranging across all continents except Antarctica Lizards are a
          widespread group of squamate reptiles, with over 6,000 species,
          ranging across all continents except Antarctica Lizards are a
          widespread group of squamate reptiles, with over 6,000 species,
          ranging across all continents except Antarctica Lizards are a
          widespread group of squamate reptiles, with over 6,000 species,
          ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
