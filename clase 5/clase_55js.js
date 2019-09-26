//Declaracion de codigo de teclas
var teclas = {
  UP: 38,
  DOWN: 40,
  RIGTH: 37,
  LEFT: 39,
};

//Creacion de lienzo, posicion inicial y declaracon del evento
document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("canva");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;
dibujar_linea("green",x-1,y-1,x+1,y+1,papel)
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

//funcion de movimiento
function dibujarTeclado(evento)
{
  var colorcito = "BLUE";
  var movimiento = 1;
  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujar_linea("colorcito",x,y,x,y - movimiento, papel);
      y = y -movimiento;
    break;

    case teclas.DOWN:
      console.log("Vamos para abajo");
      dibujar_linea("colorcito",x,y,x,y + movimiento, papel);
      y = y + movimiento;
    break;

    case teclas.RIGTH:
      console.log("Vamos para arriba");
      dibujar_linea("colorcito",x,y,x - movimiento,y, papel);
      x = x - movimiento;
    break;

    case teclas.LEFT:
      console.log("Vamos para abajo");
      dibujar_linea("colorcito",x,y,x + movimiento,y, papel);
      x = x + movimiento;
    break;
    
    default:
      console.log("Otra tecla");
    break;
  }
}