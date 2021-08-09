const frutas = ["manzana", "uva", "melon"];
const citricos = ["naranja", "limon", "toronja"];

const nuevo = [...frutas, ...citricos];  // spread ...

document.write(frutas);
document.write(citricos);
document.write(nuevo);