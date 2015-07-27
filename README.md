### Homework #2

Due Monday, 7/27

Each problem below lists an estimate of its relative difficulty and how much time it requires as a percentage of the whole set.  The total time estimate for this homework set is around 10-15 hours.

Please also read the [learning objectives](objectives.md) for this week.

---

**1)** _(Easy, 10% of total time)_

Revisit your solution to homework #1, problem 5, which expresses an improper fraction as a proper one, and turn your solution into a function.

**a)** Write a function `fractionString(n,d)` which takes 2 parameters (n,d) and returns a string.  For example, 
`fractionString(7,4)` should return "1 3/4", and `fractionString(3,3)` should (for now) return "1 0/3".  As before, assume that _n_ and _d_ are both positive integers.

Note that _returning_ a string is not the same as _printing_ a string.  You may use `console.log()` for debugging, but your function should have the correct string as its return value.
You can also print your return value with an expression like `console.log(fractionString(7,4))`.

 function fractionString(n,d) {
 return (n/d) - ((n/d)%1) + ' ' + (n%d) + "/" + d;
 };

**b)** Write a second version of your function which improves the output in two special cases:

- A output string like "0 1/2" should be simplified to just "1/2";

- A output string like "1 0/3" should be simplified to just "1".

function fractionString(n,d) {
if (n === 0) {
 return 0;
 }
else if ((n/d)-((n/d)%1) === 0) {
 return ((n%d) + "/" + d);
 }
 else if (n%d == 0) {
 return (n/d) - ((n/d)%1);
 }
 else {
 return (n/d) - ((n/d)%1) + ' ' + (n%d) + "/" + d;
 }
 };
 

---

**2)** _(Moderate, 10%)_

Rewrite each block below as the simplest equivalent you can discover.  Your equivalent should produce the same final conditions as the original code given the same initial conditions.
In each case, if there is an undeclared variable, assume it has been declared earlier and set to an unknown value.

**a)**

```
function i(n) {
if (n >= .5) {
  return Math.ceil(n);
} else {
  return Math.floor(n);
} 
}
```


**b)**
```
var y; 
xIsFalse = (x ? false : true);
y = x;
```


**c)**
```
function count(i){
  console.log(i);
  }

```


**d)**
```
var x;
  if (a&&b) {
    x = 0;
  } else if (a||b) {
    x = 1;
} else {
    x = 2;
  }

```


---

**3)** _(Moderate, 25%)_

**a)**
Write a function `letterTriangle(n)` which returns a single string as follows:

- the function receives a parameter `n`, an integer from 1 to 26;
- the output string will have `n` lines, each ending in a newline ('\n') character;
- the first line of the string is always 'A';
- each line will be a sequence of letters, going backward from some starting letter to 'A';
- each line starts one letter after the previous line's start.

As an example, the result of `letterTriangle(4)` will look like this when printed:
```
A
BA
CBA
DCBA

function letterTriangle(n) {
var space = '';
var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
for (var m = 0; m < n; m++){
for (var i = m; i>=0; i--) {
space+=alpha[i];
}
space+='\n'; 
}
return space;
}
```

**b)**
Adapting your solution to part a), write a function which returns a string containing the entire lyrics for the song "The Twelve Days of Christmas".  Make sure that your result is grammatically and typographically correct (include line breaks, commas, etc. where needed), but keep redundancy within your program to a minimum.  Don't just `console.log()` each line; as before, return them together as a single string which includes a '\n' at each line break.
You may want to use helper functions, loops, and/or arrays to store repeated elements.

var day = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eigth', 'ninth', 'tenth', 'eleventh', 'twelfth'];
var chorus = ['And a partridge in a pear tree', '2 turtle doves', '3 French hens', '4 calling birds', '5 gold rings', '6 geese a-laying', '7 swans a-swimming', '8 maids a-milking', '9 ladies dancing', '10 lords a-leaping', '11 pipers piping', '12 drummers drumming'];
function generateSong(n) {
var lyric = '';
for (var i = 0; i < n; i++) {
lyric += 'On the ' + day[i] + ' day of Christmas, \nmy truelove gave to me: \n';
if (day[i] === 'first') {
lyric += 'A partridge in a pear tree.' + '\n';
} else {
for (var m = i; m >= 0; m--) {
lyric += chorus[m] + '\n';
};
};
lyric += '\n';
}
return lyric;
}



If you prefer a non-Christmas option, you may choose a different song with similarly repeating structure, such as "There was an Old Woman Who Swallowed a Fly".  If you prefer a vegan option, you may write your own cruelty-free song.

---

**4)** _(Difficult, 20%)_

Suppose the '&' key on your keyboard is missing, and you want to be able to continue programming without it.  You decide to simulate the && operator with a function!

**a)**
Write a function `and2(a,b)` which tries to simulate the && operator: it should always return the same result as `(a && b)` for any values of _a_ and _b_.  (For example, `and2((0>1),true)` should return _false_.)  But you can't use && itself within your function!

function and2(a,b) {
if (a == true) {
if (b == true) {
return 'true';
}; 
} else {
return 'false';
};
};

**b)** Write another function `and3(a,b,c)` which tries to simulate a double-&& operator: it should always return the same result as `(a && b && c)` for any values of a,b,c.  (For example, `and3((1>0),(0>1),true)` should return _false_.)  As before, you're not allowed to use && itself. Remember that you can call functions from functions!

function and3(a, b, c) {
	if (a == true) {
		if (b == true) {
			if (c == true) {
				return 'true';
			} else {
		return 'false';
			} 
		} else {
		return 'false';
		}
	} else {
	return 'false';
	}
};

**c)**
Now generalize your function to handle any number of values.  You will learn better ways eventually, but for now use an array to store all the values.
Your new function `andN(values)` should accept one parameter _values_, which is an array holding all the values to && together.
If the argument you provide when calling the function holds values [a,b,c...z], as in
`andN([a,b,c...z])`, the function should return the same result as the expression `(a && b && c && ... z)`.
Make sure to handle two special cases: length 0 (then return _true_) and length 1 (then return that single value).
Again, don't use &&.

function andN(values) {
 var n = values.length;
 if (n == 0) {
 return true;
 }
 if (n == 1) {
 return values[0]
 }
 for (var i = 0; i < n; i++;) {
 if (!values[i]) {
 return values[i];
 }
 }
 return values[n-1];

**d)**
You've just realized that your effort was doomed: neither of your functions can replace the && operator in certain circumstances.  Explain why, and find an example which demonstrates failure.

&& is sometimes the most complete way to tell the computer what conditions we want to meet. If/else statements work for basic problems, but if you're writing a really complex problem, conditional statements leave a lot of room for error and require much more computing power. && is fast and efficient and tells the computer that in order for condition 1 to be true, we MUST also meet conditions 2, 3, 4, etc.

For example:
console.log(eatFood && notDie);
The only way to not die, is to not eat food.



---


**5)** _(Moderate, 35%)_

Imagine that a deck of playing cards is sorted by rank and suit: first all the Aces, then the Twos, etc, with the Kings last.  Within each rank, the suits are in the order Hearts, Diamonds, Spades, Clubs.  Number each card in order from 0 to 51 (i.e. 0=Ace of Hearts; 1=Ace of Diamonds; 51=King of Clubs), and let that ID number represent the corresponding card.  Use this encoding scheme for each part below.

**a)** Write five related functions to compute different aspects of a card:

* `rank(id)` returns 1-13, representing the card's rank (for an _id_ between 0-51).

function rank(id) {
var rank = Math.floor(id/4);
return rank;
}

* `suit(id)` returns 1-4, representing the card's suit (1 is Hearts, 4 is Clubs).

function suit(id) {
var suit = id%4 + 1;
return suit;
}


* `color(id)` returns "red" or "black".

function color(id) {
var color = id%4 + 1;
if (color == 1 || color == 2) {
return 'black';
} 
 else {
return 'red';
}
}

* `name(id)` returns the full name of the card (e.g. "Four of Diamonds").

function rank(id) {
var rank = Math.floor(id/4);
return rank;
}
function suit(id) {
var suit = id%4 + 1;
return suit;
}
function name(id) {
var suits = ['', 'Hearts', 'Diamonds', 'Spades', 'Clubs'];
var numbers = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
return numbers[rank(id)] + ' of ' + suits[suit(id)];
}


* `cardID(rank,suit)` returns 0-51, identifying the card id of a given rank and suit.

function rank(id) {
var rank = Math.floor(id/4);
return rank;
}
function suit(id) {
var suit = id%4 + 1;
return suit;
}
function cardID(rank, suit) {
var cardID = suit + (rank * 4);
}

Assume each function is given valid arguments (i.e. the args are integers in the appropriate range).
Your functions may call each other-- for example: _color_ could be derived from _suit_. Try to reuse functions to avoid duplicating code.

**Hint #1:** Notice the patterns as the card id ranges from 0 to 51:

- rank(id) increases slowly, like a quotient;
- suit(id) cycles quickly through 1-4, (almost) like a remainder;
- color(id) alternates _R,R,B,B,R,R,B,B..._

Where have you seen that kind of pattern before?

**Hint #2:** Generate your card names by combining a rank word from one array and suit word from another.

Write your code into the [template file](cards-template1a.js).  The template also includes a suite of assertions for testing your code.  When you evaluate the entire template file, the assertions at the end will write messages to the console if your functions fail any test.  Make sure you pass all the tests!

**b)**
Now abandon the assumption of valid arguments and program defensively!  Rewrite your five functions so that each returns the correct answer when all arguments are valid, but returns NaN if any argument is not an integer in the appropriate range.

You may use the provided [template file](cards-template1b.js), which has extra tests checking the results of invalid arguments.

if (typeof id === 'number' && id >=0 && id < 14 && id%1 === 0) {
function rank(id) {
var rank = Math.floor(id/4);
return rank;
} else {
return NaN;
}
};

if (typeof id === 'number' && id >=0 && id < 5 && id%1 === 0) {
function suit(id) {
var suit = id%4 + 1;
return suit;
} else {
return NaN;
}
};

if (typeof id === 'number' && id >=0 && id < 5 && id%1 === 0) {
function color(id) {
var color = id%4 + 1;
if (color == 1 || color == 2) {
return 'black';
} 
else {
return 'red';
}
} 
else {
return NaN;
}
};

if (typeof id === 'number' && id >=0 && id < 5 && id%1 === 0) {
function rank(id) {
var rank = Math.floor(id/4);
return rank;
}
function suit(id) {
var suit = id%4 + 1;
return suit;
}
function name(id) {
var suits = ['', 'Hearts', 'Diamonds', 'Spades', 'Clubs'];
var numbers = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
return numbers[rank(id)] + ' of ' + suits[suit(id)];
} else {
return NaN;
}
};

if (typeof id === 'number' && id >=0 && id < 5 && id%1 === 0) {
function rank(id) {
var rank = Math.floor(id/4);
return rank;
}
function suit(id) {
var suit = id%4 + 1;
return suit;
}
function cardID(rank, suit) {
var cardID = suit + (rank * 4);
}
else {
return NaN;
}
};

**Hint #3:** you can test whether an number _n_ is an integer with `(n%1 === 0)`.

**c)**
In the file with your solution to part **b**, extend the existing test suite: write 3 new assertions to test success cases and 3 more assertions to test failure cases.

assert(rank(1.2) === 1, 'Test 1 has failed');
assert(color('black') === 0, 'Test 2 has failed');
assert (cardID('Ace of Hearts') === 0, 'Test 3 has failed);


_(Please note: Problem 5 is the most important one in this homework, because variations of it will recur in several later homeworks.  The cleaner your code is now, the easier it will be to modify later.)_


