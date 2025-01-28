import React from "react";

function Result({ result }) {
  return (
    <div>
      {result !== null ? (
        <p>El resultado de la serie es: {result}</p>
      ) : (
        <p>Introduce un número para calcular la serie.</p>
      )}
    </div>
  );
}

export default Result;
