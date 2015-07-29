// Simple version (no error-detection)

var suits = ['Hearts','Diamonds','Spades','Clubs'];
var cards = ['Ace','Two','Three','Four','Five','Six','Seven',
            'Eight','Nine','Ten','Jack','Queen','King'];

// function()--> possible return values

function rank(card) { // --> 1..13
    // this is ugly as sin, but works
    var count = 0;
    for (i = 0; i < cards.length; i++) {
        for (i = 0; i < 5; i++) {
            if (card === count) {
                return (cards.indexOf(cards[(Math.floor(card/4))])) + 1;
            } else {
                count++;
            }
        }
    }
}

function suit(card) { // --> 1..4
    var count = 0;
    for (i = 0; i < cards.length; i++) {
        for (i = 0; i < 5; i++) {
            if (card === count) {
                var dec = ((card/4)%1);
                // ternary would be smaller... more confusing
                if (!(dec%1)) {
                    return 1;
                } else if (dec === 0.25) {
                    return 2;
                } else if (dec === 0.5) {
                    return 3;
                } else {
                    return 4;
                }
            } else {
                count++;
            }
        }
    }
}

function cardID(rank,suit) { // --> 0..51
    // find the "left" side limit and add suit index
    var lLimit = (rank - 1) * 4;
    var s = suit - 1;

    return lLimit + s;
}

function color(card) { // -->"red","black"
    // RR,BB...
    c = suit(card);
    if (c === 1 || c === 2) {
        return "red";
    } else {
        return "black";
    }
}

function name(card) { // --> string
    // build name string from arrays
    var s = suit(card) - 1;
    var r = rank(card) - 1;
    return cards[r] + " of " + suits[s];
}

// TESTING:

function assert(claim,message) {
    if (!claim) console.error(message);
}

assert(rank(0)===1,  "Test 1 failed");
assert(rank(3)===1,  "Test 2 failed");
assert(rank(51)===13,"Test 3 failed");
assert(suit(0)===1,  "Test 4 failed");
assert(suit(5)===2,  "Test 5 failed");
assert(suit(51)===4, "Test 6 failed");
assert(cardID(1,1)===0,    "Test 7 failed");
assert(cardID(13,4)===51,  "Test 8 failed");
assert(cardID(8,3)===30,   "Test 9 failed");
assert(color(0)==='red',   "Test 10 failed");
assert(color(2)==='black', "Test 11 failed");
assert(name(5)==='Two of Diamonds', "Test 12 failed");
assert(name(51)==='King of Clubs',  "Test 13 failed");
