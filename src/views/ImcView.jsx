import React from "react";
import ImcController from "../controllers/ImcController.js";

export default class ImcView extends React.Component {
  constructor() {
    super();
    this.state = { person: {} };
    this.controller = new ImcController();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.props.person.height !== prevProps.person.height
      || this.props.person.weight !== prevProps.person.weight) {
        const newPerson = await this.controller.calculate(this.props.person);
        this.setState({person: newPerson})
      }
  }

  render() {
    return (<div className="result">
      <label>Seu IMC &eacute;:</label>
      {this.state.person.imc}&nbsp;
      <span id="imc">{this.state.person.imcDescription}</span>
    </div>)
  }
}