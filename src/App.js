import React, { useState, useRef } from "react";

import ImcView from "./views/ImcView";
import Person from "./domain/Person";

export default function App() {
  const [person, setPerson] = useState(new Person(0.1, 0.1));
  const heightElem = useRef();
  const weightElem = useRef();

  const calculate = function (evt) {
    evt.preventDefault();

    const newPerson = new Person(
      parseFloat(heightElem.current.value),
      parseFloat(weightElem.current.value)
    );

    setPerson(newPerson);
  };

  return (
    <div className="container">
      <div className="data">
        <form className="form" onSubmit={calculate}>
          <div className="row">
            <label>Altura</label>
            <input id="height" ref={heightElem} placeholder="0.00" />
          </div>
          <div className="row">
            <label>Peso</label>
            <input id="weight" ref={weightElem} placeholder="0.00" />
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
