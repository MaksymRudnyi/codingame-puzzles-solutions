const readLine = separator => readline().split(separator);
const getTableLine = line => line
	.replace(/  /g, 0)
	.replace(/--/g, 1)
	.split('')
	.map(i => i === '|' ? '|' : !!parseInt(i));

const [, H] = readLine(' ');
const header = readLine('  ');
const table = [...Array(H - 2)]
	.map(readline)
	.map(getTableLine);
const footer = readLine('  ');

header.forEach((column, index) => {
	index = index * 2;

	table.forEach(row => {
		const isRightTurn = row[index + 1];
		const isLeftTurn = row[index - 1];

		index = isRightTurn ? index + 2 : isLeftTurn ? index - 2 : index;
	})

	console.log(`${column}${footer[index/2]}`);
});