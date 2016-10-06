var lista = document.getElementById('list');
var addNewLi = document.getElementById('addElem');

addNewLi.addEventListener('click', function(e) { 
	var itemsByTagName = document.getElementsByTagName('li');
	var howManyLi = itemsByTagName.length;
	lista.innerHTML += '<li>item</li>' + howManyLi; 
});