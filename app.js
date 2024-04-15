let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//Esta función asigna un texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}
//Esta función muestra un mensaje de alerta
function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  
  if(numeroDeUsuario === numeroSecreto){
    asignarTextoElemento("p",`Felicidades, acertaste, el número de intentos fue de ${intentos}`)
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if(numeroDeUsuario<numeroSecreto){
      asignarTextoElemento("p","El número secreto es mayor")
    }else{
      asignarTextoElemento("p","El número secreto es menor")
    }
    intentos++;
    limpiarCaja();
  }
  return;
}
function limpiarCaja(){
  document.querySelector("#valorUsuario").value = "";
}
asignarTextoElemento('h1', 'Juego del número secreto!');
asignarTextoElemento('p', 'Indica un número del 1 al 10');
//Esta función genera un número aleatorio entre 1 y 100 
function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  if (listaNumerosSorteados.length == numeroMaximo){
      asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
  } else{
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    }else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}


function condicionesIniciales(){
  asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
  asignarTextoElemento("h1","Juego del número secreto!");
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}
//Función que reinicia el juego
function reiniciarJuego(){
  limpiarCaja();
  condicionesIniciales();
  document.getElementById('reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();
