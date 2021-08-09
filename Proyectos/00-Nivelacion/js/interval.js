const saludo = () => {
    document.write("<li>Hola mundo</li>");
};
document.write("<ol>");
setInterval(saludo, 7000);
document.write("</ol>");
