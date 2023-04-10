    function saltarLinea() {
    document.write("<br>");
}

function imprimir(frase) {
    document.write(frase);
    saltarLinea();
    saltarLinea();
} 

let numeroMiembros = parseInt(prompt('Ingrese la cantidad de miembros de su familia'));

let i = 1
let totalEdad = 0;
while (i <= numeroMiembros) {

    let edad = parseInt(prompt('Ingresa la edad del familiar'));''
    totalEdad+= edad;
    i++;
}

imprimir('El promedio de edad es: '+(totalEdad/numeroMiembros))
imprimir('Fin')
