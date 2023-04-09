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
var intentos = 3;



let i = 1;
while (i <=intentos) {
    var numeroLanzado = parseInt(prompt('Ingrese un numero entre 0-10'));

    if (numeroLanzado == numeroPensando) {
        alert('Usted adivinó correctamente en el intento '+ i + ' el numero pensando era '+ numeroPensando);
        break;
    } else {
        alert('Usted se equivocó');
    }
    i++;
}

if (numeroLanzado == numeroPensando) {
    imprimir('Usted adivinó correctamente en el intento '+ i + ' el numero pensando era '+ numeroPensando);
} else {
    imprimir('Usted se equivocó' + ' el numero pensando era '+ numeroPensando);
}

imprimir('FIN');

