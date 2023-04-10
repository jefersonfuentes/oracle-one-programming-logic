function saltarLinea() {

    document.write("<br>");	

}  

function imprimir(frase) {

    document.write(frase);
    saltarLinea();

}

let secretos = [3, 5, 7, 9]; //Array

// Capturar el objeto input
let input = document.querySelector('input');
input.focus(); // Ubica el cursor dentro del input

function verificar(){
    
    let encontrado = false;
    // El lenght permite evaluar la condición según el tamaño del arreglo.
    for (let posicion = 0; posicion < secretos.length; posicion++){

        if (parseInt(input.value) == secretos[posicion]) {

            alert('Usted acertó')
            encontrado = true; // Se cambia el estado para evitar la alerta de error.
            break;
        }
    }

    if(encontrado == false) {
        alert('Usted erró');
    }

    input.value = ''; // Limpia el campo del input
    input.focus();
        
}
// Caputar el objeto button
let button = document.querySelector('button');
// Solo al hacer click se ejecuta la función verificar, por eso no se coloca el verificar() ya que eso haría ejecución directa.
button.onclick = verificar; 