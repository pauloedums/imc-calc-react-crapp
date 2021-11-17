import React from "react"
import usePerson from "../hooks/usePerson"

const ImcView = () => {
  const [person,] = usePerson()

  return <div className="result">
    <label>Seu IMC &eacute;:</label>
    {person?.imc}&nbsp;
    <span id="imc">{person?.imcDescription}</span>
  </div>
}

export default ImcView