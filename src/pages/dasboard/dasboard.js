import { useEffect, useState } from "react";
import { PrintlistComment } from "../../components/printListComment";
import "../../style/style.css";
import { DEFAULT_URL } from "../../utils/constants";

export const Dasboard = () => {
  const [comments, setComments] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(localStorage.getItem("load"));
    console.log(localStorage.getItem("load"))
    const UpData = async () => {
      console.log("Dentro del Updata");
      localStorage.setItem("load", "false");
      const response = await fetch(DEFAULT_URL);
      const data = await response.json();
      setComments(data);
      localStorage.setItem("data", JSON.stringify(data));
      localStorage.setItem("load", "true");
    };
    //chequeando si los datos estan cargados para evitar recargar
    if (localStorage.getItem("load")!=="true") {
      UpData();
      console.log("Debe Cargar");
    }
    setComments(JSON.parse(localStorage.getItem('data')));
  }, []);
  
  return (
    <div>
      <h1>Dasboard</h1>
      {console.log(localStorage.getItem("load"))}
      {loading
        ? 
         comments
        ? PrintlistComment(comments)
        : "Loading...":"Loading..."}
    </div>
  );
};
