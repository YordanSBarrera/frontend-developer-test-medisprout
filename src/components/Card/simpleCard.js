import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const SimpleCard=(props)=>{
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.name}
        </Typography>
        <Typography variant="h5" component="div">
          {props.email}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.comment}
        </Typography>
      </CardContent>
    </Card>
  );
}
