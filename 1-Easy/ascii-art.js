const L = parseInt(readline()),
	H = parseInt(readline()),
	T = readline();

for (let i = 0; i < H; i++) {
	let characters = splitSubstring(readline(), L);

	print(T.split('').reduce((output, letter) =>  output + (characters[letter] || characters['?']), ''));
}

function splitSubstring(str, len) {
	let ret = {},
		letter = 'A';

	for (let offset = 0, strLen = str.length; offset < strLen; offset += len) {
		ret[letter] = ret[letter.toLowerCase()] = str.substring(offset, offset + len);
		letter = String.fromCharCode(letter.charCodeAt(0) + 1);
	}

	ret['?'] = str.slice(-(len));

	return ret;
}