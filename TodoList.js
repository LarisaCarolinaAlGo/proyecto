function agregar() {
  let texto = document.getElementById('texto').value
  let lista = document.getElementById("lista")

  let nuevaEtiqueta = document.createElement("li")
  let textoInterno = document.createTextNode(texto)
  nuevaEtiqueta.appendChild(textoInterno)

  lista.appendChild(nuevaEtiqueta)
}
