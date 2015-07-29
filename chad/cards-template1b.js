// Error-detecting version
suitArray = ['H','D','S','C'];
rankArray = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
suitName = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
rankName = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];


function isInt(x) {
  if (x >= 0 && x <= 51) {
    return Math.floor(x) === x;
  } else {
      return false;
    }
}

function isInt2(x,y) {
  if ((x >= 1 && x <= 13) && (y >=1 && y <= 4)) {
    return (Math.floor(x) === x && Math.floor(y) === y);
  } else {
      return false;
    }
}


function rank(id) {
  if (isInt(id)) {
    var rankIndex = Math.floor(id / 4) + 1;
    return rankIndex;
  } else {
    return NaN;
  }
}

function suit(id) {
  if (isInt(id)) {
    var suitIndex = (id%4) + 1;
    return suitIndex;
  } else {
    return NaN;
  }
}

function cardID(rank, suit) {
  if (isInt2(rank,suit)) {
    idIndex = ((rank - 1) *  4) + (suit - 1);
    return idIndex;
  } else {
    return NaN;
  }
}

function color(id) {
  if (isInt(id)) {
    var color = '';
    if (suit(id) == 0 || suit(id) == 1) {
      color = 'red';
    } else {
      color = 'black'
    }
    return color;
  } else {
    return NaN;
  }
}

function name(id) {
  if (isInt(id)) {
    var rankIndex = rank(id) - 1;
    var suitIndex = suit(id) - 1;
    var name = rankName[rankIndex] + ' of ' + suitName[suitIndex];
    return name;
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
