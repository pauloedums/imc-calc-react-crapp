import { useContext } from "react"
import { PersonContext } from "../contexts/PersonContextProvider"

const usePerson = () => {
    const { person, setPerson } = useContext(PersonContext)
    return [
        person,
        setPerson
    ]
}

export default usePerson