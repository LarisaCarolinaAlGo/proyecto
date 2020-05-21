let coloreado = false
let subrayado = false
// Nombre de usuario//
function pedirNombre() {
  let nombre = prompt("Ingresa tu nombre:") //Guardar el nombre de una persona en la variable//
  document.getElementById('saludo').innerHTML= "Hola " + nombre + " !" //Busca el Id saludo con el innerHTML mandas al h1 el mensaje//

}
// Cambio de color//
function color(){
  let texto = document.getElementById("saludo")

  if (coloreado == false) {
    texto.classList.add("letrasRojas")
    coloreado = true
  } else {
    texto.classList.remove("letrasRojas")
    coloreado = false
  }
}

//Subrayado//
function subrayar() {
  let texto = document.getElementById("saludo")

  if (subrayado == false) {
    texto.classList.add("subrayar")
    subrayado = true
  } else {
    texto.classList.remove("subrayar")
    subrayado = false
  }
}
