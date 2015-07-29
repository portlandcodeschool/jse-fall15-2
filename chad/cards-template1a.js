// Simple version (no error-detection)

// function()--> possible return values


suitArray = ['H','D','S','C'];
rankArray = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
suitName = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
rankName = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];


function rank(id) {
  var rankIndex = Math.floor(id / 4) + 1;
  return rankIndex;
}

function suit(id) {
  var suitIndex = (id%4) + 1;
  return suitIndex;
}

function cardID(rank, suit) {
  idIndex = ((rank - 1) *  4) + (suit - 1);
  return idIndex;
}

function color(id) {
  var color = '';
  if (suit(id) == 0 || suit(id) == 1) {
    color = 'red';
  } else {
    color = 'black'
  }
  return color;
}

function name(id) {
  var rankIndex = rank(id) - 1;
  var suitIndex = suit(id) - 1;
  var name = rankName[rankIndex] + ' of ' + suitName[suitIndex];
  return name;
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

