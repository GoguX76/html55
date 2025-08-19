function llenarArray() {
    const numeros = [1];
    for (let i = 0; i < 10; i++) {
        numeros.push(numeros[i] * 2);
    }

    return numeros;
}

function diasSemana() {
    const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    var dia = Number(prompt("Ingrese el número de un día de la semana"));

    if (dia >= 1 && dia <= 7) {
        console.log("El día es: " + dias[dia - 1]);
    } else {
        console.log("Ingrese un número válido");
    }

    return dias;
}

console.log(llenarArray());
console.log(Math.max(...llenarArray()))
diasSemana()