let numUno = 0
let numDos = 0

function restaPN() {
  numUno = numUno - 1
  while (numUno < 0){
    numUno = 0;
  }
  document.getElementById('uno').innerHTML= numUno
}

function sumaPN() {
  numUno = numUno + 1
  while (numUno > 10){
    numUno = 10;
  }
  document.getElementById('uno').innerHTML= numUno
}

function restaSN() {
  numDos = numDos - 1
  while (numDos < 0){
    numDos = 0;
  }
  document.getElementById('dos').innerHTML= numDos
}

function sumaSN() {
  numDos = numDos + 1
  while (numDos > 10){
    numDos = 10;
  }
  document.getElementById('dos').innerHTML= numDos
}

function igual() {
document.getElementById('resultado').innerHTML=   numUno * numDos
}
