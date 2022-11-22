import { Paper } from "@mui/material";
import "../style/style.css";

export const PrintDetailComment = (comment) => {
  return (
    <div className="paper">
      <Paper elevation={12}>
        <div>
          <h1 className="nameStyle">{comment.name}</h1>
          <h3 className="emailStyle">
            <span>e-mail:</span>
            {comment.email}
          </h3>
          <h2>
            <span>Comment:</span> {comment.body}
          </h2>
          <div className="row">
            <div className="item">
              <p>
                <span>PostId:</span> {comment.postId}
              </p>
            </div>
            <div className="item">
              <p>
                <span>ID:</span>
                {comment.id}
              </p>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};
