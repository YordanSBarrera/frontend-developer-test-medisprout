import { Button, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../style/style.css";

export const CommentDetail = () => {
  const [comment, setComment] = useState();
  const { id } = useParams();

  
  useEffect(() => {
    const findComment = () => {
      setComment(
        JSON.parse(localStorage.getItem("data")).filter(
          (elem) => elem.id == id
        )[0]
      );
    };
    findComment();
  }, []);
  const PrintDetail = (comment) => {
    return (
      <div>
        <h1>Name: {comment.name}</h1>
        <p>ID: {comment.id}</p>
        <p>Email: {comment.email}</p>
        <p>Comment: {comment.body}</p>
        <p>PostId: {comment.postId}</p>
      </div>
    );
  };

  return (
    <div className="container">
      <h1>Detail Comment</h1>
      <div className="paper">
        <Paper elevation={12}>
          {console.log(comment)}
          {comment ? PrintDetail(comment) : "Error"}
        </Paper>
      </div>
      <div className="button">
        <Link to="/">
          <Button variant="contained" color="success">
            Comments List
          </Button>
        </Link>
      </div>
    </div>
  );
};
