var a = 5,
	h = 4;
	getTriangleArea

//function getTriangleArea(a, h) {}

if ( (a <= 0) || (h <= 0) ) {
	alert ('wynik nieprawidlowy');
}  
 function getTriangleArea(a, h) {
 	return (a * h / 2)
 }
 console.log( getTriangleArea(10,6) )