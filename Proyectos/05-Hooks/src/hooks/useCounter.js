import { useState } from "react"

export const useCounter = (initialValue, range = 1) => {
    const [counter, setCounter] = useState(initialValue)

    const incrment = () => {
        setCounter(counter + range)
    }

    const decrement = () => {
        setCounter(counter - range)
    }

    return [counter, incrment, decrement]
}

