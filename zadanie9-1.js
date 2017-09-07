function getTriangleArea(a, h) {
 	if ( (a <= 0) || (h <= 0) ) {
		return 'wynik nieprawidlowy';
	}  

 	return a * h / 2;
 }
 console.log( getTriangleArea(10,6) );
 var triangle1Area = getTriangleArea(1, 5);
 var triangle2Area = getTriangleArea(14, 17);
 var triangle3Area = getTriangleArea(17, 25);
 console.log(triangle1Area, triangle2Area, triangle3Area);