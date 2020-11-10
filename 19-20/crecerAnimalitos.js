
function crecer() {
  let imagen = document.getElementById("imagen");
  let botonCrecer = document.getElementById("botonCrecer");
  let botonReducir = document.getElementById("botonRedu");

  imagen.width  += 30;

  if (imagen.width >= 800) {
    botonCrecer.disabled = true;
  }
  if (imagen.width > 200) {
    botonReducir.disabled = false;

  }
}

function reducir() {
  let imagen = document.getElementById("imagen");
  let botonCrecer = document.getElementById("botonCrecer");
  let botonReducir = document.getElementById("botonRedu");

    imagen.width  -= 30;

  if (imagen.width <= 200) {
    botonReducir.disabled = true;
  }
  if (imagen.width < 800) {
    botonCrecer.disabled = false;
  }

}

function cambiarImagen() {
  let imagen = document.getElementById('imagen');
  if (imagen.src == "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8G6rcqQWI_BBUyZ587w997aHH_Eldsia1BkPx62IkL60cf_Ep&usqp=CAU"){
    imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOnkBrBPoLc8Q1EYRuNOgs22if3L2c9H-yMsC-Sa8ZzVaHFG3H&usqp=CAU"
  } else if (imagen.src == "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOnkBrBPoLc8Q1EYRuNOgs22if3L2c9H-yMsC-Sa8ZzVaHFG3H&usqp=CAU") {
    imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8G6rcqQWI_BBUyZ587w997aHH_Eldsia1BkPx62IkL60cf_Ep&usqp=CAU"
  }
}
