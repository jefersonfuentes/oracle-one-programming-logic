function saltarLinea() {

    document.write("<br>");	

}  

function imprimir(frase) {

    document.write(frase);
    saltarLinea();

}

for (let i = 1; i<=3; i++){
    // Se hace la primer iteración y se ejecuta un salto de línea, y así hasta completar las 3 iteraciones.
    
    for (j=1;j<=10;j++){
        
        document.write('*');

    }
    saltarLinea(); // Sin el salto de línea se imprimen líneas y columnas juntas.
}


imprimir('Fin');
