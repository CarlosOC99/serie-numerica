import React, { useState } from "react";
import style from "../assets/form.module.css"

function Sequence({ onCalculate }) {
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (number) {
      onCalculate(Number(number));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.formulario}>
      <label htmlFor="sequence-number">
        Ingresa el número de la serie a calcular:
      </label>
      <input
        type="number"
        id="sequence-number"
        value={number}
        className={style.datos}
        onChange={(e) => setNumber(e.target.value)}
        required
      />
      <button type="submit">Calcular</button>
    </form>
  );
}

export default Sequence;
