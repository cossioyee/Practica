var vp = document.getElementById("villa");
var papel = vp.getContext("2d");


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




var vrcant = aleatorio(0, 10);
var crcant = aleatorio(0, 10);
var prcant = aleatorio(0, 10);



function cargarVacas()
{
	vaca.cargaOK = true;
	dibujar();

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
	dibujar();
}



function dibujar()
{	
	
	
	if (fondo.cargaOK)
	{
		papel.drawImage(fondo.obj,0,0);
	}

	if (vaca.cargaOK)
	{
		console.log("vaca: "+vrcant);
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
		console.log("cerdo: "+crcant);
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
		console.log("pollo: "+prcant);
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
		var x = aleatorio(0,420);
		var y = aleatorio(0,420);
		papel.drawImage(lobo.obj,x,y);
	}
}









function aleatorio(min, max)
{
	var resultado = Math.floor((Math.random()*(max-min+1)))+min;
	return resultado;
}

