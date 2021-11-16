import { useState } from "react"

const useInput = (initialValue) => {
    const [val, setVal] = useState(initialValue)

    return [
        val,
        { value: val, onChange: e => setVal(e.target.value)},
        () => setVal(initialValue)
    ]
}

export default useInput