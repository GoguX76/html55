function fullArray() {
    const elements = []

    for (let i = 1; i <= 100; i++) {

        elements.push(i)

    }

    return elements

}

function scElement() {
    var numElegido = Number(prompt("¿Que número quieres buscar?"));
    var arrayNums = fullArray();

    if (isNaN(numElegido)) {
        console.log("Ha ingresado un dato no válido")
    } else if (arrayNums.includes(numElegido)) {
        console.log("¡Que suerte! El número " + numElegido + " está en la lista");
    } else {
        console.log("¡Que pena! No se ha encontrado ese número");
    }

    return numElegido;

}

scElement();