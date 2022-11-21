import { Paper } from "@mui/material";
import '../style/style.css'

export const PrintDetailComment = (comment) => {
  return (
    <div className="paper">
      <Paper elevation={12}>
        <div>
          <h1>{comment.name}</h1>         
          <h3><b>Email: {comment.email}</b></h3>
          <h2>Comment: {comment.body}</h2>
          <p>PostId: {comment.postId}</p> <p>ID: {comment.id}</p>
        </div>
      </Paper>
    </div>
  );
};
