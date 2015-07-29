// Error-detecting version

var suits = ['Hearts','Diamonds','Spades','Clubs'];
var cards = ['Ace','Two','Three','Four','Five','Six','Seven',
            'Eight','Nine','Ten','Jack','Queen','King'];

// check for strings
function checker(s) {
    if (typeof(s) === 'string' || typeof(s) === 'boolean') {
        return true;
    } else {
        return false;
    }
}

function rank(card) {
    if (checker(card)) {
        return NaN;
    }
    if (!(card%1) && card >= 0 && card < 52) {
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
    } else {
        return NaN;
    }
}

function suit(card) {
    if (checker(card)) {
        return NaN;
    }
    if (!(card%1) && card >= 0 && card < 52) {
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
    } else {
        return NaN;
    }
}

function cardID(rank,suit) {
    if (checker(rank) || checker(suit)) {
        return NaN;
    }
    // find the "left" side limit and add suit index
    if (!(rank%1) && !(suit%1) && (rank > 0 && rank < 14) && (suit > 0 && suit < 5)) {
        var lLimit = (rank - 1) * 4;
        var s = suit - 1;

        return lLimit + s;
    } else {
        return NaN;
    }
}

function color(card) {
    // RR,BB...
    if (checker(card)) {
        return NaN;
    }
    if (!(card%1) && card >= 0 && card < 52) {
        c = suit(card);
        if (c === 1 || c === 2) {
            return "red";
        } else {
            return "black";
        }
    } else {
        return NaN;
    }
}

function name(card) {
    if (checker(card)) {
        return NaN;
    }
    // build name string from arrays
    if (card >= 0 && card < 52) {
        var s = suit(card) - 1;
        var r = rank(card) - 1;
        return cards[r] + " of " + suits[s];
    } else {
        return NaN;
    }
}

// TESTING:
// added some additional functionality to help me debug
function assert(claim,message) {
    if (!claim) {
        console.error(message + "failed");
    } else {
        console.error(message + "passed");
    }
}

// my new assertions
assert(rank((3<2))===1, "My Test 1 "); //failure
assert(Number.isNaN(rank(0)), "My Test 2 "); //failure
assert(name("0")==="Ace of Hearts", "My Test 3 "); //failure
assert(Number.isNaN(rank((3<2))), "My Test 4 "); //pass
assert(Number.isNaN(cardID(true,false)), "My Test 5 "); //pass
assert(Number.isNaN(name(undefined)), "My Test 6 "); //pass

assert(rank(0)===1,  "Test 1 ");
assert(rank(3)===1,  "Test 2 ");
assert(rank(51)===13,"Test 3 ");
assert(suit(0)===1,  "Test 4 ");
assert(suit(5)===2,  "Test 5 ");
assert(suit(51)===4, "Test 6 ");
assert(cardID(1,1)===0,    "Test 7 ");
assert(cardID(13,4)===51,  "Test 8 ");
assert(cardID(8,3)===30,   "Test 9 ");
assert(color(0)==='red',   "Test 10 ");
assert(color(2)==='black', "Test 11 ");
assert(name(5)==='Two of Diamonds', "Test 12 ");
assert(name(51)==='King of Clubs',  "Test 13 ");


// Extra testing!
// These tests check that invalid arguments produce invalid output.
// I.e. "garbage in guarantees garbage out".
assert(Number.isNaN(rank(52)),  "Test 21 ");
assert(Number.isNaN(rank("0")), "Test 22 ");
assert(Number.isNaN(rank(-1)),  "Test 23 ");
assert(Number.isNaN(rank(2.5)), "Test 24 ");
assert(Number.isNaN(rank(undefined)),"Test 25 ");

assert(Number.isNaN(suit(52)),   "Test 26 ");
assert(Number.isNaN(suit(false)),"Test 27 ");
assert(Number.isNaN(suit(true)), "Test 28 ");
assert(Number.isNaN(suit(-1)),   "Test 29 ");
assert(Number.isNaN(suit(3.14)), "Test 30 ");

assert(Number.isNaN(cardID(0,1)),   "Test 31 ");
assert(Number.isNaN(cardID("1",1)), "Test 32 ");
assert(Number.isNaN(cardID(1,5)),   "Test 33 ");
assert(Number.isNaN(cardID(14,1)),  "Test 34 ");
assert(Number.isNaN(cardID(-1,-1)), "Test 35 ");
assert(Number.isNaN(cardID(0.5,1)), "Test 36 ");
assert(Number.isNaN(cardID(1,NaN)), "Test 37 ");

assert(Number.isNaN(color('apple')),"Test 41 ");
assert(Number.isNaN(color(true)),   "Test 42 ");
assert(Number.isNaN(name(false)),   "Test 43 ");
assert(Number.isNaN(name(-1)),      "Test 44 ");
assert(Number.isNaN(name(52)),      "Test 45 ");
assert(Number.isNaN(name(NaN)),     "Test 46 ");
