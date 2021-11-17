import React, { useContext } from "react"
import { PersonContext } from "../contexts/PersonContextProvider"

const ImcView = () => {
  const { person } = useContext(PersonContext)

  return <div className="result">
    <label>Seu IMC &eacute;:</label>
    {person?.imc}&nbsp;
    <span id="imc">{person?.imcDescription}</span>
  </div>
}

export default ImcView