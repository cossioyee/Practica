// console.log("hola")
var num = 100;
// var divisible = false;
for(var a = 1; a <= num ; a++)
{
	// divisible = false;
	if ( a % 3 == 0)
	{
		document.write(" Fizz ");
		// divisible = true;
	}
	
	if ( a % 5 == 0)
	{
		document.write(" Buzz ");
		// divisible = true;
	}
	
	if (a%3 != 0 && a%5 != 0)
	{
		document.write(a);
	}
	document.write("<br/>");
}