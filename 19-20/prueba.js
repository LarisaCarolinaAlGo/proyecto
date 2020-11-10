function operar(signo) {
  let cifra1 = document.getElementById('num1').value
  let cifra2 = document.getElementById('num2').value
  let total = 0
  if (signo == "+") {
    let total = cifra1 "+" cifra2;
  } else if (signo == "-") {
    let total = cifra1 "-" cifra2;
  } else if (signo == "*") {
    let total = cifra1 "*" cifra2;
  } else if (signo == "/" ) {
    let total = cifra1 "/" cifra2;
  }
  document.getElementById('resultado').innertHTML = total
}
console.log(hola);
