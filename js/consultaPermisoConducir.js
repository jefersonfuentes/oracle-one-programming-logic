function saltarLinea() {
    document.write("<br>");
}

function imprimir(frase) {
    document.write(frase);
    saltarLinea();
}

var edad = parseInt(prompt("¿Cuál es tu edad?"));
if (edad >= 18){
    
    var tieneLicencia = prompt("¿Tienes licencia? Responde S o N");

    if (tieneLicencia === 'S') {
        imprimir('Usted puede conducir');
    } else if (tieneLicencia === 'N') {
        imprimir('Usted no puede conducir aún');
    }else {
        imprimir('Valor digitado incorrectamente');
    }
}else {
    imprimir('Usted es menor, no puede conducir');
}