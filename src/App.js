import React, { useState } from "react";

import ImcController from "./controllers/ImcController"
import ImcView from "./views/ImcView"
import Person from "./domain/Person"

export default function App() {
  const [controller,] = useState(new ImcController())
  const [person, setPerson] = useState(null)
  const [height, setHeight] = useState(0.0)
  const [weight, setWeight] = useState(0.0)

  const calculate = async (evt) => {
    evt.preventDefault()
    const p = new Person(parseFloat(height),parseFloat(weight))
    const newPerson = await controller.calculate(p)
    setPerson(newPerson)
  };

  return (
    <div className="container">
      <div className="data">
        <form className="form" onSubmit={calculate}>
          <div className="row">
            <label>Altura</label>
            <input id="height" 
              value={height}
              onChange={e => setHeight(e.target.value)}
              placeholder="0.00" />
          </div>
          <div className="row">
            <label>Peso</label>
            <input id="weight" 
              value={weight} 
              onChange={e => setWeight(e.target.value)}
              placeholder="0.00" />
          </div>
          <div className="actions">
            <button
              type="submit"
              className="primary-action"
            >
              Calcular
            </button>
          </div>
        </form>
      </div>
      <ImcView className="result" person={person} />
    </div>
  );
}
