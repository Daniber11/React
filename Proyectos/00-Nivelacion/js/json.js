// var Pelota = {
//     color: "roja",
//     tam:   3,
//     rebota: false;
//     setBotar: function(){
//         this.rebota = true
//     }
// };

// console.log(Pelota)

// const Usuario = {
//     name: "Daniel",
//     edad: 20,
//     email: "mail@mail.com"
// ;}

// document.write(Usuario.name);

// const Usuario = {
//     name: "Daniel",
//     edad: 20,
//     email: "mail@mail.com"
// };

// document.write("<p>" + Usuario.name + "</p>");
// document.write("<p>" + Usuario.edad + "</p>");
// document.write("<p>" + Usuario.email + "</p>");

// Desestructurar

const { name, edad, email } = {
    name: "Daniel",
    edad: 27,
    email: "mail@mail.com"
};

document.write("<p>" + name + "</p>");
document.write("<p>" + edad + "</p>");
document.write("<p>" + email + "</p>");