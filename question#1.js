// **1)** _(Easy, 10% of total time)_

// Revisit your solution to homework #1, problem 5, which expresses an improper fraction as a proper one, and turn your solution into a function.

// **a)** Write a function `fractionString(n,d)` which takes 2 parameters (n,d) and returns a string.  For example, 
// `fractionString(7,4)` should return "1 3/4", and `fractionString(3,3)` should (for now) return "1 0/3".  As before, assume that _n_ and _d_ are both positive integers.

// Note that _returning_ a string is not the same as _printing_ a string.  You may use `console.log()` for debugging, but your function should have the correct string as its return value.
// You can also print your return value with an expression like `console.log(fractionString(7,4))`.


function fractionString(n,d) {
	var string = ((n-(n%d))/d) + " " + n%d + "/" + d;
	return string
}


fractionString (7, 4)
fractionString (3, 3)  


// **b)** Write a second version of your function which improves the output in two special cases:

// - A output string like "0 1/2" should be simplified to just "1/2";
// - A output string like "1 0/3" should be simplified to just "1".

function fractionString(n,d) {
	var whole = (n-(n%d))/d) + " ";
	var partial = n%d + "/" + d);
	var string = (
		if (n>d) {
			whole + partial;
		} else if (n = d) {
			whole
		} else { 
			partial;
		}
	)
		
		return string
}

fractionString (1, 2) //"0 1/2"
fractionString (3, 3) //"1 0/3"



// ***********************Week 1 Question 5

// **5)** (_15%_)

// Suppose you represent a fraction (_n/d_) with 2 integer variables: _n_ for the numerator and _d_ for the denominator.
// If _n_ is greater than _d_, the fraction is "improper", but it can be rewritten as a proper fraction.  For example, "7/4" is improper, but it can be rewritten as "1 3/4", which is proper.

// Assuming variables _n_ and _d_ are defined in advance (but you don't know their values), write a series of expressions to generate a string expressing the proper form of the fraction _n/d_.  For example, when _n===7_ and _d===4_, your resulting string should be "1 3/4".  You may assume both _n_ and _d_ are positive integers and _n_ > _d_, but otherwise you should be able to handle any values of _n_ and _d_.

// n = numerator
// d = denominator

// a) Solve it first by making use of a function called _Math.floor_.

// print(Math.floor(n/d) + " " + n%d + "/" + d)


// b) Now solve it without calling any functions, using merely operators.  (Hint: you'll need at least the modulo operator _%_.)

// n/d + " " + n%d + "/" + d

// This one is tough. How to find the number of times the numerator fits into the denomenator without the decimal places and without rounding. I have been testing 14/3 and 7/4. 

// 14/3 = 4.6666
// 7/4 = 1.75

// So I need 4 and 1 respectivly. I was thinking of changing the data into strings and somehow iterating over each charactor until a decimal was found, but that wouldn't work because the class hasn't hit on loops yet and I'm sure there is a way to do it without them. 

// The number that I'm searching for is the number of iterations of the numerator in the denominator. I was thinking of just using the first integer in the variable and assuming the iterations would only be 1 digit long. Ok new course. 

// These are the operators availible from our coursework that I think are relevant: - / * %

// How to make 14/3 = 4
// 12/3= 4; 
// the difference between 12 and 14 is 2; 
// 2 is a fraction of 3, the denomenator; calculate the difference between 14/3 and ; but I still need to round to do this... 
// subtract the fraction of the denominator (12/3) from gross iteration variable (14/3); 
// find the fraction of the denominator: 14%3 = 2
// subtract this from the denominator  n-(n%d); 3 - (14 % 3), 3 - (2), 1
// then divide numerator by denominator, thus factoring out remainder prior to calculation: n-(n%d); 14-(14%3); 14-(2); 12 (woot)
// Divide this modified numerator by denominator: ((n-(n%d))/d); ((14-(14%3))/3); ((14-(2))/3); ((12)/3); 4 (woot) 


// ((n-(n%d))/d) + " " + n%d + "/" + d



// ***********  end  ************Week 1 Question 5
