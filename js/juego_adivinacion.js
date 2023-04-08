function saltarLinea() {

    document.write("<br>");	
    document.write("<br>");	
    document.write("<br>");	

}  

function imprimir(frase) {

    document.write(frase);
    saltarLinea();

}

var numeroPensando = Math.round(Math.random() * 10);
var numeroLanzado = parseInt(prompt('Ingrese un numero entre 0-10'));

if (numeroLanzado == numeroPensando) {
    imprimir('Usted adivinó correctamente');
} else {
    imprimir('Usted se equivocó, el número pensando era: ' + numeroPensando);
}