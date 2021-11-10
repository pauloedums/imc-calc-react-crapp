import React from "react";

import ImcView from "./views/ImcView";
import Person from "./domain/Person";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      person: {},
    };
  }

  calculate() {
    console.log(this);
    const heightElem = document.querySelector("#height");
    const weightElem = document.querySelector("#weight");

    if (!heightElem) throw Error("height can't be found.");
    if (!weightElem) throw Error("height can't be found.");

    const newPerson = new Person(
      parseFloat(heightElem.value),
      parseFloat(weightElem.value)
    );
    this.setState({person: newPerson})
  }

  render() {
    return (
      <div className="container">
        <div className="data">
          <div className="form">
            <div className="row">
              <label>Altura</label>
              <input id="height" name="height" placeholder="0.00" />
            </div>
            <div className="row">
              <label>Peso</label>
              <input id="weight" placeholder="0.00" />
            </div>
            <div className="actions">
              <button
                type="button"
                className="primary-action"
                onClick={this.calculate.bind(this)}
              >
                Calcular
              </button>
            </div>
          </div>
        </div>
        <ImcView className="result" person={this.state.person} />
      </div>
    );
  }
}
