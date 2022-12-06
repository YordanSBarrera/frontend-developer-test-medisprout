import { Navigate, useParams } from "react-router-dom";
import { ButtonMine } from "../../components/Button/buttonFunc";
import { PrintDetailComment } from "../../components/printDetailComment";
import "../../style/style.css";

export const CommentDetail = () => {
  const { id } = useParams();
  const data = localStorage.getItem("data");
  console.log(data);
  function printData(){
    const comment=JSON.parse(data).filter((e)=>e.id==id)[0];
   // console.log(comment)
    return PrintDetailComment(comment);
  }
  return (
    <div className="container">
      {id ? null : <Navigate to={"/"} />}
      {data == null ? (
        <Navigate to={"/"} />
      ) : (
        <div>
          <h1>Detail Comment</h1>
          {printData()}
          <div className="button">
            <ButtonMine text="Comments List" rute="/" />
          </div>
        </div>
      )}
    </div>
  );
};
