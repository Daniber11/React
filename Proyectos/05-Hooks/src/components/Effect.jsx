import { useEffect, useState } from "react"

const Effect = () => {

    const [state, setState] = useState(0)

    const evento = (e) => {

    }

    useEffect(() => {
        if (state === "123"){
            window.addEventListener("mousemove", evento)
        }
        
        return () => {
            window.removeEventListener("mousemove", evento)
        }
    }, [state])

    const handleSubmit = (e) => {
        e.preventDefault()        
    }    
        console.log(setState)
    return (
        <>
            <h1>UseEffect</h1>
            <hr />

            <form onSubmit ={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Search</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />                 
                </div>                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Effect
