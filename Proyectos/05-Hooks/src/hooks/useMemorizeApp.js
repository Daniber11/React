import { useCallback, useMemo, useState } from "react"


export const useMemorizeApp = () => {
    const [counter, setCounter] = useState(5)

    const [view, setView] = useState(true)
    
    const pesado = (iter) => {
        for (let k = 0; k < iter; k++) {
                       
        }
        return "Fin del Proceso"
    }

    const pesadoMemo = useMemo(() => pesado(counter), [counter])
    
    const add = useCallback(() => {
        setCounter((actual) => actual + 1)
    }, [setCounter])
    
    const hide = useCallback(
        () => {
            setView(!view)
        },
        [setView],
    )

    return [counter, pesadoMemo, add, hide]
}
