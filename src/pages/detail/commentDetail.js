import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { ButtonMine } from "../../components/Button/buttonFunc";
import { PrintDetailComment } from "../../components/printDetailComment";
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

  return (
    <div className="container">
      {id ? null : <Navigate to={"/"} />}
      <h1>Detail Comment</h1>
      {comment ? PrintDetailComment(comment) : <h1>"Error"</h1>}
      <div className="button">
        <ButtonMine text="Comments List" rute="/" />
      </div>
    </div>
  );
};
