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

```
var fractionString = function( n, d ) {
  return Math.floor(n/d) + " " + n % d + "/" + d;
};
```

**b)** Write a second version of your function which improves the output in two special cases:

- A output string like "0 1/2" should be simplified to just "1/2";
- A output string like "1 0/3" should be simplified to just "1".

```
var fractionString = function( n, d ) {
  if (Math.floor(n/d) === 0) {
    return n % d + "/" + d;
  } else if ( n === d ) {
      return '1';
    } else {
        return Math.floor(n/d) + " " + n % d + "/" + d;
      }
};
```

```
I have the urge to make sure my fractions are all shown in their reduced form (e.g. 4/8 equals 1/2)....but I'm not sure how to do that right now.
```

**2)** _(Moderate, 10%)_

Rewrite each block below as the simplest equivalent you can discover.  Your equivalent should produce the same final conditions as the original code given the same initial conditions.
In each case, if there is an undeclared variable, assume it has been declared earlier and set to an unknown value.

**a)**

```
var i;
if ((n - Math.floor(n)) >= .5) {
  i = Math.ceil(n);
} else {
  i = Math.floor(n);
}
```

`i = Math.round(n)`

**b)**
```
var y, xIsFalse = (x? false : true);
if (xIsFalse)
  y = false;
else
  y = x;
```

`y = x`

**c)**
```
for (var count = 15 - i ; count < 15 ; count=count+1) {
  i = i-1;
  console.log(i+1)
}
```

```
for (count=0; count<i; count++) {
    console.log(i-count);
}
```

**d)**
```
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
```

```
if (a&&b) {
  x=0;
} else if (a||b) {
  x=1;
} else {
  x=2;
}
```


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
```

```
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function letterTriangle(n) {
  var str = '';
  for (var i = 0; i < n; i++) {
    for (var j = i; j >= 0; j--) {
      str +=  alphabet[j];
    }
    str += '\n';
  }
  return str;
}
```

**b)**
Adapting your solution to part a), write a function which returns a string containing the entire lyrics for the song "The Twelve Days of Christmas".  Make sure that your result is grammatically and typographically correct (include line breaks, commas, etc. where needed), but keep redundancy within your program to a minimum.  Don't just `console.log()` each line; as before, return them together as a single string which includes a '\n' at each line break.
You may want to use helper functions, loops, and/or arrays to store repeated elements.

If you prefer a non-Christmas option, you may choose a different song with similarly repeating structure, such as "There was an Old Woman Who Swallowed a Fly".  If you prefer a vegan option, you may write your own cruelty-free song.

```
function generateSong(n) {
  var day = ['first','second','third','fourth','fifth','sixth','seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth' ];
  var gifts = ['And a partridge in a pear tree.','Two turtle doves,','Three french hens,','Four calling birds,','Five golden rings!','Six geese a-laying,','Seven swans a-swimming,','Eight maids a-milking,','Nine ladies dancing,','Ten lords a-leaping,','Eleven pipers piping,','Twelve drummers drumming,'];
  var str = '';
  for (var i = 0; i < n; i++) {
    str += 'On the ' + day[i] + ' day of Christmas, \nMy true love gave to me: \n';
    if (day[i] === 'first') {
      str += 'A partridge in a pear tree.' + '\n';
    } else {
      for (var j = i; j >= 0; j--) {
        str +=  gifts[j] + '\n';
      }
    }
    str += '\n';
  }
  return str;
}

console.log((generateSong(12)))
```

**4)** _(Difficult, 20%)_

Suppose the '&' key on your keyboard is missing, and you want to be able to continue programming without it.  You decide to simulate the && operator with a function!

**a)**
Write a function `and2(a,b)` which tries to simulate the && operator: it should always return the same result as `(a && b)` for any values of _a_ and _b_.  (For example, `and2((0>1),true)` should return _false_.)  But you can't use && itself within your function!

```
function and2(a,b){
  if (a) {
    return b;
  } else {
    return a;
  }
}
```

**b)** Write another function `and3(a,b,c)` which tries to simulate a double-&& operator: it should always return the same result as `(a && b && c)` for any values of a,b,c.  (For example, `and3((1>0),(0>1),true)` should return _false_.)  As before, you're not allowed to use && itself. Remember that you can call functions from functions!

```
var and3 = function(a,b,c){
  if (!a) {
    return a;
  } else if (b) {
    return c;
  } else {
    return b;
  }
}

I'm struggling with the function within a function.
```

**c)**
Now generalize your function to handle any number of values.  You will learn better ways eventually, but for now use an array to store all the values.
Your new function `andN(values)` should accept one parameter _values_, which is an array holding all the values to && together.
If the argument you provide when calling the function holds values [a,b,c...z], as in
`andN([a,b,c...z])`, the function should return the same result as the expression `(a && b && c && ... z)`.
Make sure to handle two special cases: length 0 (then return _true_) and length 1 (then return that single value).
Again, don't use &&.

```
var andN = function (values){
  var compare = 0;
  if (values.length < 1) {
    return true;
  } else {
    for (i=0;i===compare; i++) {
      if (values[i]) {
        if (i+1 === values.length) {
          return values[i];
        } else {
          compare += 1;
        }
      } else {
        return values[i];
      }
    }
  }
}
```

**d)**
You've just realized that your effort was doomed: neither of your functions can replace the && operator in certain circumstances.  Explain why, and find an example which demonstrates failure.

```
Using a replacement for the && operator could get messy really quickly and really slow your program down.  I would assume if you had two functions that you would want to compare using the && operator then there wouldn't be a way to do it.

So instead of saying:

if (checkUser(x) === "Bob" && findPhotos(array) === 'catimage.png') {
  do something;
} else {
  do something else;
}

you would have to make a really complicated conditional statement that may not work.  This may not be a valid example or a valid answer, but my brain is fried. 😝
```

**5)** _(Moderate, 35%)_

Imagine that a deck of playing cards is sorted by rank and suit: first all the Aces, then the Twos, etc, with the Kings last.  Within each rank, the suits are in the order Hearts, Diamonds, Spades, Clubs.  Number each card in order from 0 to 51 (i.e. 0=Ace of Hearts; 1=Ace of Diamonds; 51=King of Clubs), and let that ID number represent the corresponding card.  Use this encoding scheme for each part below.

**a)** Write five related functions to compute different aspects of a card:

* `rank(id)` returns 1-13, representing the card's rank (for an _id_ between 0-51).

* `suit(id)` returns 1-4, representing the card's suit (1 is Hearts, 4 is Clubs).

* `color(id)` returns "red" or "black".

* `name(id)` returns the full name of the card (e.g. "Four of Diamonds").

* `cardID(rank,suit)` returns 0-51, identifying the card id of a given rank and suit.

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

**Hint #3:** you can test whether an number _n_ is an integer with `(n%1 === 0)`.

**c)**
In the file with your solution to part **b**, extend the existing test suite: write 3 new assertions to test success cases and 3 more assertions to test failure cases.


_(Please note: Problem 5 is the most important one in this homework, because variations of it will recur in several later homeworks.  The cleaner your code is now, the easier it will be to modify later.)_