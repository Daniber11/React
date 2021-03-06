import Dato from './Dato'
import Btn from './Btn'
import { useMemorizeApp } from '../../hooks/useMemorizeApp'

const Memorize = () => {

    const [counter, pesadoMemo, add, hide] = useMemorizeApp()
        
    return (
        <>
            <h1>Memorizes: <Dato value = {counter} /></h1>
            <hr />

            <pre>{pesadoMemo}</pre>            

            <Btn add = {add}/>
            <button onClick = {hide}> Ver/Quitar </button>
            
        </>
    )
}

export default Memorize
