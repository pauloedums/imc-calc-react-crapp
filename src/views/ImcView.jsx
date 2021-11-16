import React, { useEffect, useState } from "react";
import ImcController from "../controllers/ImcController.js";
import Person from "../domain/Person.js";

export default function ImcView(props) {
  const [controller,] = useState(new ImcController())
  const [person, setPerson] = useState(new Person(0.1, 0.1))

  useEffect(() => {
    async function fetchPerson() {
      const newPerson = await controller.calculate(props.person);
      setPerson(newPerson)
    }
    fetchPerson()
  }, [props.person, controller])

  useEffect(() => {
    console.log("person changed !!!")
  }, [person])

  return (<div className="result">
    <label>Seu IMC &eacute;:</label>
    {person.imc}&nbsp;
    <span id="imc">{person.imcDescription}</span>
  </div>)
}