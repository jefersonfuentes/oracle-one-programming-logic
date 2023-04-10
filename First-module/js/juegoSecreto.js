function saltarLinea() {

    document.write("<br>");	

}  

function imprimir(frase) {

    document.write(frase);
    saltarLinea();

}

let secreto = Math.round(Math.random()*10);
// Capturar el objeto input
let input = document.querySelector('input');
input.focus(); // Ubica el cursor dentro del input

function verificar(){
    if (parseInt(input.value) == secreto) {
        alert('Usted acertó')
    }else {
        alert('Usted erró')
    }

    input.value = ''; // Limpia el campo del input
    input.focus();
}
// Caputar el objeto button
let button = document.querySelector('button');
// Solo al hacer click se ejecuta la función verificar, por eso no se coloca el verificar() ya que eso haría ejecución directa.
button.onclick = verificar; 