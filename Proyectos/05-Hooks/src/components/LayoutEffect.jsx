import React from 'react'
import { useState, useLayoutEffect, useEffect } from 'react'

const LayoutEffect = () => {

    const [data, setData] = useState([])

    const [length, setLength] = useState(0)

    const newData = [
        {
            name: "Daniel",
            email: "daniel@gmail.com"
        }
    ]

    useEffect(() => {
        setTimeout(() => {},5000)
        setData(newData)
    }, [newData])

    useLayoutEffect(() => {
        const tam = data.length
        setLength(tam)
    }, [])

    return (
        <>
            <h1>useLayoutEffect</h1>
            <hr />
            <p>Valores: {length}</p>
        </>
    )
}

export default LayoutEffect
