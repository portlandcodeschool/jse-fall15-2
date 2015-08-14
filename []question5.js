//[]**5)** _(Moderate, 35%)_

// Imagine that a deck of playing cards is sorted by rank and suit: first all the Aces, then the Twos, etc, with the Kings last.  Within each rank, the suits are in the order Hearts, Diamonds, Spades, Clubs.  [[]]Number each card in order from 0 to 51 (i.e. 0=Ace of Hearts; 1=Ace of Diamonds; 51=King of Clubs), and let that ID number represent the corresponding card.  Use this encoding scheme for each part below.

// [[]]**a)** Write five related functions to compute different aspects of a card:

// [[[]]]* `rank(id)` returns 1-13, representing the card's rank (for an _id_ between 0-51).

// [[[]]]* `suit(id)` returns 1-4, representing the card's suit (1 is Hearts, 4 is Clubs).

// [[[]]]* `color(id)` returns "red" or "black".

// [[[]]]* `name(id)` returns the full name of the card (e.g. "Four of Diamonds").

// [[[]]]* `cardID(rank,suit)` returns 0-51, identifying the card id of a given rank and suit.

// Assume each function is given valid arguments (i.e. the args are integers in the appropriate range).
// Your functions may call each other-- for example: _color_ could be derived from _suit_. [[]]Try to reuse functions to avoid duplicating code.

// **Hint #1:** Notice the patterns as the card id ranges from 0 to 51:

// - rank(id) increases slowly, like a quotient;
// - suit(id) cycles quickly through 1-4, (almost) like a remainder;
// - color(id) alternates _R,R,B,B,R,R,B,B..._

// Where have you seen that kind of pattern before?

// **Hint #2:** Generate your card names by combining a rank word from one array and suit word from another.

// Write your code into the [template file](cards-template1a.js).  The template also includes a suite of assertions for testing your code.  When you evaluate the entire template file, the assertions at the end will write messages to the console if your functions fail any test.  Make sure you pass all the tests![[[]]]

// [[]]**b)**
// Now abandon the assumption of valid arguments and program defensively! [[[]]] Rewrite your five functions so that each returns the correct answer when all arguments are valid, but returns NaN if any argument is not an integer in the appropriate range.

// You may use the provided [template file](cards-template1b.js), which has extra tests checking the results of invalid arguments.

// **Hint #3:** you can test whether an number _n_ is an integer with `(n%1 === 0)`.

// [[]]**c)**
// In the file with your solution to part **b**, extend the existing test suite: write 3 new assertions to test success cases[[[]]] and 3 more assertions to test failure cases.[[[]]]


// _(Please note: Problem 5 is the most important one in this homework, because variations of it will recur in several later homeworks.  The cleaner your code is now, the easier it will be to modify later.)_

// Solution
// 5a
// Simple version (no error-detection)

// function()--> possible return values

function rank(card) { // --> 1..13
    return Math.floor(card/4)+1;
}

function suit(card) { // --> 1..4
    return (card%4)+1;
}

function cardID(rank,suit) { // --> 0..51
    return (rank-1)*4 + (suit-1);
}

function color(card) { // -->"red,"black"
    return (suit(card) < 3)? "red": "black";
}

var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
                'Jack','Queen','King'];
var suitNames = ['','Hearts','Diamonds','Spade','Clubs'];

function name(card) {
    return rankNames[rank(card)]+' of '+suitNames[suit(card)];
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


// 5b
// Error-detecting version

// Helper function:
function isValid(num,low,high) { // Returns--> NaN, true
    if ((typeof num)!="number") //wrong type
        return NaN;
    if (num%1 !== 0) //non-integer
        return NaN;
    if (num<low || num>high) //out of range
        return NaN;
    return true;
}

// Card features:
function rank(card) { // --> 1..13, NaN
    return isValid(card,0,51) &&
        Math.floor(card/4)+1;
}

function suit(card) { // --> 1..4, NaN
    return isValid(card,0,51) &&
        ((card%4)+1);
}

function cardID(rank,suit) { // --> 0..51, NaN
    return isValid(rank,1,13) &&
            isValid(suit,1,4) &&
            ((rank-1)*4 + (suit-1));
}
function color(card) { // -->"red,"black",NaN
    var theSuit=suit(card); //may be NaN
    return theSuit && ((theSuit<3)? "red": "black");
}

// Both arrays are padded with an unused value ('' but could be anything) in the first position,
// so that all the other values can be found at the corresponding index (i.e. rankNames[2] is "Two").
var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
                'Jack','Queen','King'];
var suitNames = ['','Hearts','Diamonds','Spade','Clubs'];

function name(card) { //--> string, NaN
    var theRank = rank(card);
    var theSuit = suit(card);
    return theRank && theSuit && //if those are okay...
        (rankNames[theRank]+' of '+suitNames[theSuit]);//build the name string
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


// Extra testing!
// These tests check that invalid arguments produce invalid output.
// I.e. "garbage in guarantees garbage out".
assert(Number.isNaN(rank(52)),  "Test 21 failed");
assert(Number.isNaN(rank("0")), "Test 22 failed");
assert(Number.isNaN(rank(-1)),  "Test 23 failed");
assert(Number.isNaN(rank(2.5)), "Test 24 failed");
assert(Number.isNaN(rank(undefined)),"Test 25 failed");

assert(Number.isNaN(suit(52)),   "Test 26 failed");
assert(Number.isNaN(suit(false)),"Test 27 failed");
assert(Number.isNaN(suit(true)), "Test 28 failed");
assert(Number.isNaN(suit(-1)),   "Test 29 failed");
assert(Number.isNaN(suit(3.14)), "Test 30 failed");

assert(Number.isNaN(cardID(0,1)),   "Test 31 failed");
assert(Number.isNaN(cardID("1",1)), "Test 32 failed");
assert(Number.isNaN(cardID(1,5)),   "Test 33 failed");
assert(Number.isNaN(cardID(14,1)),  "Test 34 failed");
assert(Number.isNaN(cardID(-1,-1)), "Test 35 failed");
assert(Number.isNaN(cardID(0.5,1)), "Test 36 failed");
assert(Number.isNaN(cardID(1,NaN)), "Test 37 failed");

assert(Number.isNaN(color('apple')),"Test 41 failed");
assert(Number.isNaN(color(true)),   "Test 42 failed");
assert(Number.isNaN(name(false)),   "Test 43 failed");
assert(Number.isNaN(name(-1)),      "Test 44 failed");
assert(Number.isNaN(name(52)),      "Test 45 failed");
assert(Number.isNaN(name(NaN)),     "Test 46 failed");

// Part c: more tests!

// Examples:
assert(rank(4)===2,      "Test 51 failed");
assert(color(4)==='red', "Test 52 failed");
assert(name(4)==='Two of Hearts', "Test 53 failed");
// many others are possible...
