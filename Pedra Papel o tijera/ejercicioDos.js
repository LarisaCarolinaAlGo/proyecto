console.log("test")
function inicio() {
  alert("Vamos a jugar piedra papel o tijera");
  let nombreUno = prompt("Ingresa tu nombre JUgador Uno");
  let jugadorUno = prompt("Jugador Uno, elige piedra, papel o tijera");
  let jugadorDos = prompt("Jugador Dos, elige piedra, papel o tijera");

  if (jugadorUno == jugadorDos){
    alert("Empate");
  } else if (jugadorUno == "piedra" && jugadorDos == "papel") {
      alert("Ganador -jugadorDos-");
  } else if (jugadorUno == "piedra" && jugadorDos == "tijera") {
      alert("Ganador -jugadorUno-");
  } else if (jugadorUno == "papel" && jugadorDos == "piedra") {
      alert("Ganador -jugadorUno-");
  } else if (jugadorUno == "papel" && jugadorDos == "tijera") {
      alert("Ganador -jugadorDos-");
  } else if (jugadorUno == "tijera" && jugadorDos == "papel") {
      alert("Ganador -jugadorUno-");
  } else if (jugadorUno == "tijera" && jugadorDos == "piedra") {
      alert("Ganador -jugadorDos-");
  } else {
    alert("ERROR!");
  }
}
