var vp = document.getElementById("villa");//creacion de la villa
var papel = vp.getContext("2d");
document.addEventListener("keydown", dibujarTeclado); //evento del teclado

var xl = 0;
var yl = 0;

//declaracion de objetos
var teclas = {
  UP: 38,
  DOWN: 40,
  RIGTH: 37,
  LEFT: 39,
};
var vaca = {
	url: "vaca.png",
	cargaOK: false
};
var fondo = {
	url: "tile.png",
	cargarOk: false
};
var pollo = {
	url: "pollo.png",
	cargaOK: false
};
var cerdo = {
	url: "cerdo.png",
	cargarOk: false
};
var lobo = {
	url: "lobo.png",
	cargaOK: false
};


//creacion de objetos con sus creacion del evento "cargar"s
fondo.obj = new Image();
fondo.obj.src = fondo.url;
fondo.obj.addEventListener("load", cargarFondo);

vaca.obj = new Image();
vaca.obj.src = vaca.url;
vaca.obj.addEventListener("load", cargarVacas);

pollo.obj = new Image();
pollo.obj.src = pollo.url;
pollo.obj.addEventListener("load", cargarPollo);

cerdo.obj = new Image();
cerdo.obj.src = cerdo.url;
cerdo.obj.addEventListener("load", cargarCerdo);

lobo.obj = new Image();
lobo.obj.src = lobo.url;
lobo.obj.addEventListener("load", cargarLobo);



//numeros aleatorios por animal
var vrcant = aleatorio(0, 10);
var crcant = aleatorio(0, 10);
var prcant = aleatorio(0, 10);



function cargarVacas()
{
	vaca.cargaOK = true;
	dibujar();
	//console.log("dentro de cargar vacas x: "+x+ " y: "+y);
}

function cargarFondo()
{
	fondo.cargaOK = true;
	dibujar();
}

function cargarCerdo()
{
	cerdo.cargaOK = true;
	dibujar();
}

function cargarPollo()
{
	pollo.cargaOK = true;
	dibujar();
}

function cargarLobo()
{
	lobo.cargaOK = true;
	var x = aleatorio(1,420);
    var y = aleatorio(1,420);
    dibujarLobo(x,y);
}



function dibujar()
{	
	
	//console.log("dentro de funcion dibujar x: "+xv+ " y: "+yv);
	if (fondo.cargaOK)
	{
		papel.drawImage(fondo.obj,0,0);
	}

	if (vaca.cargaOK)
	{
		//console.log("vaca: "+vrcant);
		for (var cant = 0; cant < vrcant; cant ++)
		{
			var x = aleatorio(0,7);
			var y = aleatorio(0,7);
			x = x*60;
			y = y*60;
			papel.drawImage(vaca.obj,x,y);
		}
		
	}

	if (cerdo.cargaOK)
	{
		//console.log("cerdo: "+crcant);
		for (var cant = 0; cant < crcant; cant ++)
		{
			var x = aleatorio(0,7);
			var y = aleatorio(0,7);
			x = x*60;
			y = y*60;
			papel.drawImage(cerdo.obj,x,y);
		}
		
	}

	if (pollo.cargaOK)
	{
		//console.log("pollo: "+prcant);
		for (var cant = 0; cant < prcant; cant ++)
		{
			var x = aleatorio(0,7);
			var y = aleatorio(0,7);
			x = x*60;
			y = y*60;
			papel.drawImage(pollo.obj,x,y);
		}
	}

	if (lobo.cargaOK)
	{
		papel.drawImage(lobo.obj)
	}
}


/*function dibujarLobo(x,y)
{
	if (lobo.cargaOK)
	{
		console.log("x: " +x+" y: "+y);
		papel.drawImage(lobo.obj,x,y);
	}
}*/	


function dibujarTeclado(evento)
{
  switch(evento.keyCode)
	{
    case teclas.UP:
      // console.log("Vamos para arriba "+y );
      y = y - 2;
      // papel.drawImage(lobo.obj,x,y)
    break;

    case teclas.DOWN:
      //console.log("Vamos para abajo");
      y = y + 2;
      // papel.drawImage(lobo.obj,x,y)
    break;

    case teclas.RIGTH:
      //console.log("Vamos para arriba");
      x = x - 2;
      // papel.drawImage(lobo.obj,x,y)
    break;

    case teclas.LEFT:
      //console.log("Vamos para abajo");
      x = x + 2;
      // papel.drawImage(lobo.obj,x,y)
    break;
    
    default:
      console.log("Otra tecla");
    break;
	}
}
//console.log("Lobo fuera del teclado x: " +x+"y: "+y);
//funcion de movimiento





function aleatorio(min, max)
{
	var resultado = Math.floor((Math.random()*(max-min+1)))+min;
	return resultado;
}










