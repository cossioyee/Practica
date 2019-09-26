// indices STRING (que no sirve mucho a la hora de recorrer)
var imagenes = [];
imagenes["milktank"] = "vaca.png";
imagenes["pikachu"] = "pollo.png";
imagenes["ratata"] = "cerdo.png";


var milktank;
var pikachu;
var ratata;

// arreglo
var coleccion = [];
coleccion.push(new pokemon("milktank", 100, 30 ));
coleccion.push(new pokemon("pikachu", 90, 20 ));
coleccion.push(new pokemon("ratata", 80, 10 ));

for(var poke of coleccion) // in (trae el indice) of (me muestra la instacia del obj) recorre una cantidad de veces que un obj existe.
{
  poke.mostrar();
}
