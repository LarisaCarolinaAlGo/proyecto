function abrir_cuenta() {
  let inicio = prompt("Con cuánto dinero deseas abrir tu cuenta. La cantidad minima es $1000")
  if (inicio >= 1000) {
    document.getElementById('dinero_actual').innerHTML = inicio

  }else {
    alert("La cantidad minima es 1000 y la cantidad máxima es de 10,000")

    abrir_cuenta()
  }
}

function ahorro() {
  let money = document.getElementById('dinero').value;
  let actual = document.getElementById('dinero_actual').innerHTML
  let suma = parseInt(actual) + parseInt(money);
  if (suma > 10000) {
    alert("Tu cuenta no puede ser mayor a 10,000")
    document.getElementById('dinero').value = ""
  }else if (suma <=10000) {
    document.getElementById('dinero_actual').innerHTML = suma;
    document.getElementById('dinero').value = ""

  }
}

function retiro() {
  let money = document.getElementById('dinero').value;
  let actual = document.getElementById('dinero_actual').innerHTML
  let retiro = parseInt(actual) - parseInt(money);

  if (retiro < 1000) {
    alert("Tu cuenta no puede ser menor a 1000")
    document.getElementById('dinero').value = ""
  }else if (retiro >=1000) {
    document.getElementById('dinero_actual').innerHTML = suma;
    document.getElementById('dinero').value = ""

  }
}
