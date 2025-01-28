import React, { useState } from "react";

function Sequence({ onCalculate }) {
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (number) {
      onCalculate(Number(number));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="sequence-number">
        Ingresa el número de la serie a calcular:
      </label>
      <input
        type="number"
        id="sequence-number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        required
      />
      <button type="submit">Calcular</button>
    </form>
  );
}

export default Sequence;
