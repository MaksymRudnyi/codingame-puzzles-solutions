while (true) {
	var highestValue = 0,
		highestMountain = 0;
	for (var i = 0; i < 8; i++) {
		var mountainH = parseInt(readline()); // represents the height of one mountain.
		if (mountainH > highestValue){
			highestValue = mountainH;
			highestMountain = i;
		}
	}
	print(highestMountain)
}