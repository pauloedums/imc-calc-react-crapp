import React from "react"
import usePerson from "../hooks/usePerson"

const IrpfView = () => {
  const [person,] = usePerson();
  const personVal = person ? `R$ ${person}` : '';

  return <div className="result">
    <label>Seu cálculo do IRPF: </label>
    <span id="irpf">{personVal}</span>
  </div>
}

export default IrpfView