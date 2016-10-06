var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var animal = "Zielone słonie";
var animalUpperCased = animal.toUpperCase();

var textArray = text.split(" ");
var firstWord = textArray[0];

var textCharsAfter = text.replace(firstWord, animalUpperCased);
var halfOfText = textCharsAfter.length/2;  
var newText = textCharsAfter.substr(0, halfOfText); 

console.log(newText);