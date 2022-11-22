import { useEffect, useState } from "react";
import { PrintlistComment } from "../../components/printListComment";
import "../../style/style.css";
import { DEFAULT_URL } from "../../utils/constants";

export const Dasboard = () => {
  const [comments, setComments] = useState();
  const [error, setError] = useState([]);

  useEffect(() => {
    const UpData = async () => {
      const response = await fetch(DEFAULT_URL);
      const data = await response.json();
      localStorage.setItem("data", JSON.stringify(data));
    };
    try {
      console.log(!localStorage.getItem("data"));
      //chequeando si los datos estan cargados para evitar recargar
      if (!localStorage.getItem("data")) {
        UpData();
      }
      setComments(JSON.parse(localStorage.getItem("data")));
    } catch (error) {
      if (error instanceof TypeError) {
        console.log("Type Error");
      }
      if (error instanceof SyntaxError) {
        console.log("Syntax Error");
      }
      if (error instanceof ReferenceError) {
        console.log("Reference Error");
      }
      setError().push(error);
    }
    setComments(JSON.parse(localStorage.getItem("data")));
  }, []);

  return (
    <div>
      <h1>Comments List</h1>
      {error.length > 0
        ? "Error"
        : comments
        ? PrintlistComment(comments)
        : "Loading..."}
    </div>
  );
};
