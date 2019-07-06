class River {
	constructor(n) {
		this.river = [n];
	}

	get top() {
		return this.river[this.river.length - 1];
	}

	getNext() {
		const sum = this.top
			.toString()
			.split('')
			.map(Number)
			.reduce((c, i) => c + i);

		this.river.push(this.top + sum);

		return this.top;
	}

	isCrossing(point) {
		return this.river.includes(point);
	}
}

const firstRiver = new River(+readline());
const secondRiver = new River(+readline());

let isCrossing = false

do {
	let isFirstCrossed = firstRiver.isCrossing(secondRiver.top);
	let isSecondCrossed = secondRiver.isCrossing(firstRiver.top)

	isCrossing = isFirstCrossed || isSecondCrossed;

	if (isCrossing) {
		if (isFirstCrossed) {
			console.log(secondRiver.top);
		}
		if(isSecondCrossed) {
			console.log( firstRiver.top)
		}
	}

	firstRiver.getNext();
	secondRiver.getNext();

} while(!isCrossing)







