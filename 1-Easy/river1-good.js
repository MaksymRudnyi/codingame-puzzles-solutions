let r1 = +readline();
let r2 = +readline();

while(r1 !== r2) {
	if (r2 < r1) {
		[r1, r2] = [r2, r1];
	}

	r1 += [...r1 + ''].reduce((c, i) => +i + c, 0);
}

console.log(r1);