import { createContext, useState } from "react"

export const PersonContext = createContext()

const PersonContextProvider = ({children}) => {
    const [person, setPerson] = useState(null)
    const props = { person, setPerson }

    return <PersonContext.Provider value={props}>
        {children}
    </PersonContext.Provider>
}

export default PersonContextProvider