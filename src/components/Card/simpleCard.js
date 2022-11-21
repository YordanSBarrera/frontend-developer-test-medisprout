import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const SimpleCard = (props) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.primary">
          {props.email}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {props.comment}
        </Typography>
      </CardContent>
    </Card>
  );
};
