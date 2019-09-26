//Declaracion de codigo de teclas
var teclas = {
	UP: 38,
	DOWN: 40,
	RIGTH: 37,
	LEFT: 39,
};

//Declaracon del evento
document.addEventListener("mousemove", dibujarTeclado);

//funcion de movimiento
function dibujarTeclado(evento)
{
 	var colorcito = "BLUE";
 	var cuadrito = document.getElementById("canva");
	var papel = cuadrito.getContext("2d");
	
	if (evento.buttons === 1)
	{
		var x = evento.layerX;
		var y = evento.layerY;
		dibujar_linea("green",x+3,y+3,x-3,y-3,papel)
	}
	
	
	//funcion de dibujo
	function dibujar_linea(color, xini, yini, xfin, yfin, lienzo)
  		{
    		lienzo.beginPath();
    		lienzo.strokeStyle = color;
    		lienzo.lineWidth = 1;
    		lienzo.moveTo(xini, yini);
   			lienzo.lineTo(xfin, yfin);
    		lienzo.stroke();
    		
  		}
  	function detener_linea()
  		{
  			lienzo.closePath();
  		}

}