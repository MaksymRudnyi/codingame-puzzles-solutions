const isInside = (point, polygon) => {
	const [x, y] = point;

	let inside = false;

	for(let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
		const [xi, yi] = polygon[i];
		const [xj, yj] = polygon[j]

		const intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);

		if (intersect) {
			inside = !inside;
		}
	}

	return inside;
}

const parseLine = () => readline().split(' ').map(Number);
const polygon = [...Array(+readline())].map(parseLine);
const shots = [...Array(+readline())].map(parseLine);

shots.map(point => isInside(point, polygon) ? 'hit' : 'miss').forEach(res => console.log(res));
