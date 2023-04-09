function saltarLinea() {
    document.write("<br>");
}

function imprimir(frase) {
    document.write(frase);
    saltarLinea();
    saltarLinea();
}   

let anioMundial = 1930;
let limite = parseInt(prompt('Ingrese el año límite para calcular'));

// While loop 
while (anioMundial <= limite){

    imprimir('Hubo Mundial de la FIFA en el año ' + anioMundial);
    anioMundial+= 4;
}
imprimir('Fin')