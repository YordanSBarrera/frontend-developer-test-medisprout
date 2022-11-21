import { Paper } from "@mui/material";

export const PrintDetailComment = (comment) => {
  return (
    <div className="paper">
      <Paper elevation={12}>
        <div>
          <h1>Name: {comment.name}</h1>
          <p>ID: {comment.id}</p>
          <p>Email: {comment.email}</p>
          <p>Comment: {comment.body}</p>
          <p>PostId: {comment.postId}</p>
        </div>
      </Paper>
    </div>
  );
};
