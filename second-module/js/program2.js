
function dibujarCuadrado(x, y, color){
    let pantalla = document.querySelector('canvas');
    let pincel = pantalla.getContext('2d');

    pincel.fillStyle = color; 
    pincel.fillRect(x,y,50,50); 
    pincel.strokeStyle = 'black';
    pincel.strokeRect(x,y,50,50);
}


for (x=0; x<600; x+=50) {

    dibujarCuadrado(x,0,'blue');
    dibujarCuadrado(x,50,'white');
    dibujarCuadrado(x,100,'red');
    dibujarCuadrado(x,150,'white');
    dibujarCuadrado(x,200,'blue');
}

