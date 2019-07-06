const N = parseInt(readline());
const L = parseInt(readline());
const room = [];
const candles = [];

for (let i = 0; i < N; i++) {
	room.push(readline()
		.split(' ')
		.map((item, index) => {
			if (item === 'X') {
				return 0;
			} else {
				candles.push([i, index]);
				return L;
			}
		}));
}


for (let candle = 0; candle < candles.length; candle++) {
	const light = L -1;
	const [x, y] = candles[candle];

	for(let i = y - light; i <= y + light; i++) {
		for(let j = x - light; j <= x + light; j++) {
			if ((j >=0 && i >=0 && j < N && i < N)) {
				room[j][i]++;
			}
		}
	}
}

console.log(room.reduce((count, row) => {return count += row.filter(i => !i).length}, 0));
