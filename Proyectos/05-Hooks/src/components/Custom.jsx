import { useCounter } from "../hooks/useCounter"

const Custom = () => {

    const [counter, incrment, decrement] = useCounter(23, 5)   

    return (
        <>
            <h1>CustomHook: {counter}</h1>
            <hr />

            <button onClick = {incrment}> + 1 </button>
            <button onClick = {decrement}> - 1 </button>

        </>
    )
}

export default Custom
