//Homework #2

//Due Monday, 7/27

//Revisit your solution to homework #1, problem 5, which expresses an improper fraction as a proper 
//one, and turn your solution into a function.

//a) Write a function fractionString(n,d) which takes 2 parameters (n,d) and returns a string. 
//For example, fractionString(7,4) should return "1 3/4", and fractionString(3,3) should (for now) 
//return "1 0/3". As before, assume that n and d are both positive integers.

//Note that returning a string is not the same as printing a string. You may use console.log() for 
//debugging, but your function should have the correct string as its return value. You can also print 
//your return value with an expression like console.log(fractionString(7,4)).



var functionString = function(numerator,denominator){ 
var remainder = numerator % denominator;
var wholeNumber = Math.floor(numerator/denominator);
return wholeNumber + " " + remainder + '/' + denominator;
}

//console.log(functionString(7,4)) // prints: 1 3/4

//b) Write a second version of your function which improves the output in two special 
//cases:

//A output string like "0 1/2" should be simplified to just "1/2";
//A output string like "1 0/3" should be simplified to just "1".


var functionString = function(numerator,denominator){
  var remainder = numerator % denominator;
  var wholeNumber = Math.floor(numerator/denominator);
  if(wholeNumber ===0){
    return numerator + '/' + denominator;
  }else if(numerator === 0){
     return wholeNumber;
  }else{
     return wholeNumber + " " + remainder + '/' + denominator; 
  }
}; 
console.log(functionString(8,3));


//2) (Moderate, 10%)

//Rewrite each block below as the simplest equivalent you can discover. Your equivalent should 
//produce the same final conditions as the original code given the same initial conditions. In each 
//case, if there is an undeclared variable, assume it has been declared earlier and set to an unknown value.

//a)

//var n = 55.43
var i;
if ((n - Math.floor(n)) >= 0.5) {
  i = Math.ceil(n);
} else {
  i = Math.floor(n);
}
//console.log(i);
//55


//var n = 55.43;
var i = Math.round(n);
//console.log(i);
//55



b)

var y, xIsFalse = (x? false : true);
if (xIsFalse)
  y = false;
else
  y = x;

//

var y = x || false

//var y = x or var y = false.  || is the if else statement 


c)

//var i = 3;
for (var count = 15 - i ; count < 15 ; count=count+1) {
  i = i-1;
  console.log(i+1);
}
//3
//2
//1

//var i = 3;
for ( ; i>0; i--) {
    console.log(i);
}
//3
//2
//1

d)

//var a;
//var b;
var x;
if (a) {
  if (b) {
    x = 0;
  } else {
    x = 1;
  }
} else {
  if (b) {
    x = 1;
  } else {
    x = 2;
  }
}
//console.log(x);
//2

//var a;
//var b;
//var x;

if (a && b) {
   console.log (x = 0);
}else if (a || b) {
  console.log (x = 1);
}else {
  console.log (x = 2);
} //2


//3) (Moderate, 25%)

//a) Write a function letterTriangle(n) which returns a single string as follows:

//the function receives a parameter n, an integer from 1 to 26;
//the output string will have n lines, each ending in a newline ('\n') character;
//the first line of the string is always 'A';each line will be a sequence of letters, 
//going backward from some starting letter to 'A';each line starts one letter after the 
//previous line's start.As an example, the result of letterTriangle(4) will look like this 
//when printed:


var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var newAlphabet = [];

var display = function(n){
 newAlphabet.unshift(alphabet[n]);
 console.log(newAlphabet);
}
//unshift will always do the new value first...that's why it's not pritning as a ab abc abcd etc.  
//If it was .push instead of unshift, it would print that way.  

for (i=0; i< alphabet.length; i++){
 display(i);  
}


//b) Adapting your solution to part a), write a function which returns a string containing the entire 
//lyrics for the song "The Twelve Days of Christmas". Make sure that your result is grammatically and 
//typographically correct (include line breaks, commas, etc. where needed), but keep redundancy within 
//your program to a minimum. Don't just console.log() each line; as before, return them together as a 
//single string which includes a '\n' at each line break. You may want to use helper functions, loops, 
//and/or arrays to store repeated elements.

//If you prefer a non-Christmas option, you may choose a different song with similarly repeating structure, 
//such as "There was an Old Woman Who Swallowed a Fly". If you prefer a vegan option, you may write your own 
//cruelty-free song.

var days = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];

var gifts = [
  "A partridge in a pear tree.'\n",
  "Two turtle doves,\n",
  "Three french hens,\n",
  "Four calling birds,\n",
  "Five golden rings,\n",
  "Six geese a-laying,\n",
  "Seven swans a-swimming,\n",
  "Eight maids a-milking,\n",
  "Nine ladies dancing,\n",
  "Ten lords a-leaping,\n",
  "Eleven pipers piping,\n",
  "Twelve drummers drumming,\n"
];

function daySong(n) {
  var structure = "On the " + days[n] + " day of Christmas, my true love gave to me\n";
  for (var i = n; i >= 0; i--) {
    structure += gifts[i];
  }
  return structure;
}

function entireSong(n) {
  var song = " ";
  for (var i = 0; i < 12; i++) {
    song += daySong(i) + '\n';
  }
  return song;
}
console.log(entireSong());


//4) (Difficult, 20%)

//Suppose the '&' key on your keyboard is missing, and you want to be able to continue programming without it. 
//You decide to simulate the && operator with a function!

//a) Write a function and2(a,b) which tries to simulate the && operator: it should always return the same 
//result as (a && b) for any values of a and b. (For example, and2((0>1),true) should return false.) But 
//you can't use && itself within your function!


//var a = 7;
//var b = 300;

function and2(a,b) {
  if (a) {
    return b;
  } else {
    return a;
  }
}

//console.log(and2(a,b));
//300, because in && statements, if the conditions are satisfied with the 2nd argument, then the 2nd argument will print. 
//&& Returns expr1 if it can be converted to false; otherwise, returns expr2. Thus, when used with 
//Boolean values, && returns true if both operands are true; otherwise, returns false.

//b) Write another function and3(a,b,c) which tries to simulate a double-&& operator: it should always 
//return the same result as (a && b && c) for any values of a,b,c. (For example, and3((1>0),(0>1),true) 
//should return false.) As before, you're not allowed to use && itself. Remember that you can call functions 
//from functions!

//var a = 7;
// var b = 300;
// var c = "banana";

function and3(a,b,c) {
   if (a) {
    if (b) {
      console.log(c);
    }else{
      console.log(b);
  }
    }else{
      console.log(a);
    }
  }

//console.log(and3(a,b,c));
//"banana" - same reasoning as above. 

//c) Now generalize your function to handle any number of values. You will learn better ways eventually, 
//but for now use an array to store all the values. Your new function andN(values) should accept one parameter values, 
//which is an array holding all the values to && together. If the argument you provide when calling the function 
//holds values [a,b,c...z], as in andN([a,b,c...z]), the function should return the same result as the expression 
//(a && b && c && ... z). Make sure to handle two special cases: length 0 (then return true) and length 1 (then return 
//  that single value). Again, don't use &&.

values = ["banana", 25, true, "mickey mouse", false, 1999];

function andN(values) {
  var n = values.length;

  if (n == 0) {
    return true;
  }
  if (n == 1) {
    return values[0];
  }
  for (var i = 0; i < n; i++) {
    if (!values[i]) {
      return values[i];
    }
  }
  return values[i - 1];
}
console.log(andN(values));


//NOTE: (Logical AND) Returns expr1 if it can be converted to false; otherwise, returns expr2. Thus, when used with 
//Boolean values, && returns true if both operands are true; otherwise, returns false.

//d) You've just realized that your effort was doomed: neither of your functions can replace the && operator
//in certain circumstances. Explain why, and find an example which demonstrates failure.


Computers are big ol' dummies (so much so, that my computer just turn "dummies" (and everything that is in these parens) into a string...
let me fix that').  There are certain instances that && is needed in order for the computer to understand the data that it is 
being fed and the instructions that we are giving it. These instances include, but in no way are limited to:

-If you are instructing a computer to complete a task or run a method/function only after another task has been completed, && is the way to do this.  
You cannot use ||, "and"or a ,.  For some situations mentioed above, you could use an if/else statement to satisfy these conditions, but the code would 
not be as eloquent. 

-Both && and || are short-circuit evaluations - This short-circuiting is great for performance, as it allows significant bits of calculations to be skipped. 

-Both && and || only evaluate to their last evaluated operator.


//5) (Moderate, 35%)

//Imagine that a deck of playing cards is sorted by rank and suit: first all the Aces, then the Twos, etc, with 
//the Kings last. Within each rank, the suits are in the order Hearts, Diamonds, Spades, Clubs. Number each card 
//in order from 0 to 51 (i.e. 0=Ace of Hearts; 1=Ace of Diamonds; 51=King of Clubs), and let that ID number represent 
//the corresponding card. Use this encoding scheme for each part below.

function rank(card) {
  return Math.floor(card / 4) + 1;
}

function suit(card) {
  var remainder = card % 4;
  return remainder + 1;
}

function cardID(rank, suit) {
  var cardRank = (rank - 1) * 4;
  var cardSuit = (suit - 1);
  return cardRank + cardSuit;
}

function color(id) {
  var redOrBlack = (id % 4) + 1;
  if (redOrBlack == 1 || redOrBlack == 2) {
    return 'black';
  } else {
    return 'red';
  }
}

function name(card) {
  var ranksOfCards = ['', 'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
  var suitsOfCards = ['', 'Hearts', 'Diamonds', 'Spade', 'Clubs'];
  return ranksOfCards[rank(card)] + ' of ' + suitsOfCards[suit(card)];
}
console.log(name(5));


// b) Now abandon the assumption of valid arguments and program defensively! Rewrite your five functions so that 
// each returns the correct answer when all arguments are valid, but returns NaN if any argument is not an integer 
// in the appropriate range.

// You may use the provided template file, which has extra tests checking the results of invalid arguments.

function isValid(num,low,high) { 
    if ((typeof num)!="number") 
        return NaN;
    if (num%1 !== 0) 
        return NaN;
    if (num<low || num>high) 
        return NaN;
    return true;
}

function rank(card) {
  return isValid(card,0,51) &&
  Math.floor(card / 4) + 1;
}

function suit(card) {
  var remainder = card % 4;
  return isValid(card,0,51) && 
  remainder + 1;
}

function cardID(rank, suit) {
  var cardRank = (rank - 1) * 4;
  var cardSuit = (suit - 1);
  return isValid(rank,1,13) &&
  isValid(suit,1,4) &&
  cardRank + cardSuit;
}

function color(card) {
  var theSuit=suit(card); 
  if (suit(card) === 1 || suit(card) === 2) {
    return 'red';
  } else {
    return 'black';
  }
}

function name(card) {
  var ranksOfCards = ['', 'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
  var suitsOfCards = ['', 'Hearts', 'Diamonds', 'Spade', 'Clubs'];
  return ranksOfCards && suitsOfCards && (ranksOfCards[rank(card)] + ' of ' + suitsOfCards[suit(card)]);
}
console.log(name(5));

function assert(claim,message) {
    if (!claim) console.error(message);
}
assert(rank(0)===1,  "Test 1 failed");//passed
assert(rank(3)===1,  "Test 2 failed");//passed
assert(rank(51)===13,"Test 3 failed");//passed
assert(suit(0)===1,  "Test 4 failed");//passed
assert(suit(5)===2,  "Test 5 failed");//passed
assert(suit(51)===4, "Test 6 failed");//passed
assert(cardID(1,1)===0,    "Test 7 failed");//passed
assert(cardID(13,4)===51,  "Test 8 failed");//passed
assert(cardID(8,3)===30,   "Test 9 failed");//passed
assert(color(0)==='red',   "Test 10 failed");//passed
assert(color(2)==='black', "Test 11 failed");//passed
assert(name(5)==='Two of Diamonds', "Test 12 failed");//passed
assert(name(51)==='King of Clubs',  "Test 13 failed");//passed

// Hint #3: you can test whether an number n is an integer with (n%1 === 0).

// c) In the file with your solution to part b, extend the existing test suite: write 3 new assertions to test success cases and 
// 3 more assertions to test failure cases.

//(Please note: Problem 5 is the most important one in this homework, because variations of it will recur in several later 
//homeworks. The cleaner your code is now, the easier it will be to modify later.)


function isValid(num,low,high) { 
    if ((typeof num)!="number") 
        return NaN;
    var remainderNum = (num%1);
    if (remainderNum !== 0) 
        return NaN;
    if (num<low || num>high) 
        return NaN;
    return true;
}

function rank(card) {
  return isValid(card,0,51) &&
  Math.floor(card / 4) + 1;
}

function suit(card) {
  var remainder = card % 4;
  return isValid(card,0,51) && 
  remainder + 1;
}

function cardID(rank, suit) {
  var cardRank = (rank - 1) * 4;
  var cardSuit = (suit - 1);
  return isValid(rank,1,13) &&
  isValid(suit,1,4) &&
  cardRank + cardSuit;
}

function color(id) {
  var theSuit=suit(card); 
  if (suit(card) === 1 || suit(card) === 2) {
    return 'red';
  } else {
    return 'black';
  }
}

function name(card) {
  var ranksOfCards = ['', 'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
  var suitsOfCards = ['', 'Hearts', 'Diamonds', 'Spade', 'Clubs'];
  return ranksOfCards && suitsOfCards && (ranksOfCards[rank(card)] + ' of ' + suitsOfCards[suit(card)]);
}
console.log(name(5));

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

//anastasia tests
assert(Number.isNaN(color('dragons')),"Test 47 failed");
assert(Number.isNaN(name(1000000)),   "Test 46 failed");
assert(Number.isNaN(cardID(-33,-33)), "Test 48 failed");
assert(cardID(13,4)===4,              "Test 49 failed");
assert(cardID(0,51)===30,             "Test 50 failed");
assert(rank(1)===1,                   "Test 51 failed");
assert(name(5)==="Two of Diamonds",   "Test 52 success");
assert(name(45)==="Queen of Diamonds", "Test 53 success");
assert(name(51)==="King of Clubs",     "Test 54 success");




