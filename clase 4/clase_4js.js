var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var caja = document.getElementById("texto_lineas");
var boton = document.getElementById("botonsito");
var x=0;
var xi, yi;
boton.addEventListener("click", dibujo_por_click);

function dibujar_linea(color, xini, yini, xfin, yfin)
	{
		lienzo.beginPath();
		lienzo.strokeStyle = color;
		lienzo.moveTo(xini, yini);
		lienzo.lineTo(xfin, yfin);
		lienzo.stroke();
		lienzo.closePath();
	}

function dibujo_por_click()
{
	var texto_valor = parseInt(caja.value);
	var y = texto_valor;

	
	
	for(x = 0; x < y ; x++)
	{
		yi = (d.width/y) * x;
		xi = (d.width/y) * (x+1);
		dibujar_linea("green", 0, yi, xi, 300);
		console.log(texto_valor + x);
	}
	
	dibujar_linea("green",1,1,1, 300);
	dibujar_linea("green",1,299,299,299);
}


