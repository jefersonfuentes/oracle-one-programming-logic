function saltarLinea() {
    document.write("<br>");
}

function imprimir(frase) {
    document.write(frase);
    saltarLinea();
    saltarLinea();
}  

let base = parseInt(prompt('Digite la base'));

// let i=1;
// while (i <=10) {
//     imprimir(base + ' x ' + i, ' es: ', (base * i));
//     i++;
// }

for(let i= 1; i<=10; i++) {
    imprimir(base + ' x ' + i + ' es: ' + (base * i));
}