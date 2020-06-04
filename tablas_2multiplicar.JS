function comprobar() {
  let num1= document.getElementById('num1').innerHTML;
  let num2 = document.getElementById('num2').innerHTML;
  let numUsuario = document.getElementById("numUsuario").innerHTML;

  let resMulti = num1*num2;

  if (numUsuario == resMulti) {
    alert("CORRECTO!!");
    document.getElementById('numUsuario').value = "";
    console.log(resMulti)
    refresh();
  }else {
    alert("SIGUE INTENTANDO 🤔");
  }
}

function refresh() {
  let numRandom1 = Math.floor(Math.random()*10)+1;
  console.log(numRandom1);
  let numRandom2 = Math.floor(Math.random()*10)+1;
  console.log(numRandom2);

  document.getElementById('num1').innerHTML = numRandom1;
  document.getElementById('num2').innerHTML = numRandom2;
}
