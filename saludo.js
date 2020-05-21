function saludo(){
  let nombre = prompt("Hola, cómo te llamas?")
  document.getElementById('hola_adios').innerHTML= "Hola " + nombre + " !"
}

function despedida(){
  document.getElementById("hola_adios").innerHTML= "Adios " + nombre + " !"
}
// pedir el nombre y decir hola con el nombre del usuario, poner un boton para que diga adios y el nombre//
