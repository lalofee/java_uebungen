function init() {
	var elem = document.getElementById('button');
	elem.addEventListener('click', überprüfen);
}

function überprüfen() {
	var ort = 'Friedrichshafen';
	var ergebnis = (ort + ' hat ' + ort.length + ' Buchstaben.');
	ausgabe(ergebnis);
}

function ausgabe(text) {
	var ausgabe = document.getElementById('ausgabe');
	ausgabe.innerHTML = text;
}
document.addEventListener('DOMContentLoaded', init);
