var n = parseInt(readline()),
	inputs = readline().split(' ');

if (inputs[0]){
	print(inputs.reduce((ac, item) => Math.abs(item) < Math.abs(ac) ? item : Math.abs(item) === Math.abs(ac) ? Math.max(item, ac) : ac));
} else {
	print(0);
}