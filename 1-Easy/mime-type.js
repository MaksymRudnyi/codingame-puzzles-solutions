const N = parseInt(readline()),
	Q = parseInt(readline());

let table = [...Array(N)]
	.map(() => readline().split(' '))
	.reduce((ac, i) => {ac[i[0].toLowerCase()] = i[1]; return ac;}, {});

[...Array(Q)].map(() => readline()).forEach(i => {
	let ext = i.split('.');
	ext = ext.length > 1 ? ext[ext.length - 1].toLowerCase() : '';
	print(table[ext] || 'UNKNOWN')
})