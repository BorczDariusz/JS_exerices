function getTriangleArea(a, h) {

	if (a <= 0 || h <= 0) {
		return 'Nieprawidłowe dane';
	}
	return a * h / 2;
}

var triangle1Area = getTriangleArea(20, 30);
var triangle2Area = getTriangleArea(2, 3);
var triangle3Area = getTriangleArea(10, 30); 
var triangle4Area = getTriangleArea(0, 30); 

console.log( triangle1Area );
console.log( triangle2Area );
console.log( triangle3Area );
console.log( triangle4Area );