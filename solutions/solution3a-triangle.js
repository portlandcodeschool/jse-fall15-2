// Some single-loop solutions:
function letterTriangle(n) {
	var letterStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		letters = letterStr.split('').reverse(),
		lines = Array(n);
	for (var i=0; i<n; ++i) {
		lines[i]=letters.slice(-i-1).join('')+'\n';
	}
	return lines.join('');
}

function letterTriangle(n) {
	var letterStr = 'ZYXWVUTSRQPONMLKJIHGFEDCBA\n',
		lines = '';
	for (var i=0; i<n; ++i) {
		lines += letters.slice(-i-2);
	}
	return lines;
}

// A double-loop solution:
function letterTriangle(n) {
	var letterStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		lines = '';
	for (var line = 0; line<n; line++) {
		for (var letter = line; letter>=0; letter--) {
			lines+=letterStr[letter];
		}
		lines+='\n';
	}
	return lines;
}

