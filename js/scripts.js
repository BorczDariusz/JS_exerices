
function rysujChoinke(poziom) {
    for (var i = 0; i < poziom; i++) {
        star= ("*");
        for (var j = 0; j < i * 2 - 1; j++) {
            star += "*";
        }
        console.log(star);
	}
}
rysujChoinke(5);