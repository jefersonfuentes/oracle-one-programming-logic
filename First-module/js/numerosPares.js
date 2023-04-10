function saltarLinea() {
    document.write("<br>");    
}  

function imprimir(frase) {
    document.write(frase);
    saltarLinea();

}
// Se inicializa un contador para incrementar los números
let i = 0;

// La condición indica que el contador debe llegar a 100
while (i <= 100) {
    imprimir(i);

    // i = i + 2;
    i+=2; //Se incrementa el contador de 2 en 2 y así sucesivamente hasta que se cumpla la condición
}
imprimir('FIN');