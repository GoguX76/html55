var edad = Number(prompt("Ingrese su edad: "));

function validarEdad(edad){
    while (edad <= 0) {
        alert("Ingrese una edad válida");
        edad = Number(prompt("Ingrese su edad: "));
    }
    
    if (edad < 18) {
        alert("Usted es menor de edad")
        document.body.innerHTML += "<p>No puede acceder a la página porque es menor de edad</p>";
        document.body.innerHTML += '<img src="../images/memeantiguo.jpg" alt="Imagen toda poderosa" width=300>';
    } else if (edad >= 18 && edad < 65) {
        alert("Usted es una persona adulta")
        document.body.innerHTML += "<p>Bienvenido a la página secreta del gobierno boliviano</p>";
        document.body.innerHTML += '<img src="../images/meme.jpg" alt="Imagen toda poderosa" width=300>';
    } else if (edad >= 65 && edad < 85) {
        alert("Usted es un adulto mayor")
        document.body.innerHTML += "<p>Bienvenido a la página secreta del gobierno boliviano</p>";
        document.body.innerHTML += '<img src="../images/meme.jpg" alt="Imagen toda poderosa width=300">';
    } else {
        alert("Usted es de años dorados")
        document.body.innerHTML += "<p>Sea bienvenido al cielo buen señor/a</p>";
        document.body.innerHTML += '<img src="../images/quebendicion.jpg" alt="Imagen del cielo" width=300>';
    }

    return edad;
}

edad = validarEdad(edad);
document.body.innerHTML += "<p>Edad que ingreso: " + edad + "</p>";