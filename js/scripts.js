var womensNames = ["Asia", "Kasia", "Ola", "Jola"];
var mensNames = ["Piotrek", "Marek", "Arek", "Jarek"];
var allNames = womensNames.concat(mensNames);

console.log("Imiona damskie: " + womensNames);
console.log("Imiona męskie: " + mensNames);
console.log("Wszystkie imiona: " + allNames);

var newName = "Marian";

if (allNames.indexOf(newName) === 1) {

allNames.push("Marek");
	console.log("Lista z nowym imieniem:  " + allNames);

} else {
	console.log("Imię znajduje się już na liście");
}