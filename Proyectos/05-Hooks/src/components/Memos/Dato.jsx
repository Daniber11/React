import {memo} from 'react'

const Dato = ({value}) => {  // es una funcion que resibe el componente
    
    return (
        <p>
            {value}
        </p>
    )
}

export default memo(Dato)
