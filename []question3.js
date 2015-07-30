// []**3)** _(Moderate, 25%)_

// [[]]**a)**
// Write a function `letterTriangle(n)` which returns a single string as follows:

// [[[]]]- the function receives a parameter `n`, an integer from 1 to 26;
// [[[]]]- the output string will have `n` lines, each ending in a newline ('\n') character;
// [[[]]]- the first line of the string is always 'A';
// [[[]]]- each line will be a sequence of letters, going backward from some starting letter to 'A';
// [[[]]]- each line starts one letter after the previous line's start.

// As an example, the result of `letterTriangle(4)` will look like this when printed:
// ```
// A
// BA
// CBA
// DCBA
// ```

// [[]]**b)**
// Adapting your solution to part [[[]]]a), write a function which returns a string containing the entire lyrics for the song "The Twelve Days of Christmas".  Make sure that your result is grammatically and typographically correct (include line breaks, commas, etc. where needed), but keep redundancy within your program to a minimum.  Don't just `console.log()` each line; as before, return them together as a single string[[[]]] which includes a '\n' at each line break.[[[]]]
// You may want to use helper functions, loops, and/or arrays to store repeated elements.

// If you prefer a non-Christmas option, you may choose a different song with similarly repeating structure, such as "There was an Old Woman Who Swallowed a Fly".  If you prefer a vegan option, you may write your own cruelty-free song.





// Twelve Days of Christmas


// On the first day of Christmas
// my true love sent to me:
// A Partridge in a Pear Tree

// On the second day of Christmas
// my true love sent to me:
// 2 Turtle Doves
// and a Partridge in a Pear Tree

// On the third day of Christmas
// my true love sent to me:
// 3 French Hens
// 2 Turtle Doves
// and a Partridge in a Pear Tree

// On the fourth day of Christmas
// my true love sent to me:
// 4 Calling Birds
// 3 French Hens
// 2 Turtle Doves
// and a Partridge in a Pear Tree

// On the fifth day of Christmas
// my true love sent to me:
// 5 Golden Rings
// 4 Calling Birds
// 3 French Hens
// 2 Turtle Doves
// and a Partridge in a Pear Tree

// On the sixth day of Christmas
// my true love sent to me:
// 6 Geese a Laying
// 5 Golden Rings
// 4 Calling Birds
// 3 French Hens
// 2 Turtle Doves
// and a Partridge in a Pear Tree

// On the seventh day of Christmas
// my true love sent to me:
// 7 Swans a Swimming
// 6 Geese a Laying
// 5 Golden Rings
// 4 Calling Birds
// 3 French Hens
// 2 Turtle Doves
// and a Partridge in a Pear Tree

// On the eighth day of Christmas
// my true love sent to me:
// 8 Maids a Milking
// 7 Swans a Swimming
// 6 Geese a Laying
// 5 Golden Rings
// 4 Calling Birds
// 3 French Hens
// 2 Turtle Doves
// and a Partridge in a Pear Tree

// On the ninth day of Christmas
// my true love sent to me:
// 9 Ladies Dancing
// 8 Maids a Milking
// 7 Swans a Swimming
// 6 Geese a Laying
// 5 Golden Rings
// 4 Calling Birds
// 3 French Hens
// 2 Turtle Doves
// and a Partridge in a Pear Tree

// On the tenth day of Christmas
// my true love sent to me:
// 10 Lords a Leaping
// 9 Ladies Dancing
// 8 Maids a Milking
// 7 Swans a Swimming
// 6 Geese a Laying
// 5 Golden Rings
// 4 Calling Birds
// 3 French Hens
// 2 Turtle Doves
// and a Partridge in a Pear Tree

// On the eleventh day of Christmas
// my true love sent to me:
// 11 Pipers Piping
// 10 Lords a Leaping
// 9 Ladies Dancing
// 8 Maids a Milking
// 7 Swans a Swimming
// 6 Geese a Laying
// 5 Golden Rings
// 4 Calling Birds
// 3 French Hens
// 2 Turtle Doves
// and a Partridge in a Pear Tree

// On the first day of Christmas
// my true love sent to me:
// 12 Drummers Drumming
// 11 Pipers Piping
// 10 Lords a Leaping
// 9 Ladies Dancing
// 8 Maids a Milking
// 7 Swans a Swimming
// 6 Geese a Laying
// 5 Golden Rings
// 4 Calling Birds
// 3 French Hens
// 2 Turtle Doves
// and a Partridge in a Pear Tree

// solution
// Some single-loop solutions:
// 3A
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
// 3B
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

var ordinals = ['first','second','third','fourth','fifth','sixth',
            'seventh','eighth','ninth','tenth','eleventh','twelfth'];

var items = ["a partridge in a pear tree.\n",
            "two turtle doves, \nand ",
            "three french hens,\n",
            "four calling birds,\n",
            "five... gold... rings,\n",
            "six geese-a-laying,\n",
            "seven swans-a-swimming,\n",
            "eight maids-a-milking,\n",
            "nine ladies dancing,\n",
            "ten lords-a-leaping,\n",
            "eleven pipers piping,\n",
            "twelve drummers drumming,\n"]

function generateDay(n) {
    var verse = "On the "
            +ordinals[n]
            +" day of Xmas, my true love gave to me\n";
    for (var i=n; i>=0; i--) {
        verse += items[i];
    }
    return verse;
}

function generateSong() {
    var song="";
    for (var day=0; day < 12; day++) {
        song += generateDay(day)+'\n'; //calls inner loop
    }
    return song;
}

console.log(generateSong());




