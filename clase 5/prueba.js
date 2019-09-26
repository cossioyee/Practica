var iniciar = document.addEventListener("mousedown", inicio);
var trayectoria = document.addEventListener("mousemove", trayecto);
var finalizar = document.addEventListener("mousedown", fin);
function inicio(iniciar)
{
	console.log(iniciar);

}

function trayecto(trayectoria)
{
	console.log(trayectoria);

}

function fin(finalizar)
{
	console.log(finalizar);

}