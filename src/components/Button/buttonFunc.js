import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const ButtonMine = (props) => {
  return (
    <Link to={props.rute}>
      <Button variant="contained" color="success">
        {props.text}
      </Button>
    </Link>
  );
};
