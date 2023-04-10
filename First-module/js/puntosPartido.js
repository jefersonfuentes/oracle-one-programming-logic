function saltarLinea() {
        
    document.write("<br>");	
    document.write("<br>");	
    document.write("<br>");	

}  

function imprimir(frase) {

    document.write(frase);
    saltarLinea();
    
}

// La funcion parse permite cambiar el tipo de dato, en este caso parseInt cambia el valor de solitud por un entero.
let victorias = parseInt(prompt('Ingrese la cantidad de victorias'));
let empates = parseInt(prompt('Ingrese la cantidad de empates'));


puntosTotal = (victorias * 3) + empates;
puntosPasados = parseInt(prompt('Digite la cantidad de puntos del año pasado'));
imprimir('El total de puntos del equipo es: ' + puntosTotal);3

if (puntosTotal > puntosPasados){

    imprimir('El equipo está mejor que el año pasado');
}
else if (puntosTotal < puntosPasados) {

    imprimir('El equipo está peor que el año pasado');
}else if (puntosTotal == puntosPasados){

    imprimir('El equipo está igual que el año pasado');

} else {
    imprimir('El valor digitado es incorrecto')
}