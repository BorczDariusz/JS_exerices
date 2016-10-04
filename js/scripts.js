var a = 1;
var b = 5;
var value = (a * a) + (2 * a * b) - (b * b);

console.log("Wynik = " + value);

if (value < 0) {
    console.log("Wynik jest ujemny.");
} else if (value === 0) {
	console.log("Wynik jest równy zero.");
} else {
	console.log("Wynik jest dodatni.");
}	