// **5)** _(Moderate, 35%)_

// Imagine that a deck of playing cards is sorted by rank and suit: first all the Aces, then the Twos, etc, with the Kings last.  Within each rank, the suits are in the order Hearts, Diamonds, Spades, Clubs.  Number each card in order from 0 to 51 (i.e. 0=Ace of Hearts; 1=Ace of Diamonds; 51=King of Clubs), and let that ID number represent the corresponding card.  Use this encoding scheme for each part below.

// **a)** Write five related functions to compute different aspects of a card:

// * `rank(id)` returns 1-13, representing the card's rank (for an _id_ between 0-51).

// * `suit(id)` returns 1-4, representing the card's suit (1 is Hearts, 4 is Clubs).

// * `color(id)` returns "red" or "black".

// * `name(id)` returns the full name of the card (e.g. "Four of Diamonds").

// * `cardID(rank,suit)` returns 0-51, identifying the card id of a given rank and suit.

// Assume each function is given valid arguments (i.e. the args are integers in the appropriate range).
// Your functions may call each other-- for example: _color_ could be derived from _suit_. Try to reuse functions to avoid duplicating code.

// **Hint #1:** Notice the patterns as the card id ranges from 0 to 51:

// - rank(id) increases slowly, like a quotient;
// - suit(id) cycles quickly through 1-4, (almost) like a remainder;
// - color(id) alternates _R,R,B,B,R,R,B,B..._

// Where have you seen that kind of pattern before?

// **Hint #2:** Generate your card names by combining a rank word from one array and suit word from another.

// Write your code into the [template file](cards-template1a.js).  The template also includes a suite of assertions for testing your code.  When you evaluate the entire template file, the assertions at the end will write messages to the console if your functions fail any test.  Make sure you pass all the tests!

// **b)**
// Now abandon the assumption of valid arguments and program defensively!  Rewrite your five functions so that each returns the correct answer when all arguments are valid, but returns NaN if any argument is not an integer in the appropriate range.

// You may use the provided [template file](cards-template1b.js), which has extra tests checking the results of invalid arguments.

// **Hint #3:** you can test whether an number _n_ is an integer with `(n%1 === 0)`.

// **c)**
// In the file with your solution to part **b**, extend the existing test suite: write 3 new assertions to test success cases and 3 more assertions to test failure cases.


// _(Please note: Problem 5 is the most important one in this homework, because variations of it will recur in several later homeworks.  The cleaner your code is now, the easier it will be to modify later.)_

