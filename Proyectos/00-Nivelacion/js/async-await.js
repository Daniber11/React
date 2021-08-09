// const saludo = () => {
//     return new Promise ((resolve, reject) => {
//         resolve("Hola mundo")
//         })
// }

// const saludo = async () => {
//     return "Hola mundo"
// } 
// saludo().then((response) => console.log(response))

// convierte en respuesta y await un tiempo de espera

const peticion = async () => {
    setTimeout(() => {
        const datos = {
            id:3,
            name: "Clementine Bauch",
            username: "Samantha",
            email: "Nathan@yesenia.net"
        }
        console.log(datos)
    }, 1000)
}

peticion().then(console.log)