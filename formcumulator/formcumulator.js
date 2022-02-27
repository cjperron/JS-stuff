document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
let formas = 0.00;
let acumuladores = 0;
let spawners = 0;
let inflacion = 1.0;
let velocidad = 0;
let precioBaseAcumuladores = 25.00;
let precioAcumuladoresFinal = precioBaseAcumuladores * inflacion;
let precioBaseSpawners = 100.00;
let precioSpawnersFinal = precioBaseSpawners * inflacion;
// let //velocidadDeAnimacion = document.getElementsByClassName("progresoAcumulador").style.anidurationmation-

let circulo = document.getElementById("circulo");
let titulo = document.getElementById("titulo");
let formasTexto = document.getElementById("formas")
let divAcumuladores = document.getElementById("progresoAcumulador");
let divSpawners = document.getElementById("progresoSpawner");
let cambiarColorDeFondo = document.getElementById("cambiarColorDeFondo");
let progresoAcumuladores = document.getElementById("progresoAcumuladores");
let precioAcumuladores = document.getElementById("precioAcumuladores");
let precioSpawners = document.getElementById("precioSpawners");

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
    divAcumuladores.innerHTML = acumuladores;
    precioAcumuladores.innerHTML = 'Precio: ' + precioAcumuladoresFinal.toFixed(2) + ' ⚫';
    formasTexto.innerHTML = "Formas ⚫: "+ formas.toFixed(2);
    precioSpawners.innerHTML = "Precio: " + precioSpawnersFinal.toFixed(2) + " ⚫";
    divSpawners.innerHTML = spawners;
}

function compraAcumuladores() {
    if (formas >= precioAcumuladoresFinal) {
    formas -= precioAcumuladoresFinal;
    precioAcumuladoresFinal = precioBaseAcumuladores * inflacion;
    acumuladores += 1;
    //velocidad +=1;
    actualizarDatos();
    inflacion *= 1.01

}

};
function compraSpawners(){
    if (formas >= precioSpawnersFinal) {
        formas -= precioSpawnersFinal;
        precioSpawnersFinal = precioBaseSpawners * inflacion;
        spawners += 1;
        //velocidad +=1;
        actualizarDatos();
        inflacion *= 1.01
}
}
//Add animation event listener, with attached function.
//Esto puede ser optimizado por una sola funcion, aunque se necesita mas laburo...
const animated = document.getElementById("contenedorAcumulador1");
animated.addEventListener('animationiteration', () => {
formas += acumuladores;
actualizarDatos();
});

const animated2 = document.getElementById("contenedorProgreso2");
animated2.addEventListener('animationiteration', () => {
acumuladores += spawners;
actualizarDatos();
});

