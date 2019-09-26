class pokemon
{
// constructor de la clase pokemon
	constructor(n, v, a)
	{
		this.nombre = n;
		this.vida =v;
		this.ataque =a;
		this.imagenes = new Image();

		this.imagenes.src = imagenes[this.nombre];
	}

//insertamos imagenes con appendChild
	mostrar()
	{
		document.body.appendChild(this.imagenes);
		document.write("<p>");

		document.write("<strong>"+this.nombre+"</strong>");
		document.write("<br>Vida: "+this.vida);
		document.write("<br>Ataque: "+this.ataque)
		document.write("</p> <hr>");

	}
}
