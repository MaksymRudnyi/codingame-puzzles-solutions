console.log([...Array(+readline())]
	.map(() => +readline())
	.sort((a, b) => a-b)
	.reduce((diff, item, index, me)=> item - me[index - 1] < diff ? item - me[index-1] : diff));
