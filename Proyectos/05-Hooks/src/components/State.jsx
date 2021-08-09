// import {useState} from 'react'

// const State = () => {

//     const [state, setState] = useState()
   
//     return (
//         <div className = "container text-center">
//             <h1>useState</h1>
//             <hr />

//             Cuenta: {state}
//         </div>
//     )
// }

// export default State
import {useState, useEffect} from 'react'

const State = () => {

    const [state, setState] = useState(0)

    const handleClick = () => {
        setState(state +1)
    }
    useEffect(() => {

    }, []) // Manjea el ciclo de vida de React
   
    return (
        <div className = "container text-center">
            <h1>useEffect</h1>
            <hr />
            Cuenta: {state}
            <button onClick = {handleClick}> + 1 </button>
        </div>
    )
}

export default State