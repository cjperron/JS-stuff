var formas = 0;
var acumuladores = 0;
var inflacion = 1.0;
var velocidad = 0;

var circulo = document.getElementById("circulo");

function accionCirculo() {
  circulo.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
titulo.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
formas++;
formasTexto.innerHTML = 'Formas ⬛: ' + formas;
};


var formasTexto = document.getElementById("formas")

document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

var titulo = document.getElementById("titulo");


var botonAcumuladores = document.getElementById("botonAcumuladores");

var cambiarColorDeFondo = document.getElementById("cambiarColorDeFondo");

function cambiarColorDeFondo() {
  document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
};


var precioAcumuladores = document.getElementById("precioAcumuladores");

//Generar progress tag debajo de los acumuladores.

var progresoAcumuladores = document.getElementById("progresoAcumuladores");


//Hacer que cuando se haga click al boton "Acumuladores" se resten las formas indicadas por el precio, y que la cantidad de acumuladores aumente en 1
var precioBaseAcumuladores = 25;
var precioAcumuladores = precioBaseAcumladores * inflacion;
function compraAcumuladores() {
    if (formas >= precioAcumuladores) {
    formas -= precioAcumuladores;
    acumuladores += 1;
    velocidad +=1;
    botonAcumuladores.innerHTML = 'Acumuladores: ' + acumuladores;
    precio.innerHTML = 'Precio: ' + precioAcumuladores + ' ⬛';
    inflacion *= 1.01
}
};
//Hacer que el valor de progress aumente a una velocidad establecida por la variable del mismo nombre.
var intervalo = setInterval(function() {
progresoAcumuladores.value += velocidad;
}, 1000);
//Cuando se la progress bar este al 100%, se agregara la misma cantidad de formas que de acumuladores.
function progresoAcumuladores() {
if (progresoAcumuladores.value == 100) {
formas += acumuladores;
formasTexto.innerHTML = 'Formas ⬛: ' + formas;
progresoAcumuladores.value = 0;
}
};
