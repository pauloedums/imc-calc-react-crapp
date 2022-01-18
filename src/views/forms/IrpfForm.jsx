import React, { useState } from "react"
import IrpfController from "../../controllers/IrpfController"
import IrpfPerson from "../../domain/IrpfPerson"
import useInput from "../../hooks/useInput"
import usePerson from "../../hooks/usePerson"

const IrpfForm = () => {
    const [controller,] = useState(new IrpfController())
    const [totalSalary, totalSalaryProps, resetTotalSalary] = useInput(0.0)
    const [dependentsNumber, dependentsNumberProps, resetDependentsNumber] = useInput(0.0)
    const [,setPerson] = usePerson()

    const calculate = async (evt) => {
        evt.preventDefault()
        const p = new IrpfPerson(parseFloat(totalSalary), parseFloat(dependentsNumber))
        const newPerson = await controller.calculate(p)
        const irpfReduced = newPerson.toFixed(2);
        setPerson(irpfReduced)
        resetTotalSalary()
        resetDependentsNumber()
    };

    return (
        <form className="form" onSubmit={calculate}>
            <div className="row">
                <label class="tooltip">
                    Salário bruto
                    <span class="tooltiptext">Salário registrado na carteira de trabalho, remuneração que um trabalhador recebe por mês, sem considerar os descontos oficiais obrigatórios.</span>
                </label>
                
                <input id="totalSalary" placeholder="0.00" {...totalSalaryProps} type="number" step="any"  />
            </div>
            <div className="row">
                <label>Quantidade de dependentes</label>
                <input id="dependentsNumber" placeholder="0.00" {...dependentsNumberProps} type="number" step="any"  />
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

export default IrpfForm