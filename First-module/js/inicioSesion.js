let inicioDeSesionRegistrado = "alura";
let contrasenhaRegistrada = "alura321";



let intentos = 3;
let i = 1;
while(i <=3){

    let inicioDeSesionIngresado = prompt("Ingrese su usuario");
    let contrasenhaIngresada = prompt("Ingrese su contraseña");

    if (inicioDeSesionRegistrado = inicioDeSesionIngresado && contrasenhaRegistrada == contrasenhaIngresada) {
        alert("Bienvenido al sistema " + inicioDeSesionIngresado);
        break;
      } else {
        alert("inicio de sesión inválido. Favor intente de nuevo");
      }
    i++;
    if (i > 3) {
        alert('Lo sentimos usted, ha fallado demasiadas veces, por favor intente de nuevo más tarde');
    }
    
}

document.write('Acceso verficado')


