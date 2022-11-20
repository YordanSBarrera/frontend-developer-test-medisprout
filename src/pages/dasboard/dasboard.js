import { useEffect, useState } from "react";
import { SimpleCard } from "../../components/Card/simpleCard";
import "../../style/style.css";
export const Dasboard = () => {
  const [comments, setComments] = useState();
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);
  const PrintlistComment = (arr) => {
    return (
      <div>
        <ul>
          {arr.map((comment) => {
            return (
              <div key={comment.id}>
                <SimpleCard
                  name={comment.name}
                  email={comment.email}
                  comment={comment.body}
                />
              </div>
            );
            // <li key={comment.id}>{comment.name}</li>;
          })}
        </ul>
      </div>
    );
  };
  return (
    <div>
      <h1>Dasboard</h1>
      {comments ? PrintlistComment(comments) : "Error"}
    </div>
  );
};
