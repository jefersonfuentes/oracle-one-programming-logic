function saltarLinea() {

    document.write("<br>");	

}  

function imprimir(frase) {

    document.write(frase);
    saltarLinea();

}

function aleatorio() {
    return Math.round(Math.random()*10);
}

function sortearNumeros(cantidad) {
    let secretos = [];
    let i = 1;

    while( i<=cantidad) {
        let numeroAleatorio = aleatorio();
        console.log(numeroAleatorio)
        let encontrado = false;

        if (numeroAleatorio != 0){
            for (let posicion = 0; posicion < secretos.length; posicion++ ) {
                if (numeroAleatorio == secretos[posicion]) {
                    encontrado = true;
                    break;
                }
            }
            if (encontrado == false){
                secretos.push(numeroAleatorio);
                i++
            }
        }
    }
    
    return secretos;
}

let secretos = sortearNumeros(4); //Array

console.log(secretos)

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