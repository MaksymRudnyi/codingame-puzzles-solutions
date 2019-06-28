var surfaceN = parseInt(readline());
for (var i = 0; i < surfaceN; i++) {
	var inputs = readline().split(' ');
}

while (true) {
	var inputs = readline().split(' ');
	var speed = Math.abs(parseInt(inputs[3]));

	speed > 40 ? print (0, 4) : print(0, Math.floor(speed / 10));
}