/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position

var directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'],
	pointB = {
		x: lightX,
		y: lightY
	},

	pointA = {
		x: initialTX,
		y: initialTY
	}


getDirection(pointA, pointB);


function getDirection (pointA, pointB) {
	var direction = Math.atan2(pointB.y - pointA.y, pointB.x - pointA.x) * 180 / Math.PI;
	transformDirection(direction, pointA)
}

function transformDirection (direction, pointA) {
	if (direction === 0) {
		print('E');
		pointA.x += 1;
	}
	if (direction === 90) {
		print('S');
		pointA.y += 1;
	}
	if (direction === 180) {
		print('W');
		pointA.x -= 1;
	}
	if (direction === -90) {
		print('N');
		pointA.y -= 1;
	}
	if (direction > 0 && direction < 90) {
		print('SE');
		pointA.x += 1;
		pointA.y += 1;
	}
	if (direction > 90 && direction < 180){
		print('SW');
		pointA.x -= 1;
		pointA.y += 1;
	}
	if (direction > -180 && direction < -90){
		print('NW');
		pointA.x -= 1;
		pointA.y -= 1;
	}
	if (direction > -90 && direction < 0) {
		print('NE');
		pointA.x += 1;
		pointA.y -= 1;
	}

	getDirection (pointA, pointB)

}