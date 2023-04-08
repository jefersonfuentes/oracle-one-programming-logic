function saltarLinea() {
    document.write("<br>");
}

function imprimir(frase) {
    document.write(frase);
    saltarLinea();
}   

function sorteo(n) {
    return Math.round(Math.random()*n);
}

let numeroLimite = parseInt(prompt('Digite un número límite para realizar el sorteo de lotería'));
let numeroPensado = sorteo(numeroLimite);
let numeroLanzado = parseInt(prompt('Digite un número para jugar'));

if (numeroLanzado == numeroPensado) {
    imprimir('Felicidades! Usted sacó el número ganador');
} else if  (numeroLanzado > numeroPensado) {
    imprimir('Usted digitó un número mayor al sorteado');
}
else {
    imprimir('Usted digitó un número menor al sorteado');
}