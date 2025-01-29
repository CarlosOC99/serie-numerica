import React, { useState } from "react";
import style from "../assets/secuence.module.css"
import Sequence from "./Sequence";
import Result from "./result";

function Numbers() {
  const [result, setResult] = useState(null);

const handleCalculate = async (n) => {

  try {
    const response = await fetch('http://localhost:5000/api/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ n: Number(n) }),
    });

    if (!response.ok) {
      throw new Error('Error al calcular la serie.');
    }

    const data = await response.json();
    console.log('Respuesta del servidor:', data);
    
    if (data.result !== undefined) {
      setResult(data.result);
    } else {
      console.error('No se recibió un resultado válido para n = 2');
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    setResult('Error al calcular la serie.');
  }
};

  
  

  return (
    <div className={style.general}>
      <Sequence onCalculate={handleCalculate} />
      <Result result={result} />
    </div>
  );
}

export default Numbers;
