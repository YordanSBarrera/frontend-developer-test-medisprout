import { Link } from "react-router-dom";
import { subString } from "../utils/objects";
import { SimpleCard } from "./Card/simpleCard";

export const PrintlistComment = (commentsArray) => {
  return (
    <div>
      <ul>
        {commentsArray.map((comment) => {
          return (
            <div key={comment.id}>
              <Link to={`/comment/${comment.id}`}>
                <SimpleCard
                  name={subString(comment.name,20)}
                  email={comment.email}
                  comment={subString(comment.body,30)}
                />
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
