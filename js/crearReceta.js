let ingredientes = [];
let cantidad = parseInt(prompt("¿Cuántos ingredientes vas a añadir?"));
let i = 1;

while(i <= cantidad) {
    let ingrediente = prompt("Informe el ingrediente " + i);
    // convierto el el del string en minúsculas para evitar diferencias entre caractéres y mejorar la validación para que no se repita el ingrediente.
    ingrediente = ingrediente.toLowerCase();
    let encontrado = false;
    // Trigger para evitar ingredientes repetidos.
    for(let j = 0; j < ingredientes.length; j++) {
        // Verifica si existe el nombre en alguna posición del array.
        if(ingredientes[j] == ingrediente) {
            encontrado = true;
            alert("repetido " + ingrediente);
            break;
        }
    }

    if(encontrado == false) {
        ingredientes.push(ingrediente);
        i++;
    }
}

console.log(ingredientes);
document.write('Los ingredientes son: ' + ingredientes);