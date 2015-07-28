
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
