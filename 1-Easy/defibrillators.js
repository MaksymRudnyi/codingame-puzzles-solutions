const getFloat = number => parseFloat(number.replace(',', '.'));
const getDistance = (lonA, lonB, latA, latB) => {
	const x = (lonB - lonA) * Math.cos((latA + latB) / 2);
	const y = latB - latA;

	return Math.sqrt(x*x + y*y) * 6371;
}

const LON = getFloat(readline());
const LAT = getFloat(readline());
const N = parseInt(readline());

let closestDef = {
	name: '',
	distance: Number.MAX_VALUE,
}

for (let i = 0; i < N; i++) {
	const item = readline().split(';');
	const name = item[1];
	const defLon = getFloat(item[item.length - 2]);
	const defLat = getFloat(item[item.length - 1]);
	const distance = getDistance(LON, defLon, LAT, defLat);

	if (distance < closestDef.distance) {
		closestDef = {
			name,
			distance
		}
	}
}

console.log(closestDef.name);