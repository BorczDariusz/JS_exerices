var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var animal = "Zielone słonie";
var animalUpperCased = animal.toUpperCase();

console.log(animalUpperCased);

var firstWordfromText = text.slice(0,6);
var textCharsAfter = text.replace(firstWordfromText, animalUpperCased);

var halfOfText = textCharsAfter.length/2;
console.log("Długość połowy tekstu: " + halfOfText);

var newText = textCharsAfter.substr(0, 45); // możemy użyć również slice()

console.log(newText);