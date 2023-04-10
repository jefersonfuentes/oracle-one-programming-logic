function saltarLinea() {
    
    document.write("<br>");	
    document.write("<br>");	
    document.write("<br>");	

}  

function imprimir(frase) {

    document.write(frase);
    saltarLinea();

}

function calcularIMC (peso, altura, nombre) {
    return (peso / (altura * altura));
}

let nombre = prompt('digite su nombre')
let pesoInformado = prompt(nombre + ' digite su peso');
let alturaInformada = prompt(nombre + ' Digite su altura');

let imcCalculado = calcularIMC(pesoInformado, alturaInformada);

imprimir(nombre + ' el imc calculado es: ' + imcCalculado);

if( imcCalculado < 18.5) {
    imprimir('imc abajo de lo recomendado');
}

if( imcCalculado >= 18.5 && imcCalculado < 25) {
    imprimir('imc es normal');
}

if( imcCalculado >= 25 && imcCalculado < 30) {
    imprimir('imc considerado como preobsesidad');
}

if( imcCalculado >= 30) {
    imprimir('imc considerado como obsedidad');
}