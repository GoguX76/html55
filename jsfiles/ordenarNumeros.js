function listaNumeros() {
    const arrNums = [];
    
    while (arrNums.length < 30) {
        const nums = Math.floor(Math.random() * 30) + 1;
        if (!arrNums.includes(nums)) {
            arrNums.push(nums);
        }
    }

    return arrNums;

}

console.log("Lista de números desordenada: " + listaNumeros());

function numerosOrdenados() {
    var arrNumsOrdenada = listaNumeros().sort((a,b) => a - b);

    return arrNumsOrdenada;

}

console.log("Lista de números ordenadas: " + numerosOrdenados());