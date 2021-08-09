// puede existrir un async sin await pero no puede existir un await sin un async

const peticion = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/3")
    const data = await response.json()

    return data
}
const data = peticion().then(console.log)
