document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
var formas = 0.00;
var acumuladores = 0;
var inflacion = 1.0;
var velocidad = 0;
var precioBaseAcumuladores = 25.00;
var precioAcumuladoresFinal = precioBaseAcumuladores * inflacion;
// var velocidadDeAnimacion = document.getElementsByClassName("progresoAcumulador").style.anidurationmation-

var circulo = document.getElementById("circulo");
var titulo = document.getElementById("titulo");
var formasTexto = document.getElementById("formas")
var botonAcumuladores = document.getElementById("botonAcumuladores");
var cambiarColorDeFondo = document.getElementById("cambiarColorDeFondo");
var progresoAcumuladores = document.getElementById("progresoAcumuladores");
var precioAcumuladores = document.getElementById("precioAcumuladores");

function accionCirculo() {
    circulo.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    titulo.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    formas++;
    formasTexto.innerHTML = 'Formas ⚫: ' + formas.toFixed(2);
};

function colorFondo() {document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
};

//Hacer que cuando se haga click al boton "Acumuladores" se resten las formas indicadas por el precio, y que la cantidad de acumuladores aumente en 1

function actualizarDatos(){
    botonAcumuladores.innerHTML = 'Acumuladores: ' + acumuladores;
    precioAcumuladores.innerHTML = 'Precio: ' + precioAcumuladoresFinal.toFixed(2) + ' ⚫';
    formasTexto.innerHTML = "Formas ⚫: "+ formas.toFixed(2);
}

function compraAcumuladores() {
    if (formas >= precioAcumuladoresFinal) {
    formas -= precioAcumuladoresFinal;
    precioAcumuladoresFinal = precioBaseAcumuladores * inflacion;
    acumuladores += 1;
    velocidad +=1;
    actualizarDatos();
    inflacion *= 1.01

}
};
const animated = document.getElementById("contenedorAcumulador1");

//Add animation event listener, with attached function.
animated.addEventListener('animationiteration', () => {
formas += acumuladores;
actualizarDatos();
});
//Hacer que el valor de progress aumente a una velocidad establecida por la variable del mismo nombre.


