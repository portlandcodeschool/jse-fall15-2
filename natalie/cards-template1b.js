// Error-detecting version

var ranks = ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King']
var suits = ['Hearts','Diamonds','Spades','Clubs']
// function()--> possible return values

function checkCard(card) {
  if (typeof card === "number" && card >= 0 && card <= 51 && card%1 === 0){
    return true;
  } else {
    return false;
  }
}

function checkRankSuit(rank,suit){
  if ((rank+suit)%1 === 0 && typeof(rank+suit) === "number" && rank >= 1 && rank <= 13 && suit >= 1 && suit <= 4) {
    return true;
  } else {
    return false;
  }
}

function rank(card) { // --> 1..13
  if (checkCard(card) === true) {
    return Math.floor(card/4)+1;
  } else {
    return NaN;
  }
}

function suit(card) { // --> 1..4
  if (checkCard(card) === true) {
    return card%4 + 1;
  } else {
    return NaN;
  }
}

function cardID(rank,suit) { // --> 0..51
  if (checkRankSuit(rank,suit) === true){
    return 4*(rank-1) + (suit-1);
  } else {
    return NaN;
  }
}

function color(card) { // -->"red","black"
  if (checkCard(card) === true) {
    if (suit(card) == 1&&2) {
      return 'red';
    } else {
      return 'black';
    }
  } else {
    return NaN;
  }
}

function name(card) { // --> string
  if (checkCard(card) === true) {
    return ranks[rank(card) - 1] + ' of ' + suits[suit(card) - 1];
  } else {
    return NaN;
  }
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
assert(name(30)==='Eight of Spades',  "Test 14 failed");
assert(color(34)==='black',  "Test 15 failed");
assert(suit(17)===2,  "Test 16 failed");


// Extra testing!
// These tests check that invalid arguments produce invalid output.
// I.e. "garbage in guarantees garbage out".
assert(Number.isNaN(rank(52)),       "Test 21 failed");
assert(Number.isNaN(rank("0")),      "Test 22 failed");
assert(Number.isNaN(rank(-1)),       "Test 23 failed");
assert(Number.isNaN(rank(2.5)),      "Test 24 failed");
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

assert(Number.isNaN(name(-15)),     "Test 47 failed");
assert(Number.isNaN(color("1.54")), "Test 48 failed");
assert(Number.isNaN(cardID("",5)),  "Test 49 failed");
