let posicionData = 0;
let cantidadAhorrada = 0;
let valorAcumulado = 0;

const targetNumber = parseFloat(prompt('Ingresa tu objetivo de la semana:'));
const metaElement = document.getElementById('objetivo');
metaElement.innerText = `Meta: $${targetNumber}`;

console.log(meta);

function subir() {
  let ingresosInput = document.getElementById('ingresos');
  let ingresosValue = parseInt(ingresosInput.value);

  let egresosInput = document.getElementById('egresos');
  let egresosValue = parseInt(egresosInput.value);

  let newValue = ingresosValue - egresosValue;

  valorAcumulado += newValue; // Actualiza el valor acumulado
  
  cantidadAhorrada += newValue;

  let data = myChart.data;
  data.datasets[0].data[posicionData] = valorAcumulado; // Usa el valor acumulado en lugar del nuevo valor
  posicionData++;
  myChart.update();

  ingresosInput.value = '';
  egresosInput.value = '';

  actualizarMeta();
}

// Restablece el valor acumulado y la posición de los datos al cargar la página
window.onload = function() {
  posicionData = 0;
  valorAcumulado = 0;
};

// Restablece la gráfica y la meta cuando se presiona el botón de "Subir"
function resetearGrafica() {
  let data = myChart.data;
  data.datasets[0].data = [0, 0, 0, 0, 0, 0, 0]; // Restablece los datos a cero
  posicionData = 0;
  myChart.update();

  cantidadAhorrada = 0;
  actualizarMeta();
}

function actualizarMeta() {
  const counterElement = document.querySelector('.counter');
  const animationDuration = 500; // Duración en milisegundos (2 segundos en este ejemplo)
  const fps = 60; // Cuadros por segundo

  const increment = cantidadAhorrada / (animationDuration / 1000 * fps);
  let currentNumber = parseFloat(counterElement.textContent);

  const updateCounter = () => {
    currentNumber += increment;
    counterElement.textContent = currentNumber.toFixed(2);

    if (currentNumber < cantidadAhorrada) {
      requestAnimationFrame(updateCounter);
    } else {
      counterElement.textContent = cantidadAhorrada.toFixed(2);
    }
  };

  updateCounter();
}


