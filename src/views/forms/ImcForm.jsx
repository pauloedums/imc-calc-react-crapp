import React, { useContext, useState } from "react"
import ImcController from "../../controllers/ImcController"
import Person from "../../domain/Person"
import useInput from "../../hooks/useInput"
import { PersonContext } from "../../contexts/PersonContextProvider"

const ImcForm = () => {
    const [controller,] = useState(new ImcController())
    const [height, heightProps, resetHeight] = useInput(0.0)
    const [weight, weightProps, resetWeight] = useInput(0.0)
    const { setPerson } = useContext(PersonContext)

    const calculate = async (evt) => {
        evt.preventDefault()
        const p = new Person(parseFloat(height), parseFloat(weight))
        const newPerson = await controller.calculate(p)
        setPerson(newPerson)
        resetHeight()
        resetWeight()
    };

    return (
        <form className="form" onSubmit={calculate}>
            <div className="row">
                <label>Altura</label>
                <input id="height" placeholder="0.00" {...heightProps} />
            </div>
            <div className="row">
                <label>Peso</label>
                <input id="weight" placeholder="0.00" {...weightProps} />
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
    )
}

export default ImcForm