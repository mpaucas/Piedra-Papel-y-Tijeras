
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('marcador');
const result_div = document.querySelector('.result p');
const resultRazon_div = document.querySelector('#accion');
const piedra_div = document.getElementById('r');
const papel_div = document.getElementById('p');
const tijera_div = document.getElementById('t');

function IniciarPage(){
    const splash = document.querySelector('.splash');

    document.addEventListener('DOMContentLoaded', (e)=>{
        setTimeout(()=>{
            splash.classList.add('display-none');
        }, 3000);
    })
}

function main() {
    piedra_div.addEventListener('click', () => game("r"));
    papel_div.addEventListener('click', () => game("p"));
    tijera_div.addEventListener('click', () => game("t"));
}

function game(opcion) {
    const movidaPC = movidaComp();
    const movidaUser = opcion;
    switch (movidaUser+movidaPC) {
        case 'rt':
        case 'pr':
        case 'tp':
            ganar(movidaUser,movidaPC);
            break;
        case 'rp':
        case 'pt':
        case 'tr':
            perder(movidaUser,movidaPC);
            break;
        case 'rr':
        case 'pp':
        case 'tt':
            empate(movidaUser);
            break;
    }
}

function movidaComp() {
    const opciones = ['r','p', 't'];
    const random = Math.floor(Math.random()*3);
    const movida = opciones[random];
    return movida;
}

function ganar(opcionUser, opcionPc) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = 'Tu Ganaste 🤩🥳🥳!!!';
    resultRazon_div.innerHTML = convertirLetra(opcionUser) + ' le gana a ' + convertirLetra(opcionPc);
    const userChoice_div = document.getElementById(opcionUser);
    const pcChoice_div = document.getElementById(opcionPc);
    userChoice_div.classList.add("verde");
    pcChoice_div.classList.add("rojo");
    setTimeout(function() {
        userChoice_div.classList.remove("verde");
        pcChoice_div.classList.remove("rojo");
    }, 2000);
}

function perder(opcionUser, opcionPc) {
    compScore++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = 'Tu Pierdes 😵😐😭';
    resultRazon_div.innerHTML = convertirLetra(opcionUser) + ' pierde contra ' + convertirLetra(opcionPc);
    const userChoice_div = document.getElementById(opcionUser);
    const pcChoice_div = document.getElementById(opcionPc);
    userChoice_div.classList.add("rojo");
    pcChoice_div.classList.add("verde");
    setTimeout(function() {
        userChoice_div.classList.remove("rojo");
        pcChoice_div.classList.remove("verde");
    }, 2000);
}

function empate(opcion) {
    result_div.innerHTML = 'Empate 🤯🤯🤯'
    resultRazon_div.innerHTML = 'Ambos eligieron ' + convertirLetra(opcion);
    const opcion_div = document.getElementById(opcion);
    opcion_div.classList.add("gris");
    setTimeout(function() {
        opcion_div.classList.remove("gris");
    }, 2000);
}

function convertirLetra(opcion){
    if (opcion == 'r') {
        opcion = "Piedra ✊";
    } else if (opcion == 'p') {
        opcion = "Papel 🖐";
    } else if (opcion == 't') {
        opcion = "Tijera ✌";
    }
    return opcion;
}

IniciarPage();
main();