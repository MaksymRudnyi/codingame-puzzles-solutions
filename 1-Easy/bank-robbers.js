/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const R = parseInt(readline());
const V = parseInt(readline());

const countDigits = 10;
const countVowels = 5;

const countCombination = (C, N) => Math.pow(countDigits, N) * Math.pow(countVowels, C - N)

const times = [...Array(V)]
	.map(() => readline().split(' '))
	.map(([x, y])=> countCombination(x, y));

const time = times.slice(0, R);

for (let i = R; i < times.length; i++) {
	const index = time.indexOf(Math.min(...time));

	time[index] = time[index] + times[i];
}

console.log(Math.max(...time));
