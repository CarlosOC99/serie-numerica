import React from "react";
import style from "../assets/result.module.css"

function Result({ result }) {
  return (
    <div className={style.resultado}>
      {result !== null ? (
        <p>El resultado de la serie es: <br/> {result}</p>
      ) : (
        <p>Introduce un número para calcular la serie.</p>
      )}
    </div>
  );
}

export default Result;
