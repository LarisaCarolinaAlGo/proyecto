function comprobar() {
  let numero_Uno = document.getElementById('num1').innerHTML;
  let numero_Dos = document.getElementById('num2').innerHTML;
  let total = document.getElementById('total').value;
  let operacion = numero_Uno * numero_Dos;

  if (total == operacion){
    alert("Bien Hecho!!");
  }else {
    alert("Intenta de nuevo");
  }
  console.log(total);
}
