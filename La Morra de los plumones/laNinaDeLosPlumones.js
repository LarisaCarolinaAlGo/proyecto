var valores_cartas = ['Crayola','Crayola','Tombow','Tombow','Sakura','Sakura','Zig','Zig','Point88','Point88','Stabilo','Stabilo','GuangNa','GuangNa','Sharpie','Sharpie','TwinTone','TwinTone','Artline','Artline','Karin','Karin','Midliner','Midliner']; //Nombra a cada carta y su par//
var valores = []; //valores para comparar, letras
var ids_cartas = []; //Id de los valores a comparar,
var cartas_volteadas = 0;//Cartas bolteadas

function newBoard(){ //El tablero//
	cartas_volteadas = 0;
  	var output = '';
    valores_cartas.cartas_revolver();
	for(var i = 0; i < valores_cartas.length; i++){
		output += '<div class="tile_'+i+'" id="tile_'+i+'" onclick="memoryFlipTile(this,\''+valores_cartas[i]+'\')"></div>';//crea difernetes divs y les asigna a cada uno un div y un valor
	}
	document.getElementById('memory_board').innerHTML = output;
}//inserta el tablero en el html
function memoryFlipTile(tile,val){
	if(tile.innerHTML == "" && valores.length < 2){//si a[un no seleccionamos dos cartas]
		tile.style.background = '#FFFFFF';//color cambia
		tile.innerHTML = val; //se pone la letra
		if(valores.length == 0){//aun no seleccionamos carta, en caso de la primera carta
			valores.push(val);//Guardamos la letra que elegimos
			ids_cartas.push(tile.id);//Guardamos el id de la carta
		} else if(valores.length == 1){ //Cuando vamos a seleccionar la segunda carta
			valores.push(val);//Guardar segunda letra
			ids_cartas.push(tile.id);//Guardar segundo id
			if(valores[0] == valores[1]){//Comparar valores de las cartas seleccionadas
				cartas_volteadas += 2;//Sumamos dos

				valores = [];//Vacia
            	ids_cartas = [];//Vacia
				// Check to see if the whole board is cleared
				if(cartas_volteadas == valores_cartas.length){//Compara la cantidad de cartas con la cantidad de cartas bolteadas
					alert("Felicidades!! Acabaste.");//Aviso
					document.getElementById('memory_board').innerHTML = "";
					newBoard();//llama
				}
			} else {
				function flip2Back(){//no son iguales, las cartas se voltean

				    var carta_1 = document.getElementById(ids_cartas[0]);//toma id
				    var carta_2 = document.getElementById(ids_cartas[1]);
				    carta_1.style.background = 'url(background.png) no-repeat';//le pone background e imagen de antes
            	    carta_1.innerHTML = "";//texto vacio
				    carta_2.style.background = 'url(background.png) no-repeat';
            	    carta_2.innerHTML = "";

				    valores = [];//limpia
            	    ids_cartas = [];//limpia
				}
				setTimeout(flip2Back,800);//cada 1000 es un segundo, para hacer que se tarde en voltear.
			}
		}
	}
}


Array.prototype.cartas_revolver = function(){//genera el orden de las crtas
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
