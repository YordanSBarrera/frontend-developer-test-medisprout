import { useEffect, useState } from "react";

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
            return <li key={comment.id}>{comment.name}</li>;
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
