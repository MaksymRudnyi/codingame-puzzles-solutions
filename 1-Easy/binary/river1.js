class River {
	constructor(x) {
		this.value = +x
	}

	advance() {
		let value = this.value
		while (value) {
			this.value += value % 10
			value = ~~(value / 10)
		}
	}
}

let r1 = new River(readline())
let r2 = new River(readline())

while (r1.value != r2.value)
	(r1.value < r2.value ? r1 : r2).advance()

print(r1.value)