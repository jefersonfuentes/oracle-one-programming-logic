let pantalla = document.querySelector('canvas');
let pincel = pantalla.getContext('2d');

pincel.fillStyle = 'blue' //propiedad
pincel.fillRect(0,0,600,500); // funcion

pincel.fillStyle = 'white' //propiedad
pincel.fillRect(0,100,600,500); // funcion

pincel.fillStyle = 'red' //propiedad
pincel.fillRect(0,200,600,500); // funcion
pincel.fillStyle = 'white' //propiedad
pincel.fillRect(0,300,600,500); // funcion

pincel.fillStyle = 'blue' //propiedad
pincel.fillRect(0,400,600,500); // funcion

pincel.fillStyle = 'white'
pincel.beginPath();
pincel.arc(150, 250, 50, 0, 2*3.14);
pincel.fill();
pincel.fillStyle = 'orange'
pincel.beginPath();
pincel.arc(150, 250, 35, 0, 2*3.14);
pincel.fill();
pincel.fillStyle = 'cyan'
pincel.beginPath();
pincel.arc(150, 250, 25, 0, 2*3.14);
pincel.fill();