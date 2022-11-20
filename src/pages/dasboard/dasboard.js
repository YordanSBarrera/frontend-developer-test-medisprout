import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SimpleCard } from "../../components/Card/simpleCard";
import "../../style/style.css";
export const Dasboard = () => {
  const [comments, setComments] = useState();
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        localStorage.setItem("data", JSON.stringify(data));
      });
  }, []);
  const PrintlistComment = (arr) => {
    return (
      <div>
        <ul>
          {arr.map((comment) => {
            return (
              <div key={comment.id}>
                <Link to={`/comment/${comment.id}`}>
                  <SimpleCard
                    name={comment.name}
                    email={comment.email}
                    comment={comment.body}
                  />
                </Link>
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
