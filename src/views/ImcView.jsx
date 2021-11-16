import React from "react"

const ImcView = (props) => <div className="result">
  <label>Seu IMC &eacute;:</label>
  {props.person?.imc}&nbsp;
  <span id="imc">{props.person?.imcDescription}</span>
</div>

export default ImcView