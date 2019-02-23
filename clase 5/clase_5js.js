//Declaracion de codigo de teclas
var teclas = {
  UP: 38,
  DOWN: 40,
  RIGTH: 37,
  LEFT: 39,
};

//Creacion de lienzo, posicion inicial y declaracon del evento
document.addEventListener("mousedown", dibujarTeclado);

//funcion de movimiento
function dibujarTeclado(evento)
{
 	var colorcito = "BLUE";
 	var movimiento = 1;
 	var cuadrito = document.getElementById("canva");
	var papel = cuadrito.getContext("2d");
	var x = evento.layerX;
	var y = evento.layerY;
	dibujar_linea("green",x,y,x+1,y+1,papel)
	//funcion de dibujo
	function dibujar_linea(color, xini, yini, xfin, yfin, lienzo)
  		{
    		lienzo.beginPath();
    		lienzo.strokeStyle = color;
    		lienzo.lineWidth = 3;
    		lienzo.moveTo(xini, yini);
   			lienzo.lineTo(xfin, yfin);
    		lienzo.stroke();
    		lienzo.closePath();
  		}

}