function saltarLinea() {
    
    document.write("<br>");	
    document.write("<br>");	
    document.write("<br>");	

}  

function imprimir(frase) {

    document.write(frase);
    saltarLinea();

}

var anho = 2025;

imprimir("hola amigos");

// este codigo calcula las edades de Juan, Pedro y Carlos
document.write('<h2>El año actual es: <h2/>', anho);
saltarLinea();

imprimir("Juan tiene: " + (anho-2000) + " años");

imprimir("Pedro tiene: " + (anho-1995) + " años");

anho = 2030

imprimir("Carlos tiene: " + (anho-2005) + " años");